import { ExternalLink, BookOpen, FileText, Download, Sparkles, Target, CheckCircle, ArrowRight, Star, Gift, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const featuredResource = {
  title: "From Stuck to Clear",
  description: "A comprehensive guide to help you break free from career confusion and find your path forward. This is our most popular resource, packed with actionable strategies and exercises.",
  url: "https://selar.com/d4145r",
  highlights: [
    "Step-by-step clarity framework",
    "Self-assessment exercises",
    "Action planning templates",
    "Real-life success stories"
  ],
};

const guides = [
  {
    title: "The Career Clarity Room: A Strategic Guide for Stay-at-Home Mums",
    description: "Navigate your next career move with confidence using this strategic guide designed specifically for stay-at-home mums ready to return to the workforce.",
    url: "https://selar.com/72f901",
    icon: BookOpen,
    tag: "Best for Mums",
  },
  {
    title: "Career and Motherhood: Strike the Balance",
    description: "Practical strategies for every woman seeking to balance career ambitions with motherhood without sacrificing either.",
    url: "https://selar.com/qm9oz65w1k",
    icon: BookOpen,
    tag: "Popular",
  },
];

const tools = [
  {
    title: "CCR Clarity Worksheet",
    description: "An actionable worksheet to help you gain clarity on your career goals, identify your strengths, and map out your next steps.",
    url: "https://selar.com/492w67",
    icon: FileText,
    tag: "Worksheet",
  },
  {
    title: "CCR Free Resume Template",
    description: "A professionally designed resume template to help you stand out in your job search. Easy to customize and ATS-friendly.",
    url: "https://selar.com/oa1611",
    icon: Download,
    tag: "Free",
  },
];

const resourceBenefits = [
  {
    icon: Lightbulb,
    title: "Gain Clarity",
    description: "Each resource is designed to help you move from confusion to clarity with practical frameworks.",
  },
  {
    icon: Target,
    title: "Take Action",
    description: "Not just theory—our resources include actionable steps you can implement immediately.",
  },
  {
    icon: Gift,
    title: "Self-Paced Learning",
    description: "Work through the materials at your own pace, on your own schedule.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Resources = () => {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />
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
            Learn & Grow
          </motion.span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Resources & Tools
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Curated guides, worksheets, and templates to support your career journey. 
            Each resource is crafted to help you move from confusion to clarity.
          </p>
        </motion.div>

        {/* Why Use Our Resources */}
        <div className="max-w-6xl mx-auto mb-20">
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {resourceBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className="text-center p-6"
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <benefit.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Featured Resource */}
        <div className="max-w-6xl mx-auto mb-20">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Featured Resource
            </h2>
          </motion.div>

          <motion.a
            href={featuredResource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="gradient-card rounded-2xl p-8 md:p-10 border border-secondary/30 shadow-elevated relative overflow-hidden group"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium">
                <Star className="w-4 h-4" />
                Most Popular
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-secondary/10">
                      <Sparkles className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground group-hover:text-secondary transition-colors">
                      {featuredResource.title}
                    </h3>
                  </div>
                  <p className="font-body text-muted-foreground mb-6">
                    {featuredResource.description}
                  </p>
                  <Button className="group/btn">
                    Get This Resource
                    <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-display font-semibold text-foreground mb-4">
                    What's Inside:
                  </h4>
                  {featuredResource.highlights.map((highlight, index) => (
                    <motion.div
                      key={highlight}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-body text-foreground">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.a>
        </div>

        {/* Guides Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Career Guides
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              In-depth guides to help you navigate your career journey with confidence.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {guides.map((resource) => (
              <motion.a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                className="block gradient-card rounded-xl p-6 border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <resource.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {resource.tag}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-secondary transition-colors">
                    {resource.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>
                <p className="font-body text-sm text-muted-foreground">
                  {resource.description}
                </p>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Tools & Templates Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Tools & Templates
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Practical tools to help you take action on your career goals.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {tools.map((resource) => (
              <motion.a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                className="block gradient-card rounded-xl p-6 border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <resource.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    resource.tag === "Free" 
                      ? "bg-green-500/10 text-green-600" 
                      : "bg-secondary/10 text-secondary"
                  }`}>
                    {resource.tag}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>
                <p className="font-body text-sm text-muted-foreground">
                  {resource.description}
                </p>
              </motion.a>
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
              Need Personalized Guidance?
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-xl mx-auto">
              Resources are a great start, but nothing beats personalized coaching. 
              Book a session for tailored guidance on your unique career journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button size="lg" className="group">
                  Book a Session
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
};

export default Resources;
