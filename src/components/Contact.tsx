import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 px-6 gradient-hero">
      <div className="max-w-md mx-auto text-center">
        {/* Section Header */}
        <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
          Reach Out
        </h2>
        <p className="font-body text-primary-foreground/70 mb-10">
          For questions, partnership, or support.
        </p>

        {/* Contact Info */}
        <a
          href="mailto:careerclarityroom@gmail.com"
          className="inline-flex items-center justify-center gap-3 p-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-200"
        >
          <Mail className="w-5 h-5 text-secondary" />
          <span className="font-body text-primary-foreground">
            careerclarityroom@gmail.com
          </span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
