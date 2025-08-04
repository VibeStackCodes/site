import { Card } from "@/components/ui/card";

const DifferentiatorsSection = () => {
  const differentiators = [
    {
      icon: "💡",
      title: "AI-first from day one",
      description: "Every step is AI-augmented — not just content or code.",
      highlight: "Built for the AI era"
    },
    {
      icon: "🔄", 
      title: "Truly E2E",
      description: "No need for handoffs between tools. All in one seamless stack.",
      highlight: "Zero context switching"
    },
    {
      icon: "🧠",
      title: "UX-focused design + community layer",
      description: "Designed to be collaborative and builder-friendly.",
      highlight: "Human-centered AI"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-vibe-dark relative">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-text bg-clip-text text-transparent leading-tight">
            What Makes Us Different
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {differentiators.map((item, index) => (
            <Card 
              key={index}
              className="p-6 sm:p-8 bg-gradient-to-br from-vibe-surface/90 to-vibe-surface-elevated/90 backdrop-blur-xl border-vibe-purple/40 hover:border-vibe-glow/60 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-all duration-700"></div>
              
              <div className="relative z-10">
                <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                
                <div className="mb-3 sm:mb-4">
                  <span className="text-xs sm:text-sm font-semibold text-vibe-glow bg-vibe-glow/10 px-2 sm:px-3 py-1 rounded-full">
                    {item.highlight}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground group-hover:text-vibe-purple transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                
                {/* Decorative element */}
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-primary opacity-20 rounded-full blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;