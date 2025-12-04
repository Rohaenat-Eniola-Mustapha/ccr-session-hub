import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Heart, Sparkles, Target, TrendingUp, Users, Award, BookOpen, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ifeoluwaImage from "@/assets/ifeoluwa-agboyin.png";

const values = [
  { icon: Heart, label: "Support" },
  { icon: Sparkles, label: "Confidence" },
  { icon: Target, label: "Clarity" },
  { icon: TrendingUp, label: "Growth" },
  { icon: Users, label: "Community" },
];

const expertise = [
  { icon: Briefcase, label: "Career Coaching", description: "Personalized guidance to navigate your career path" },
  { icon: GraduationCap, label: "Digital Skills Training", description: "Equipping women with in-demand tech skills" },
  { icon: BookOpen, label: "Mentorship Programs", description: "One-on-one support for your career journey" },
  { icon: Award, label: "Leadership Development", description: "Building confidence and leadership abilities" },
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

const About = () => {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="container mx-auto px-4 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              About Career Clarity Room
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Empowering women to rediscover their strength, regain confidence, and build fulfilling careers
            </p>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full mt-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* Meet the Founder Section */}
      <section className="py-20 bg-background">
        <motion.div
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Your Coach
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto"
          >
            {/* Image */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={ifeoluwaImage}
                  alt="Ifeoluwa Agboyin - Career Coach and Founder"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </motion.div>

            {/* Bio */}
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Ifeoluwa Agboyin
                </h3>
                <p className="text-secondary font-semibold text-lg">
                  Founder & Career Coach
                </p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Ifeoluwa Agboyin is a passionate career coach and mentor dedicated to helping women navigate their professional journeys. With years of experience in career development and digital skills training, she founded Career Clarity Room to create a supportive space where women can rediscover their potential.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Having walked the path of career transition herself, Ifeoluwa understands the unique challenges women face—whether returning to work after a break, pivoting to a new industry, or simply seeking direction in their careers. Her approach combines practical guidance with genuine empathy, helping clients move from confusion to clarity.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Through personalized coaching sessions, workshops, and digital resources, Ifeoluwa has empowered countless women to take bold steps toward fulfilling careers that align with their goals and lifestyles.
              </p>

              <Link to="/booking">
                <Button variant="hero" size="lg" className="mt-4">
                  Book a Session with Ifeoluwa
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <motion.div
          className="container mx-auto px-4 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-display text-2xl font-semibold text-white mb-4">
                Who We Are
              </h3>
              <p className="font-body text-white/90 leading-relaxed">
                Career Clarity Room is a women-focused platform that provides guidance for those returning to work, changing careers, or seeking direction. We believe growth is possible at every stage, and clarity is the first step toward a fulfilling career.
              </p>
              <p className="font-body text-white/90 leading-relaxed mt-4">
                We serve stay-at-home mothers ready to re-enter the workforce, career returnees seeking new opportunities, and women at any stage who want clarity and confidence in their professional lives.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-secondary/20 backdrop-blur-sm rounded-2xl p-8 border border-secondary/30"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(236,72,153,0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-display text-2xl font-semibold text-white mb-4">
                Our Mission
              </h3>
              <p className="font-body text-white/90 leading-relaxed italic">
                To help women rediscover their strength, regain confidence, and build careers that match their goals and lifestyles.
              </p>
              <p className="font-body text-white/90 leading-relaxed mt-4">
                We are committed to providing accessible, supportive, and transformative career guidance that empowers women to take control of their professional futures.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-background">
        <motion.div
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Expertise
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {expertise.map((item, index) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                className="bg-card rounded-2xl p-6 border border-border text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="w-8 h-8 text-secondary" />
                </motion.div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.label}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <motion.div
          className="container mx-auto px-4 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              What We Stand For
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.label}
                className="flex flex-col items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 min-w-[140px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "rgba(255,255,255,0.2)",
                  borderColor: "rgba(236,72,153,0.5)"
                }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <value.icon className="w-10 h-10 text-secondary" />
                </motion.div>
                <span className="font-body text-white font-semibold text-lg">{value.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <motion.div
          className="container mx-auto px-4 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Take the first step toward career clarity. Book a session with Ifeoluwa and discover the path that's right for you.
            </p>
            <Link to="/booking">
              <Button variant="hero" size="xl">
                Book Your Session Today
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
