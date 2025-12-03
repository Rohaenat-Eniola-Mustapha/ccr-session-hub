import { Facebook, Instagram, MessageCircle, ExternalLink } from "lucide-react";

const resources = [
  { title: "From Stuck to Clear", url: "https://selar.com/d4145r" },
  { title: "The Career Clarity Room: A Strategic Guide for Stay-at-Home Mums", url: "https://selar.com/72f901" },
  { title: "Career and Motherhood: Strike the Balance", url: "https://selar.com/qm9oz65w1k" },
  { title: "CCR Clarity Worksheet", url: "https://selar.com/492w67" },
  { title: "CCR Free Resume Template", url: "https://selar.com/oa1611" },
];

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Book a Session", href: "#booking" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", url: "https://www.facebook.com/share/18yXBJhubA/" },
  { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/career_clarity_room" },
  { icon: MessageCircle, label: "WhatsApp", url: "https://wa.me/2347010436270" },
];

const Footer = () => {
  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-6 bg-primary text-white">
      <div className="max-w-4xl mx-auto">
        {/* Resources Section */}
        <div id="resources" className="mb-10">
          <h3 className="font-display text-xl font-bold mb-6 text-center">Resources</h3>
          <div className="grid gap-3">
            {resources.map((resource) => (
              <a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-secondary transition-colors font-body text-sm group"
              >
                <ExternalLink className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>{resource.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="mb-10 text-center">
          <h3 className="font-display text-xl font-bold mb-6">Connect With Us</h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-white/80 hover:text-secondary transition-colors group"
                aria-label={social.label}
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <social.icon className="w-6 h-6" />
                </div>
                <span className="font-body text-xs">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-8 text-center">
          <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {quickLinks.map((link, index) => (
              <span key={link.label} className="flex items-center">
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="font-body text-sm text-white/80 hover:text-secondary transition-colors"
                >
                  {link.label}
                </button>
                {index < quickLinks.length - 1 && (
                  <span className="ml-4 text-white/40">|</span>
                )}
              </span>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-white/20">
          <p className="font-body text-sm text-white/60">
            © Career Clarity Room. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
