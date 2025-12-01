import { useState, forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar, Video, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const BookingForm = forwardRef<HTMLElement>((_, ref) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sessionType: "virtual",
    preferredDate: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Call the edge function to save booking and send emails
      const { data, error } = await supabase.functions.invoke('send-booking-notification', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          sessionType: formData.sessionType,
          preferredDate: formData.preferredDate,
          message: formData.message,
        },
      });

      if (error) {
        throw error;
      }

      setIsSubmitted(true);
      toast({
        title: "Booking Request Sent!",
        description: "You'll receive a confirmation email shortly.",
      });
    } catch (error: any) {
      console.error("Error submitting booking:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section ref={ref} className="py-16 px-6 bg-muted/50">
        <div className="max-w-md mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/20 flex items-center justify-center animate-scale-in">
            <CheckCircle className="w-10 h-10 text-secondary" />
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Request Received!
          </h2>
          <p className="font-body text-muted-foreground mb-8">
            Thank you for reaching out, {formData.name.split(" ")[0]}! I'll review your booking request and contact you within 24 hours to confirm your {formData.sessionType} session. Check your email for a confirmation!
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                sessionType: "virtual",
                preferredDate: "",
                message: "",
              });
            }}
          >
            Book Another Session
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="py-16 px-6 bg-muted/50">
      <div className="max-w-md mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-gold flex items-center justify-center shadow-gold">
            <Calendar className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Book Your Session
          </h2>
          <p className="font-body text-muted-foreground">
            Take the first step towards career clarity. Fill out the form below and I'll get back to you shortly.
          </p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="font-body font-medium">
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="font-body font-medium">
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="font-body font-medium">
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Session Type */}
          <div className="space-y-3">
            <Label className="font-body font-medium">Session Type</Label>
            <RadioGroup
              value={formData.sessionType}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, sessionType: value }))
              }
              className="grid grid-cols-2 gap-4"
            >
              <Label
                htmlFor="virtual"
                className={`flex flex-col items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                  formData.sessionType === "virtual"
                    ? "border-secondary bg-secondary/10"
                    : "border-border hover:border-secondary/50"
                }`}
              >
                <RadioGroupItem value="virtual" id="virtual" className="sr-only" />
                <Video
                  className={`w-6 h-6 ${
                    formData.sessionType === "virtual"
                      ? "text-secondary"
                      : "text-muted-foreground"
                  }`}
                />
                <span className="font-body text-sm font-medium">Virtual</span>
              </Label>
              <Label
                htmlFor="physical"
                className={`flex flex-col items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                  formData.sessionType === "physical"
                    ? "border-secondary bg-secondary/10"
                    : "border-border hover:border-secondary/50"
                }`}
              >
                <RadioGroupItem value="physical" id="physical" className="sr-only" />
                <MapPin
                  className={`w-6 h-6 ${
                    formData.sessionType === "physical"
                      ? "text-secondary"
                      : "text-muted-foreground"
                  }`}
                />
                <span className="font-body text-sm font-medium">Physical</span>
              </Label>
            </RadioGroup>
          </div>

          {/* Preferred Date */}
          <div className="space-y-2">
            <Label htmlFor="preferredDate" className="font-body font-medium">
              Preferred Date & Time
            </Label>
            <Input
              id="preferredDate"
              name="preferredDate"
              type="datetime-local"
              value={formData.preferredDate}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="font-body font-medium">
              What would you like to discuss?
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell me about your career goals, challenges, or what you'd like to achieve from our session..."
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="hero"
            size="xl"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Submit Booking Request
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
});

BookingForm.displayName = "BookingForm";

export default BookingForm;
