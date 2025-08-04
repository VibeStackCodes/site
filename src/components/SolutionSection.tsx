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
    <section className="py-10 sm:py-16 md:py-24 px-2 sm:px-4 md:px-6 relative overflow-x-hidden max-w-full">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-vibe-surface to-vibe-dark pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-glow opacity-20 pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10 max-w-full">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4 md:mb-6 bg-gradient-text bg-clip-text text-transparent leading-tight">
            The Solution – VibeStack
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-full sm:max-w-2xl md:max-w-3xl mx-auto px-2 sm:px-4">
            One AI-native platform to:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 md:mb-16">
          {solutions.map((solution, index) => (
            <Card 
              key={index}
              className="p-4 sm:p-6 lg:p-8 bg-vibe-surface/80 backdrop-blur-xl border-vibe-purple/30 hover:border-vibe-purple/60 transition-all duration-500 hover:transform hover:scale-105 group relative overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-4 lg:mb-6 group-hover:animate-bounce">{solution.icon}</div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 text-vibe-purple group-hover:text-vibe-glow transition-colors">
                  {solution.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 lg:mb-4 text-foreground font-medium">
                  {solution.subtitle}
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center px-0 sm:px-4">
          <div className="w-full sm:w-auto inline-block p-4 sm:p-6 lg:p-8 bg-vibe-surface-elevated/80 backdrop-blur-xl border border-vibe-purple/40 rounded-xl sm:rounded-2xl lg:rounded-3xl">
            <h3 className="text-base sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 lg:mb-4 bg-gradient-text bg-clip-text text-transparent">
              One interface. One workflow. End-to-end.
            </h3>
            <Button variant="gradient" size="xl" className="mt-2 sm:mt-3 lg:mt-4 text-xs sm:text-sm lg:text-base w-full sm:w-auto">
              See How It Works (Coming Soon)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;