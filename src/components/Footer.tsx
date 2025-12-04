import { Link } from "react-router-dom";
import { Facebook, Instagram, MessageCircle, ExternalLink } from "lucide-react";

const resources = [
  { title: "From Stuck to Clear", url: "https://selar.com/d4145r" },
  { title: "Career Clarity Room Guide", url: "https://selar.com/72f901" },
  { title: "Career and Motherhood", url: "https://selar.com/qm9oz65w1k" },
  { title: "CCR Clarity Worksheet", url: "https://selar.com/492w67" },
  { title: "Free Resume Template", url: "https://selar.com/oa1611" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Book a Session", href: "/booking" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", url: "https://www.facebook.com/share/18yXBJhubA/" },
  { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/career_clarity_room" },
  { icon: MessageCircle, label: "WhatsApp", url: "https://wa.me/2347010436270" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h2 className="font-display text-2xl font-bold mb-3">Career Clarity Room</h2>
            <p className="font-body text-white/70 text-sm leading-relaxed mb-6">
              Helping women rebuild their careers, move from confusion to clarity and confidence.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-white/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div id="resources" className="lg:col-span-2">
            <h3 className="font-display text-lg font-semibold mb-4">Resources</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {resources.map((resource) => (
                <li key={resource.title}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-body text-sm text-white/70 hover:text-secondary transition-colors group"
                  >
                    <ExternalLink className="w-3.5 h-3.5 flex-shrink-0 opacity-60 group-hover:opacity-100" />
                    <span>{resource.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-white/50">
            © {new Date().getFullYear()} Career Clarity Room. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            {quickLinks.slice(0, 4).map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="font-body text-xs text-white/50 hover:text-white/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
