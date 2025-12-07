import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get a response within 24 hours",
    value: "careerclarityroom@gmail.com",
    href: "mailto:careerclarityroom@gmail.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 9am to 5pm WAT",
    value: "+234 701 043 6270",
    href: "tel:+2347010436270",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick responses via chat",
    value: "Send a message",
    href: "https://wa.me/2347010436270",
  },
];

const faqs = [
  {
    question: "How quickly will I get a response?",
    answer: "We typically respond to all inquiries within 24 hours during business days.",
  },
  {
    question: "Can I schedule a call before booking?",
    answer: "Yes! Feel free to reach out via WhatsApp or email to schedule a free 15-minute discovery call.",
  },
  {
    question: "Do you offer group sessions?",
    answer: "Yes, we offer both individual and group coaching sessions. Contact us for group pricing.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers, card payments, and various online payment options.",
  },
];

const Contact = () => {
  return (
    <section className="py-20 px-6">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-body text-sm mb-4">
            Get In Touch
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
            We'd Love to Hear From You
          </h1>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            Whether you have questions about our services, need guidance on your career journey, 
            or want to explore partnership opportunities, we're here to help.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 transition-colors">
                <method.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {method.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm mb-4">
                {method.description}
              </p>
              <span className="font-body text-primary font-medium group-hover:text-secondary transition-colors">
                {method.value}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="font-display text-3xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-muted/30 border border-border"
                >
                  <h4 className="font-display font-semibold text-foreground mb-2">
                    {faq.question}
                  </h4>
                  <p className="font-body text-muted-foreground text-sm">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Office Hours */}
            <div className="p-8 rounded-2xl bg-primary text-primary-foreground">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-secondary" />
                <h3 className="font-display text-xl font-semibold">
                  Office Hours
                </h3>
              </div>
              <div className="space-y-3 font-body">
                <div className="flex justify-between">
                  <span className="text-primary-foreground/70">Monday - Friday</span>
                  <span>9:00 AM - 5:00 PM WAT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary-foreground/70">Saturday</span>
                  <span>10:00 AM - 2:00 PM WAT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary-foreground/70">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-secondary" />
                <h3 className="font-display text-xl font-semibold text-foreground">
                  Location
                </h3>
              </div>
              <p className="font-body text-muted-foreground mb-4">
                We offer both virtual and in-person sessions. Our physical sessions 
                are available in Lagos, Nigeria.
              </p>
              <p className="font-body text-foreground">
                Lagos, Nigeria
              </p>
            </div>

            {/* Quick Action */}
            <div className="p-8 rounded-2xl bg-secondary/10 border border-secondary/20">
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                Ready to Start Your Journey?
              </h3>
              <p className="font-body text-muted-foreground mb-6">
                Book a session today and take the first step toward career clarity.
              </p>
              <Button asChild className="w-full">
                <a href="/booking" className="flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Book a Session
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
