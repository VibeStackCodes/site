import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FundingSection = () => {
  const fundingUse = [
    {
      icon: "👥",
      title: "Team expansion",
      description: "AI engineers, designers, and GTM specialists",
      allocation: "40%"
    },
    {
      icon: "🔧",
      title: "Product buildout",
      description: "Core platform development and infrastructure",
      allocation: "35%"
    },
    {
      icon: "🌐",
      title: "Community growth",
      description: "Developer relations and strategic partnerships",
      allocation: "25%"
    }
  ];

  return (
    <section className="py-24 px-6 bg-vibe-surface/50 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
            Funding Ask
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Accelerating our mission to revolutionize product creation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Card className="p-8 bg-vibe-surface/80 backdrop-blur-xl border-vibe-purple/40 inline-block">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-text bg-clip-text text-transparent">
                Raising Seed/Pre-seed Round
              </h3>
              <p className="text-muted-foreground">
                Strategic funding to scale our AI-native platform
              </p>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {fundingUse.map((item, index) => (
              <Card 
                key={index}
                className="p-6 bg-vibe-surface/80 backdrop-blur-xl border-vibe-purple/30 hover:border-vibe-purple/60 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="text-4xl mb-4 group-hover:animate-bounce">{item.icon}</div>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-vibe-purple">{item.allocation}</span>
                </div>
                
                <h4 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="p-8 bg-gradient-to-br from-vibe-surface-elevated/80 to-vibe-surface/80 backdrop-blur-xl border-vibe-purple/40 inline-block">
              <h3 className="text-xl font-bold mb-4 text-foreground">
                Currently in conversations with top-tier VC firms
              </h3>
              <p className="text-muted-foreground mb-6">
                Seeking strategic investors who understand the AI-native future
              </p>
              <Button variant="gradient" size="lg">
                Investor Deck (Coming Soon)
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundingSection;