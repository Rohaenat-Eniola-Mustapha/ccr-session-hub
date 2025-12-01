import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.86.0";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface BookingRequest {
  name: string;
  email: string;
  phone: string;
  sessionType: string;
  preferredDate: string;
  message: string;
}

async function sendEmail(to: string[], subject: string, html: string) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "CCR Bookings <onboarding@resend.dev>",
      to,
      subject,
      html,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Failed to send email: ${error}`);
  }

  return response.json();
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const booking: BookingRequest = await req.json();
    console.log("Received booking request:", booking);

    // Create Supabase client with service role for inserting booking
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Insert booking into database
    const { data: insertedBooking, error: dbError } = await supabase
      .from("bookings")
      .insert({
        name: booking.name,
        email: booking.email,
        phone: booking.phone,
        session_type: booking.sessionType,
        preferred_date: booking.preferredDate,
        message: booking.message || null,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Failed to save booking: ${dbError.message}`);
    }

    console.log("Booking saved to database:", insertedBooking);

    // Format the date nicely
    const formattedDate = new Date(booking.preferredDate).toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    // Send email notification to coach
    const coachEmailHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 30px; border-radius: 12px 12px 0 0;">
          <h1 style="color: #fbbf24; margin: 0; font-size: 24px;">New Booking Request</h1>
          <p style="color: #e2e8f0; margin: 10px 0 0;">Career Clarity Room</p>
        </div>
        
        <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
          <h2 style="color: #1e293b; margin-top: 0;">Client Details</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; width: 140px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-weight: 500;">${booking.name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">
                <a href="mailto:${booking.email}" style="color: #2563eb;">${booking.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">
                <a href="tel:${booking.phone}" style="color: #2563eb;">${booking.phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Session Type</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-weight: 500;">
                <span style="background: ${booking.sessionType === 'virtual' ? '#dbeafe' : '#dcfce7'}; color: ${booking.sessionType === 'virtual' ? '#1d4ed8' : '#166534'}; padding: 4px 12px; border-radius: 20px; font-size: 14px;">
                  ${booking.sessionType === 'virtual' ? '💻 Virtual' : '📍 Physical'}
                </span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Preferred Date</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-weight: 500;">${formattedDate}</td>
            </tr>
          </table>
          
          ${booking.message ? `
            <div style="margin-top: 20px;">
              <h3 style="color: #1e293b; margin-bottom: 10px;">Message</h3>
              <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0; color: #475569;">
                ${booking.message}
              </div>
            </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
            <p style="color: #64748b; font-size: 14px; margin: 0;">Reply directly to the client at <a href="mailto:${booking.email}" style="color: #2563eb;">${booking.email}</a></p>
          </div>
        </div>
      </div>
    `;

    await sendEmail(
      ["careerclarityroom@gmail.com"],
      `New Booking Request from ${booking.name}`,
      coachEmailHtml
    );

    console.log("Email sent to coach");

    // Send confirmation email to client
    const clientEmailHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 30px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="color: #fbbf24; margin: 0; font-size: 32px;">CCR</h1>
          <p style="color: #e2e8f0; margin: 10px 0 0;">Career Clarity Room</p>
        </div>
        
        <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
          <h2 style="color: #1e293b; margin-top: 0;">Thank you, ${booking.name.split(' ')[0]}!</h2>
          
          <p style="color: #475569; line-height: 1.6;">
            I've received your booking request and I'm excited to connect with you! I'll review your request and get back to you within 24 hours to confirm your session.
          </p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Your Request Details</h3>
            <p style="color: #475569; margin: 8px 0;"><strong>Session Type:</strong> ${booking.sessionType === 'virtual' ? '💻 Virtual' : '📍 Physical'}</p>
            <p style="color: #475569; margin: 8px 0;"><strong>Preferred Date:</strong> ${formattedDate}</p>
          </div>
          
          <p style="color: #475569; line-height: 1.6;">
            In the meantime, feel free to reach out if you have any questions.
          </p>
          
          <p style="color: #1e293b; margin-top: 30px;">
            Looking forward to helping you achieve career clarity!<br>
            <strong>Career Clarity Room</strong>
          </p>
        </div>
      </div>
    `;

    await sendEmail(
      [booking.email],
      "Your Booking Request - Career Clarity Room",
      clientEmailHtml
    );

    console.log("Confirmation email sent to client");

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Booking submitted successfully",
        bookingId: insertedBooking.id 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-booking-notification:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
