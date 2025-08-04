import { Card } from "@/components/ui/card";

const TargetAudienceSection = () => {
  const audiences = [
    {
      icon: "👨‍💻",
      title: "Solo founders",
      description: "Turn your ideas into products without a technical co-founder",
      features: ["Rapid prototyping", "Market validation", "MVP launch"]
    },
    {
      icon: "👥", 
      title: "Startup teams",
      description: "Scale faster with AI-augmented development workflows",
      features: ["Team collaboration", "Faster iterations", "Resource optimization"]
    },
    {
      icon: "🚀",
      title: "Indie hackers",
      description: "Ship products faster and focus on what matters most",
      features: ["Quick launches", "Community building", "Revenue optimization"]
    },
    {
      icon: "🏢",
      title: "Product consultants/agencies",
      description: "Deliver more value to clients with streamlined processes",
      features: ["Client delivery", "Scalable solutions", "Higher margins"]
    },
    {
      icon: "💡",
      title: "Internal innovation teams",
      description: "Accelerate corporate innovation and digital transformation",
      features: ["Enterprise integration", "Compliance ready", "Scalable architecture"]
    }
  ];

  return (
    <section className="py-24 px-6 bg-vibe-surface/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
            Who It's For
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Built for the next generation of digital creators and innovators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <Card 
              key={index}
              className="p-6 bg-vibe-surface/80 backdrop-blur-xl border-vibe-purple/30 hover:border-vibe-purple/60 transition-all duration-300 hover:transform hover:scale-105 group h-full"
            >
              <div className="text-5xl mb-4 group-hover:animate-bounce">{audience.icon}</div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-vibe-purple transition-colors">
                {audience.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {audience.description}
              </p>
              
              <div className="space-y-2">
                {audience.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-vibe-purple rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;