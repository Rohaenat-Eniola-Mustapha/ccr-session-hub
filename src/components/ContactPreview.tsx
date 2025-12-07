import { Mail, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    value: "careerclarityroom@gmail.com",
    href: "mailto:careerclarityroom@gmail.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+234 701 043 6270",
    href: "tel:+2347010436270",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Send a message",
    href: "https://wa.me/2347010436270",
  },
];

const ContactPreview = () => {
  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-body text-sm mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            Reach Out to Us
          </h2>
          <p className="font-body text-muted-foreground mb-10 max-w-xl mx-auto">
            For questions, partnership, or support - we're here to help you on your career journey.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-secondary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                <method.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {method.title}
              </h3>
              <span className="font-body text-muted-foreground text-sm group-hover:text-secondary transition-colors">
                {method.value}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
