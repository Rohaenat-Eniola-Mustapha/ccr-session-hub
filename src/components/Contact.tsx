import { Mail, Phone, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 px-6 gradient-hero">
      <div className="max-w-md mx-auto text-center">
        {/* Section Header */}
        <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
          Let's Connect
        </h2>
        <p className="font-body text-primary-foreground/70 mb-10">
          Have questions? Reach out directly and I'll be happy to help.
        </p>

        {/* Contact Info */}
        <div className="space-y-4 mb-10">
          <a
            href="mailto:hello@careerclarityroom.com"
            className="flex items-center justify-center gap-3 p-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-200"
          >
            <Mail className="w-5 h-5 text-secondary" />
            <span className="font-body text-primary-foreground">
              hello@careerclarityroom.com
            </span>
          </a>
          <a
            href="tel:+15551234567"
            className="flex items-center justify-center gap-3 p-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-200"
          >
            <Phone className="w-5 h-5 text-secondary" />
            <span className="font-body text-primary-foreground">
              +1 (555) 123-4567
            </span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-200 group"
          >
            <Instagram className="w-5 h-5 text-primary-foreground group-hover:text-primary" />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all duration-200 group"
          >
            <Linkedin className="w-5 h-5 text-primary-foreground group-hover:text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
