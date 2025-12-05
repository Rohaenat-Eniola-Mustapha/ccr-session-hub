import { useState, forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar, Video, MapPin, Send, CheckCircle, Target, Compass, Footprints, Wrench, Clock, MessageCircle, CalendarCheck, Sparkles, Heart, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const sessionCovers = [
  { icon: Target, text: "Your current challenge" },
  { icon: Compass, text: "Your goals" },
  { icon: Footprints, text: "Practical next steps" },
  { icon: Wrench, text: "Tools to stay consistent" },
];

const bookingSteps = [
  {
    icon: CalendarCheck,
    title: "Submit Request",
    description: "Fill out the form with your details and preferred session time.",
  },
  {
    icon: MessageCircle,
    title: "Confirmation",
    description: "Receive a confirmation email within 24 hours with session details.",
  },
  {
    icon: Video,
    title: "Attend Session",
    description: "Join your session at the scheduled time and start your transformation.",
  },
];

const sessionBenefits = [
  {
    icon: Heart,
    title: "Safe Space",
    description: "A judgment-free environment where you can openly discuss your career concerns.",
  },
  {
    icon: Sparkles,
    title: "Personalized Approach",
    description: "Every session is tailored specifically to your unique situation and goals.",
  },
  {
    icon: Shield,
    title: "Confidential",
    description: "Your information and discussions are completely private and secure.",
  },
];

const faqs = [
  {
    question: "How long are the sessions?",
    answer: "Virtual sessions are 60 minutes, while physical (in-person) sessions are 90 minutes to allow for deeper engagement.",
  },
  {
    question: "What should I prepare before my session?",
    answer: "Come with an open mind! It helps to think about your current challenges, what you'd like to achieve, and any specific questions you have.",
  },
  {
    question: "Can I reschedule my session?",
    answer: "Yes! Please contact us at least 24 hours before your scheduled session to reschedule.",
  },
  {
    question: "What happens after I submit the form?",
    answer: "You'll receive a confirmation email within 24 hours. We'll confirm your session time and send you any preparation materials.",
  },
];

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

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
      <section ref={ref} className="py-16 px-6 bg-background">
        <div className="max-w-md mx-auto text-center">
          <motion.div 
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/20 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <CheckCircle className="w-10 h-10 text-secondary" />
          </motion.div>
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Request Received!
          </h2>
          <p className="font-body text-muted-foreground mb-8">
            Thank you for reaching out, {formData.name.split(" ")[0]}! I'll review your booking request and contact you within 24 hours to confirm your {formData.sessionType} session. Check your email for a confirmation!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <Link to="/resources">
              <Button>Explore Resources</Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="py-16 px-6 bg-background overflow-hidden">
      {/* Hero Section */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-body text-sm mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          Start Your Journey
        </motion.span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          Book a Session
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
          Take the first step towards career clarity. Schedule a personalized session 
          and let's work together to unlock your potential.
        </p>
      </motion.div>

      {/* How It Works Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Booking your session is simple and straightforward.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {bookingSteps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="text-center relative"
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center relative"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <step.icon className="w-8 h-8 text-primary" />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary text-secondary-foreground text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </span>
              </motion.div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Main Content - Form and Info */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Session Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* What a Session Covers */}
            <div className="gradient-card rounded-2xl p-8 mb-8 border border-border/50 shadow-soft">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                What a Session Covers
              </h3>
              <ul className="space-y-4">
                {sessionCovers.map((item, index) => (
                  <motion.li 
                    key={item.text}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="font-body text-foreground">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Session Benefits */}
            <div className="space-y-4">
              {sessionBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-muted/50"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h4>
                    <p className="font-body text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="gradient-card rounded-2xl p-8 border border-border/50 shadow-elevated">
              <div className="text-center mb-8">
                <motion.div 
                  className="w-14 h-14 mx-auto mb-4 rounded-full gradient-gold flex items-center justify-center shadow-gold"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  <Calendar className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  Request Your Session
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  Fill in your details and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
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

                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-body font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+234 700 000 0000"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

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
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
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
                      <span className="font-body text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" /> 60 min
                      </span>
                    </Label>
                    <Label
                      htmlFor="physical"
                      className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
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
                      <span className="font-body text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" /> 90 min
                      </span>
                    </Label>
                  </RadioGroup>
                </div>

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

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-body font-medium">
                    What would you like to discuss?
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your career goals, challenges, or what you'd like to achieve..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                  />
                </div>

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
                      Book Your Session
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-muted-foreground">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              variants={itemVariants}
              className="gradient-card rounded-xl p-6 border border-border/50"
            >
              <h4 className="font-display font-semibold text-foreground mb-2">
                {faq.question}
              </h4>
              <p className="font-body text-sm text-muted-foreground">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

BookingForm.displayName = "BookingForm";

export default BookingForm;
