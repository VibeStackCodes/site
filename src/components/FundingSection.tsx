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
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-vibe-surface/50 relative">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-text bg-clip-text text-transparent leading-tight">
            Funding Ask
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto px-4">
            Accelerating our mission to revolutionize product creation
          </p>
        </div>

        <div className="max-w-2xl sm:max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <Card className="p-4 sm:p-8 bg-vibe-surface/80 backdrop-blur-xl border-vibe-purple/40 inline-block">
              <h3 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-4 bg-gradient-text bg-clip-text text-transparent">
                Raising Seed/Pre-seed Round
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Strategic funding to scale our AI-native platform
              </p>
            </Card>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
            {fundingUse.map((item, index) => (
              <Card 
                key={index}
                className="p-4 sm:p-6 bg-vibe-surface/80 backdrop-blur-xl border-vibe-purple/30 hover:border-vibe-purple/60 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:animate-bounce">{item.icon}</div>
                <div className="mb-3 sm:mb-4">
                  <span className="text-lg sm:text-2xl font-bold text-vibe-purple">{item.allocation}</span>
                </div>
                <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-foreground">{item.title}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="p-4 sm:p-8 bg-gradient-to-br from-vibe-surface-elevated/80 to-vibe-surface/80 backdrop-blur-xl border-vibe-purple/40 inline-block">
              <h3 className="text-base sm:text-xl font-bold mb-2 sm:mb-4 text-foreground">
                Currently in conversations with top-tier VC firms
              </h3>
              <p className="text-xs sm:text-base text-muted-foreground mb-4 sm:mb-6">
                Seeking strategic investors who understand the AI-native future
              </p>
              <Button variant="gradient" size="lg" className="text-sm sm:text-base">
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