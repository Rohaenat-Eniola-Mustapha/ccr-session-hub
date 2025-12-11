import { motion } from "framer-motion";
import { Heart, Sparkles, Target, TrendingUp, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";

const values = [
  { icon: Heart, label: "Support" },
  { icon: Sparkles, label: "Confidence" },
  { icon: Target, label: "Clarity" },
  { icon: TrendingUp, label: "Growth" },
  { icon: Users, label: "Community" },
];

const stats = [
  { value: 100, suffix: "+", label: "Women Empowered" },
  { value: 50, suffix: "+", label: "Sessions Delivered" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const StatCard = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp({ end: value, duration: 2000 });

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="text-center p-6"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2"
        initial={{ scale: 1 }}
        whileInView={{ scale: [1, 1.1, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {count}
        {suffix}
      </motion.div>
      <p className="font-body text-foreground/70 text-sm md:text-base">{label}</p>
    </motion.div>
  );
};

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            About Us
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
        </motion.div>

        /* {/* Stats Section with Rolling Numbers */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 bg-primary/5 backdrop-blur-sm rounded-2xl border border-primary/10 overflow-hidden"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </motion.div> */

        {/* Who We Are */}
        <motion.div
          variants={itemVariants}
          className="max-w-3xl mx-auto mb-12"
        >
          <motion.div
            className="bg-primary/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/20"
            whileHover={{ scale: 1.02, backgroundColor: "rgba(30, 58, 138, 0.15)" }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-display text-2xl font-semibold text-primary mb-4">
              Who We Are
            </h3>
            <p className="font-body text-foreground/80 leading-relaxed text-lg">
              Career Clarity Room is a women-focused platform that provides guidance for those returning to work, changing careers, or seeking direction. We believe growth is possible at every stage, and clarity is the first step.
            </p>
          </motion.div>
        </motion.div>

        {/* Our Mission */}
        <motion.div
          variants={itemVariants}
          className="max-w-3xl mx-auto mb-16"
        >
          <motion.div
            className="bg-secondary/20 backdrop-blur-sm rounded-2xl p-8 border border-secondary/30"
            whileHover={{ scale: 1.02, backgroundColor: "rgba(236,72,153,0.25)" }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-display text-2xl font-semibold text-primary mb-4">
              Our Mission
            </h3>
            <p className="font-body text-foreground/80 leading-relaxed text-lg italic">
              To help women rediscover their strength, regain confidence, and build careers that match their goals and lifestyles.
            </p>
          </motion.div>
        </motion.div>

        {/* What We Stand For */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h3 className="font-display text-2xl font-semibold text-primary mb-8">
            What We Stand For
          </h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.label}
                className="flex flex-col items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-xl p-5 border border-primary/20 min-w-[120px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "rgba(30, 58, 138, 0.15)",
                  borderColor: "rgba(236,72,153,0.5)"
                }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <value.icon className="w-8 h-8 text-secondary" />
                </motion.div>
                <span className="font-body text-foreground font-medium">{value.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learn More Button */}
        <motion.div variants={itemVariants} className="text-center">
          <Link to="/about">
            <Button variant="hero" size="lg" className="group">
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
