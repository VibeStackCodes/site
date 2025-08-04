import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-vibe-dark via-vibe-surface to-vibe-dark"></div>
      <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-vibe-purple/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-vibe-blue/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-vibe-glow/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-text bg-clip-text text-transparent mb-4">
            VibeStack
          </h1>
          <p className="text-xl md:text-2xl text-vibe-glow font-medium">
            Code the vibe. Launch the tribe.
          </p>
        </div>

        {/* Subtitle */}
        <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The AI-native platform for end-to-end product creation
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button variant="hero" size="xl" className="min-w-48">
            Get Early Access (Coming Soon)
          </Button>
          <Button variant="glass" size="xl" className="min-w-48">
            Watch Demo (Coming Soon)
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-vibe-purple/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-vibe-purple rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;