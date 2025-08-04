import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  const solutions = [
    {
      icon: "🎯",
      title: "Discover",
      subtitle: "the right product to build",
      description: "AI-powered market research and validation"
    },
    {
      icon: "⚡",
      title: "Develop", 
      subtitle: "with full-stack AI tools",
      description: "End-to-end development automation"
    },
    {
      icon: "🧪",
      title: "Test",
      subtitle: "and validate in real-time",
      description: "Continuous testing and user feedback"
    },
    {
      icon: "🚀",
      title: "Market",
      subtitle: "and launch with content, strategy, and automation",
      description: "AI-generated campaigns and go-to-market"
    },
    {
      icon: "💰",
      title: "Sell",
      subtitle: "with built-in payments, pricing models, and CRM",
      description: "Complete sales and customer management"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-vibe-surface to-vibe-dark"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-glow opacity-20"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
            The Solution – VibeStack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            One AI-native platform to:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card 
              key={index}
              className="p-8 bg-vibe-surface/80 backdrop-blur-xl border-vibe-purple/30 hover:border-vibe-purple/60 transition-all duration-500 hover:transform hover:scale-105 group relative overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-6 group-hover:animate-bounce">{solution.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-vibe-purple group-hover:text-vibe-glow transition-colors">
                  {solution.title}
                </h3>
                <p className="text-lg mb-4 text-foreground font-medium">
                  {solution.subtitle}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block p-8 bg-vibe-surface-elevated/80 backdrop-blur-xl border border-vibe-purple/40 rounded-3xl">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-text bg-clip-text text-transparent">
              One interface. One workflow. End-to-end.
            </h3>
            <Button variant="gradient" size="xl" className="mt-4">
              See How It Works (Coming Soon)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;