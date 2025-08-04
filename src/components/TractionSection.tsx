import { Card } from "@/components/ui/card";

const TractionSection = () => {
  const achievements = [
    {
      title: "Ireland's 1st AI Hackathon",
      icon: "🏆",
      type: "Winner"
    },
    {
      title: "Copernicus Hackathon", 
      icon: "🏆",
      type: "Winner"
    },
    {
      title: "Blackstone MedTech",
      icon: "🏆", 
      type: "Winner"
    },
    {
      title: "10+ wins across verticals",
      icon: "🎯",
      type: "Track Record"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-vibe-dark/50">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-text bg-clip-text text-transparent leading-tight">
            Traction
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Proven track record of building and winning
          </p>
        </div>

        <div className="mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-semibold text-center mb-6 sm:mb-8 text-foreground px-4">
            Hackathon track record:
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="p-4 sm:p-6 bg-gradient-to-br from-vibe-surface/90 to-vibe-surface-elevated/90 backdrop-blur-xl border-vibe-purple/40 hover:border-vibe-glow/60 transition-all duration-300 hover:transform hover:scale-105 group text-center"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:animate-bounce">{achievement.icon}</div>
                <div className="mb-2">
                  <span className="text-xs font-semibold text-vibe-glow bg-vibe-glow/10 px-2 py-1 rounded-full">
                    {achievement.type}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-foreground leading-tight">
                  {achievement.title}
                </h4>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center px-4">
          <div className="inline-block p-6 sm:p-8 bg-gradient-to-r from-vibe-surface-elevated/80 to-vibe-surface/80 backdrop-blur-xl border border-vibe-purple/40 rounded-xl sm:rounded-2xl">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 bg-gradient-text bg-clip-text text-transparent">
              Building momentum across the ecosystem
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
              From healthcare to finance, our solutions consistently win in competitive environments
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-2 sm:px-3 py-1 bg-vibe-purple/20 text-vibe-purple rounded-full text-xs sm:text-sm">Healthcare</span>
              <span className="px-2 sm:px-3 py-1 bg-vibe-blue/20 text-vibe-blue rounded-full text-xs sm:text-sm">Fintech</span>
              <span className="px-2 sm:px-3 py-1 bg-vibe-glow/20 text-vibe-glow rounded-full text-xs sm:text-sm">AI/ML</span>
              <span className="px-2 sm:px-3 py-1 bg-vibe-purple/20 text-vibe-purple rounded-full text-xs sm:text-sm">Developer Tools</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TractionSection;