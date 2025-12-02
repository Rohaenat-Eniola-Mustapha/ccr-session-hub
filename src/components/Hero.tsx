import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import ccrLogo from "@/assets/ccr-logo.jpeg";

interface HeroProps {
  onBookNow: () => void;
}

const Hero = ({ onBookNow }: HeroProps) => {
  return (
    <section className="gradient-hero min-h-screen flex flex-col justify-center items-center px-6 py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-32 left-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="text-center max-w-md mx-auto relative z-10">
        {/* Logo */}
        <div className="animate-fade-up mb-6">
          <img 
            src={ccrLogo} 
            alt="Career Clarity Room Logo" 
            className="w-40 h-40 mx-auto rounded-full shadow-elevated bg-white p-2"
          />
        </div>

        {/* Brand */}
        <p className="animate-fade-up font-display text-xl md:text-2xl text-primary-foreground/90 mb-2" style={{ animationDelay: '0.1s' }}>
          Career Clarity Room
        </p>
        <p className="animate-fade-up font-display text-lg italic text-secondary mb-6" style={{ animationDelay: '0.15s' }}>
          Clarity with Confidence
        </p>
        
        {/* Tagline */}
        <p className="animate-fade-up font-body text-lg text-primary-foreground/80 mb-10 leading-relaxed" style={{ animationDelay: '0.2s' }}>
          Transform your career path with personalized 1:1 coaching sessions. Gain clarity, confidence, and direction.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up flex flex-col gap-4" style={{ animationDelay: '0.3s' }}>
          <Button variant="hero" size="xl" onClick={onBookNow}>
            Book Your Session
          </Button>
          <Button variant="heroOutline" size="lg" onClick={onBookNow}>
            Learn More
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
