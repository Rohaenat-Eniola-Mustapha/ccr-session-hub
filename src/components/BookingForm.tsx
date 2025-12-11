import { useState, forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Calendar,
  Video,
  MapPin,
  Send,
  CheckCircle,
  Target,
  Compass,
  Footprints,
  Wrench,
  Clock,
  MessageCircle,
  CalendarCheck,
  Sparkles,
  Heart,
  Shield
} from "lucide-react";
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

  return (
    <section ref={ref} className="py-16 px-6 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Session Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Left column content here */}
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

              {/* Form Inputs */}
              <div className="space-y-5">
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
                    placeholder="+234 700 000 0000"
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
                    placeholder="Tell me about your career goals, challenges, or what you'd like to achieve..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                  />
                </div>

                {/* Button */}
                <a
                  href="https://selar.com/8s68537n99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    variant="hero"
                    size="xl"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Book Your Session
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

BookingForm.displayName = "BookingForm";
export default BookingForm;

