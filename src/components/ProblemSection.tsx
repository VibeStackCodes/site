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
    <section className="py-24 px-6 bg-vibe-surface/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
            The Problem
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Building digital products today is <span className="text-destructive font-semibold">fragmented</span>, 
            <span className="text-destructive font-semibold"> slow</span>, and 
            <span className="text-destructive font-semibold"> expensive</span>
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Founders and builders juggle:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <Card 
                key={index} 
                className="p-6 bg-vibe-surface/60 backdrop-blur-sm border-vibe-purple/20 hover:border-vibe-purple/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">{problem.title}</h4>
                <p className="text-muted-foreground">{problem.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="inline-block p-6 bg-destructive/10 border border-destructive/30 rounded-2xl">
            <p className="text-lg font-semibold text-destructive mb-2">This leads to:</p>
            <div className="flex flex-wrap justify-center gap-4 text-destructive">
              <span className="px-4 py-2 bg-destructive/20 rounded-full">Burnout</span>
              <span className="px-4 py-2 bg-destructive/20 rounded-full">Delays</span>
              <span className="px-4 py-2 bg-destructive/20 rounded-full">Products that never launch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;