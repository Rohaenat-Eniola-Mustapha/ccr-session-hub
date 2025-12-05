import { Video, MapPin, Clock, GraduationCap, Compass, BookOpen, Handshake, Users, CheckCircle, ArrowRight, Sparkles, Target, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: GraduationCap,
    title: "Career Mentorship & Digital Skills Training",
    description: "Personal guidance to help you set goals, make decisions, and map your next steps.",
    features: [
      "Personalized career roadmap creation",
      "Digital skills assessment & training",
      "Goal setting and action planning",
      "Industry insights and trends"
    ],
  },
  {
    icon: Compass,
    title: "1:1 Clarity Sessions",
    description: "Dedicated sessions focused on direction, decision-making, and career confidence.",
    features: [
      "Deep-dive career exploration",
      "Strength and skills identification",
      "Decision-making frameworks",
      "Confidence building strategies"
    ],
  },
  {
    icon: BookOpen,
    title: "Clarity Programs",
    description: "Structured learning paths designed for women (stay-at-home mums and returning professionals).",
    features: [
      "Step-by-step curriculum",
      "Flexible self-paced learning",
      "Practical exercises & worksheets",
      "Progress tracking & milestones"
    ],
  },
  {
    icon: Handshake,
    title: "Accountability Partner",
    description: "Support to help you achieve your goals and stay on track with consistent check-ins.",
    features: [
      "Regular progress check-ins",
      "Goal accountability tracking",
      "Motivation and encouragement",
      "Obstacle troubleshooting"
    ],
  },
  {
    icon: Users,
    title: "Community Activities",
    description: "Weekly sessions, prompts, and challenges to help you stay consistent and connected.",
    features: [
      "Weekly group sessions",
      "Interactive challenges",
      "Peer support network",
      "Resource sharing"
    ],
  },
  {
    icon: Target,
    title: "Resume & Profile Optimization",
    description: "Get your professional documents polished and ready to make an impact.",
    features: [
      "Resume review & enhancement",
      "LinkedIn profile optimization",
      "Cover letter guidance",
      "Personal branding tips"
    ],
  },
];

const sessionTypes = [
  {
    icon: Video,
    title: "Virtual Session",
    description: "Connect from anywhere via video call. Perfect for busy schedules and remote access.",
    duration: "60 minutes",
    benefits: ["Flexible scheduling", "No travel required", "Recording available", "Screen sharing for resources"],
  },
  {
    icon: MapPin,
    title: "Physical Session",
    description: "In-person coaching for deeper connection and focused, distraction-free conversation.",
    duration: "90 minutes",
    benefits: ["Face-to-face interaction", "Deeper engagement", "Hands-on exercises", "Personal touch"],
  },
];

const whyChooseUs = [
  {
    icon: Heart,
    title: "Women-Focused Approach",
    description: "Our programs are specifically designed for women navigating career transitions, motherhood, and professional growth.",
  },
  {
    icon: Sparkles,
    title: "Personalized Guidance",
    description: "Every session is tailored to your unique situation, goals, and challenges. No one-size-fits-all solutions.",
  },
  {
    icon: Target,
    title: "Action-Oriented Results",
    description: "Walk away from every session with clear action steps and practical strategies you can implement immediately.",
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="py-16 px-6 bg-background overflow-hidden">
      {/* Hero Section */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary font-body text-sm mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          What We Offer
        </motion.span>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          Services & Programs
        </h1>
        <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
          Tailored support to help you gain clarity, build confidence, and create the career you deserve. 
          Every service is designed with women in mind.
        </p>
      </motion.div>

      {/* Why Choose Us Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="text-center p-6"
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <item.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto mb-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Our Core Services
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Comprehensive support designed to guide you through every stage of your career journey.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3 }}
              className="gradient-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 border border-border/50 flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  className="p-3 rounded-lg bg-secondary/10 shrink-0"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-6 h-6 text-secondary" />
                </motion.div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                </div>
              </div>
              <p className="font-body text-sm text-muted-foreground mb-4">
                {service.description}
              </p>
              <ul className="space-y-2 mt-auto">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="font-body text-xs text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Session Types */}
      <div className="max-w-6xl mx-auto mb-20">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Session Options
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Choose the session format that works best for your schedule and preferences.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {sessionTypes.map((type, index) => (
            <motion.div
              key={type.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="gradient-card rounded-2xl p-8 shadow-soft hover:shadow-elevated border border-border/50"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <type.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    {type.title}
                  </h3>
                  <div className="flex items-center gap-1 text-secondary mt-1">
                    <Clock className="w-4 h-4" />
                    <span className="font-body text-sm font-medium">{type.duration}</span>
                  </div>
                </div>
              </div>
              <p className="font-body text-muted-foreground mb-6">
                {type.description}
              </p>
              <ul className="space-y-3">
                {type.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-body text-sm text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="gradient-card rounded-2xl p-8 md:p-12 text-center border border-border/50 shadow-elevated">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="font-body text-muted-foreground mb-8 max-w-xl mx-auto">
            Take the first step towards career clarity. Book a session today and start your transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="group">
                Book Your Session
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/resources">
              <Button variant="outline" size="lg">
                Explore Resources
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
