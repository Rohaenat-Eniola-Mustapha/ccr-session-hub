import { Video, MapPin, Clock, Target, Users, Compass } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Target,
    title: "Career Strategy",
    description: "Define your career goals and create an actionable roadmap to achieve them.",
  },
  {
    icon: Compass,
    title: "Career Transition",
    description: "Navigate career changes with confidence and strategic planning.",
  },
  {
    icon: Users,
    title: "Interview Prep",
    description: "Master interview skills and present your best self to potential employers.",
  },
];

const sessionTypes = [
  {
    icon: Video,
    title: "Virtual Session",
    description: "Connect from anywhere via video call",
    duration: "60 minutes",
  },
  {
    icon: MapPin,
    title: "Physical Session",
    description: "In-person coaching for deeper connection",
    duration: "90 minutes",
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      <div className="max-w-md mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            What I Offer
          </h2>
          <p className="font-body text-muted-foreground">
            Personalized coaching to help you achieve career clarity and success.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="space-y-4 mb-12"
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
              className="gradient-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-shadow duration-300 border border-border/50"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 rounded-lg bg-secondary/10"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-6 h-6 text-secondary" />
                </motion.div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Session Types */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">
            Session Options
          </h3>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {sessionTypes.map((type, index) => (
            <motion.div
              key={type.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ duration: 0.3 }}
              className="gradient-card rounded-xl p-5 shadow-soft hover:shadow-elevated border border-border/50 text-center cursor-pointer"
            >
              <motion.div
                className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <type.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h4 className="font-display text-base font-semibold text-foreground mb-2">
                {type.title}
              </h4>
              <p className="font-body text-xs text-muted-foreground mb-3">
                {type.description}
              </p>
              <div className="flex items-center justify-center gap-1 text-secondary">
                <Clock className="w-3 h-3" />
                <span className="font-body text-xs font-medium">{type.duration}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
