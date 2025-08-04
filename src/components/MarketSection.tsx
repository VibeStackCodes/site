import { Card } from "@/components/ui/card";

const MarketSection = () => {
  const stats = [
    {
      number: "$100B+",
      label: "Low-code/no-code + AI development market by 2028",
      trend: "↗️ Growing"
    },
    {
      number: "50M+",
      label: "Indie builders, startup teams, and SMBs as initial target",
      trend: "🎯 Addressable"
    },
    {
      number: "2024",
      label: "The rise of AI-native startups driving demand",
      trend: "🚀 Now"
    }
  ];

  return (
    <section className="py-24 px-6 bg-vibe-surface/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
            Market Opportunity
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're riding the wave of the biggest shift in software development since the internet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="p-8 text-center bg-vibe-surface/80 backdrop-blur-xl border-vibe-purple/30 hover:border-vibe-purple/60 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="mb-4">
                <span className="text-sm font-medium text-vibe-glow bg-vibe-glow/10 px-3 py-1 rounded-full">
                  {stat.trend}
                </span>
              </div>
              
              <div className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-text bg-clip-text text-transparent group-hover:animate-pulse">
                {stat.number}
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {stat.label}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-gradient-to-r from-vibe-surface-elevated/80 to-vibe-surface/80 backdrop-blur-xl border border-vibe-purple/40 rounded-2xl">
            <p className="text-lg font-semibold text-vibe-purple mb-2">Perfect timing</p>
            <p className="text-muted-foreground">
              The convergence of AI capabilities and no-code demand creates an unprecedented opportunity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;