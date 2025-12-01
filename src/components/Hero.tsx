import { Button } from "@/components/ui/button";
import { Sparkles, ArrowDown } from "lucide-react";

interface HeroProps {
  onBookNow: () => void;
}

const Hero = ({ onBookNow }: HeroProps) => {
  return (
    <section className="gradient-hero min-h-screen flex flex-col justify-center items-center px-6 py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-32 left-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="text-center max-w-md mx-auto relative z-10">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8">
          <Sparkles className="w-4 h-4 text-secondary" />
          <span className="text-sm font-body text-primary-foreground/90">Career Coaching</span>
        </div>

        {/* Logo/Brand */}
        <h1 className="animate-fade-up font-display text-5xl md:text-6xl font-bold text-primary-foreground mb-4" style={{ animationDelay: '0.1s' }}>
          CCR
        </h1>
        <p className="animate-fade-up font-display text-xl md:text-2xl text-primary-foreground/80 mb-6" style={{ animationDelay: '0.2s' }}>
          Career Clarity Room
        </p>
        
        {/* Tagline */}
        <p className="animate-fade-up font-body text-lg text-primary-foreground/70 mb-10 leading-relaxed" style={{ animationDelay: '0.3s' }}>
          Transform your career path with personalized 1:1 coaching sessions. Gain clarity, confidence, and direction.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up flex flex-col gap-4" style={{ animationDelay: '0.4s' }}>
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
