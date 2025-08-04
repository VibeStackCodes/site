import { Card } from "@/components/ui/card";

const ProblemSection = () => {
  const problems = [
    {
      icon: "🔍",
      title: "Market research tools",
      description: "Scattered insights across multiple platforms"
    },
    {
      icon: "💻",
      title: "Dev platforms", 
      description: "Complex setups and fragmented workflows"
    },
    {
      icon: "🧪",
      title: "QA/test tools",
      description: "Manual testing and validation processes"
    },
    {
      icon: "📢",
      title: "Marketing stacks",
      description: "Disconnected campaigns and content creation"
    },
    {
      icon: "💳",
      title: "Sales/checkout integrations",
      description: "Complex payment and CRM configurations"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-vibe-surface/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-text bg-clip-text text-transparent leading-tight">
            The Problem
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl sm:max-w-4xl mx-auto leading-relaxed px-4">
            Building digital products today is <span className="text-destructive font-semibold">fragmented</span>, 
            <span className="text-destructive font-semibold"> slow</span>, and 
            <span className="text-destructive font-semibold"> expensive</span>
          </p>
        </div>

        <div className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8 text-foreground px-4">
            Founders and builders juggle:
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {problems.map((problem, index) => (
              <Card 
                key={index} 
                className="p-4 sm:p-6 bg-vibe-surface/60 backdrop-blur-sm border-vibe-purple/20 hover:border-vibe-purple/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{problem.icon}</div>
                <h4 className="text-base sm:text-lg font-semibold mb-2 text-foreground">{problem.title}</h4>
                <p className="text-sm sm:text-base text-muted-foreground">{problem.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center px-4">
          <div className="inline-block p-4 sm:p-6 bg-destructive/10 border border-destructive/30 rounded-xl sm:rounded-2xl">
            <p className="text-base sm:text-lg font-semibold text-destructive mb-2 sm:mb-3">This leads to:</p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-destructive">
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-destructive/20 rounded-full text-sm sm:text-base">Burnout</span>
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-destructive/20 rounded-full text-sm sm:text-base">Delays</span>
              <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-destructive/20 rounded-full text-sm sm:text-base">Products that never launch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;