import { Button } from "@/components/ui/button";
import { ArrowDown, Check } from "lucide-react";
import ccrLogo from "@/assets/ccr-logo.jpeg";

interface HeroProps {
  onBookNow: () => void;
}

const Hero = ({ onBookNow }: HeroProps) => {
  const highlights = [
    "Career mentorship and digital skills training",
    "Career Clarity Sessions",
    "1:1 private sessions",
    "Downloadable resources",
    "A community committed to growth",
  ];

  return (
    <section className="gradient-hero min-h-screen flex flex-col justify-center items-center px-6 py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-32 left-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="text-center max-w-2xl mx-auto relative z-10">
        {/* Logo */}
        <div className="animate-fade-up mb-6">
          <img 
            src={ccrLogo} 
            alt="Career Clarity Room Logo" 
            className="w-32 h-32 mx-auto rounded-full shadow-elevated bg-white p-2"
          />
        </div>

        {/* Header Text */}
        <h1 className="animate-fade-up font-display text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-8 leading-tight" style={{ animationDelay: '0.1s' }}>
          Career Clarity Room helps women rebuild their careers, and move from career confusion to clarity and confidence
        </h1>

        {/* Intro Section */}
        <div className="animate-fade-up bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20" style={{ animationDelay: '0.2s' }}>
          <p className="font-body text-base md:text-lg text-primary-foreground/90 leading-relaxed">
            Welcome to CCR, a supportive space for women (stay-at-home mums, career returnees, and women seeking direction). Here, you will find guidance, practical tools, and tailored mentorship to help you move forward.
          </p>
        </div>

        {/* Key Highlights */}
        <div className="animate-fade-up mb-10" style={{ animationDelay: '0.3s' }}>
          <ul className="space-y-3 text-left max-w-md mx-auto">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-3 font-body text-primary-foreground/90">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary flex items-center justify-center mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Call to Action */}
        <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <p className="font-display text-lg text-secondary mb-4 italic">
            Start your clarity journey today.
          </p>
          <Button variant="hero" size="xl" onClick={onBookNow}>
            Book Your Session
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary-foreground/50" />
      </div>
    </section>
  );
};

export default Hero;
