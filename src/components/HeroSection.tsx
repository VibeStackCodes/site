import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-vibe-dark via-vibe-surface to-vibe-dark"></div>
      <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
      
      {/* Floating Orbs - Responsive sizing */}
      <div className="absolute top-16 sm:top-20 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-vibe-purple/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 sm:bottom-32 right-8 sm:right-16 w-16 h-16 sm:w-24 sm:h-24 bg-vibe-blue/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-vibe-glow/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 container mx-auto text-center">
        {/* Logo */}
        <div className="mb-6 sm:mb-8 animate-fade-in">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-text bg-clip-text text-transparent mb-3 sm:mb-4 leading-tight">
            VibeStack
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-vibe-glow font-medium px-2">
            Code the vibe. Launch the tribe.
          </p>
        </div>

        {/* Subtitle */}
        <div className="mb-8 sm:mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4">
            The AI-native platform for end-to-end product creation
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in px-4" style={{ animationDelay: '0.4s' }}>
          <Button variant="hero" size="xl" className="w-full sm:w-auto min-w-48 text-sm sm:text-base">
            Get Early Access (Coming Soon)
          </Button>
          <Button variant="glass" size="xl" className="w-full sm:w-auto min-w-48 text-sm sm:text-base">
            Watch Demo (Coming Soon)
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-vibe-purple/50 rounded-full flex justify-center">
            <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-vibe-purple rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;