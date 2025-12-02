import { Button } from "@/components/ui/button";
import { ArrowDown, Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="gradient-hero min-h-screen flex flex-col justify-center items-center px-6 py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 left-10 w-56 h-56 bg-secondary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/3 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-2xl"
        animate={{ y: [-10, 10, -10] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-secondary/15 rounded-full blur-2xl"
        animate={{ y: [10, -10, 10] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Sparkle decorations */}
      <motion.div
        className="absolute top-32 left-20 text-secondary/40"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>
      <motion.div
        className="absolute bottom-40 right-16 text-white/30"
        animate={{ rotate: -360, scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles className="w-8 h-8" />
      </motion.div>

      <motion.div
        className="text-center max-w-2xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div variants={itemVariants} className="mb-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={ccrLogo}
              alt="Career Clarity Room Logo"
              className="w-32 h-32 mx-auto rounded-full shadow-elevated bg-white p-2 ring-4 ring-white/20"
            />
          </motion.div>
        </motion.div>

        {/* Header Text */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight"
        >
          Career Clarity Room helps women rebuild their careers, and move from{" "}
          <span className="relative inline-block text-white/80 italic">
            career confusion
            <motion.span
              className="absolute -bottom-1 left-0 w-full h-1 bg-white/40 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            />
          </span>{" "}
          to{" "}
          <span className="text-white font-extrabold underline decoration-white/50 decoration-2 underline-offset-4">clarity and confidence</span>
        </motion.h1>

        {/* Intro Section */}
        <motion.div
          variants={itemVariants}
          className="relative mb-8"
        >
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-elevated"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-body text-base md:text-lg text-white/90 leading-relaxed">
              Welcome to CCR, a supportive space for women (stay-at-home mums, career returnees, and women seeking direction). Here, you will find guidance, practical tools, and tailored mentorship to help you move forward.
            </p>
          </motion.div>
        </motion.div>

        {/* Key Highlights */}
        <motion.div variants={itemVariants} className="mb-10">
          <ul className="space-y-3 text-left max-w-md mx-auto">
            {highlights.map((highlight, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3 font-body text-white/90"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.8 + index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                whileHover={{ x: 5 }}
              >
                <motion.span
                  className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center mt-0.5 shadow-pink"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Check className="w-3.5 h-3.5 text-white" />
                </motion.span>
                <span>{highlight}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={itemVariants}>
          <motion.p
            className="font-display text-xl text-white mb-5 italic"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Start your clarity journey today.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button variant="hero" size="xl" onClick={onBookNow} className="relative overflow-hidden group">
              <span className="relative z-10">Book Your Session</span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="w-6 h-6 text-primary-foreground/50" />
      </motion.div>
    </section>
  );
};

export default Hero;
