import { ExternalLink, BookOpen, FileText, Download } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const resources = [
  {
    title: "From Stuck to Clear",
    description: "A comprehensive guide to help you break free from career confusion and find your path forward.",
    url: "https://selar.com/d4145r",
    icon: BookOpen,
  },
  {
    title: "The Career Clarity Room: A Strategic Guide for Stay-at-Home Mums",
    description: "Navigate your next career move with confidence using this strategic guide designed specifically for stay-at-home mums.",
    url: "https://selar.com/72f901",
    icon: FileText,
  },
  {
    title: "Career and Motherhood: Strike the Balance",
    description: "Practical strategies for every woman seeking to balance career ambitions with motherhood.",
    url: "https://selar.com/qm9oz65w1k",
    icon: BookOpen,
  },
  {
    title: "CCR Clarity Worksheet",
    description: "An actionable worksheet to help you gain clarity on your career goals and next steps.",
    url: "https://selar.com/492w67",
    icon: FileText,
  },
  {
    title: "CCR Free Resume Template",
    description: "A professionally designed resume template to help you stand out in your job search.",
    url: "https://selar.com/oa1611",
    icon: Download,
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
      <section className="py-16 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              Resources
            </h1>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Curated guides, templates, and tools to support your career journey. Each resource is designed to help you move from confusion to clarity.
            </p>
          </motion.div>

          {/* Resources Grid */}
          <motion.div
            className="grid gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {resources.map((resource) => (
              <motion.a
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                className="block gradient-card rounded-xl p-6 border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                    <resource.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-secondary transition-colors">
                        {resource.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="font-body text-sm text-muted-foreground">
                      {resource.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Resources;
