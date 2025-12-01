import { Video, MapPin, Clock, Target, Users, Compass } from "lucide-react";

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
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-md mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            What I Offer
          </h2>
          <p className="font-body text-muted-foreground">
            Personalized coaching to help you achieve career clarity and success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-4 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="gradient-card rounded-xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <service.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Session Types */}
        <div className="text-center mb-8">
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">
            Session Options
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {sessionTypes.map((type, index) => (
            <div
              key={type.title}
              className="gradient-card rounded-xl p-5 shadow-soft border border-border/50 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <type.icon className="w-6 h-6 text-primary" />
              </div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
