import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import coachImage from "@/assets/coach-no-bg.png";

interface HeroProps {
  onBookNow: () => void;
}

const Hero = ({ onBookNow }: HeroProps) => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.h1
          className="font-display text-[12vw] md:text-[14vw] lg:text-[16vw] font-bold text-muted/30 whitespace-nowrap tracking-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          CAREER COACH
        </motion.h1>
      </div>

      {/* Coach Image - Left Side */}
      <motion.div
        className="absolute left-0 bottom-0 w-[45%] md:w-[35%] lg:w-[30%] z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img
          src={coachImage}
          alt="Ifeoluwa Agboyin - Career Coach"
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* Dark Content Section - Bottom Right */}
      <div className="absolute bottom-0 right-0 w-full md:w-[70%] lg:w-[65%] z-20">
        <motion.div
          className="bg-primary rounded-tl-[3rem] p-8 md:p-12 lg:p-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Stats Badge */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-secondary/30 border-2 border-primary flex items-center justify-center">
                <span className="text-white text-xs">👩</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-secondary/40 border-2 border-primary flex items-center justify-center">
                <span className="text-white text-xs">👩‍💼</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-secondary/50 border-2 border-primary flex items-center justify-center">
                <span className="text-white text-xs">👩‍🎓</span>
              </div>
            </div>
            <span className="bg-card/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-body">
              100+ Women Empowered
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Align Your Career
            <br />
            <span className="text-secondary">With Your Purpose</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="font-body text-white/80 text-base md:text-lg mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Career Clarity Room helps women rebuild their careers, moving from{" "}
            <span className="text-white/60 italic">career confusion</span> to{" "}
            <span className="text-white font-semibold">clarity and confidence</span>.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="secondary"
                size="xl"
                onClick={onBookNow}
                className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8"
              >
                Book Your Session
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="w-6 h-6 text-primary" />
      </motion.div>
    </section>
  );
};

export default Hero;
