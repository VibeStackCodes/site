import { Button } from "@/components/ui/button";

const VisionSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-vibe-surface via-vibe-dark to-vibe-surface"></div>
      <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-8 sm:top-16 right-8 sm:right-20 w-12 h-12 sm:w-20 sm:h-20 bg-vibe-purple/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-10 sm:bottom-20 left-8 sm:left-16 w-20 h-20 sm:w-32 sm:h-32 bg-vibe-blue/20 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-2xl sm:max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-text bg-clip-text text-transparent leading-tight">
            Vision
          </h2>
          
          <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
            <p className="text-lg sm:text-xl md:text-2xl text-foreground font-medium px-2">
              We're building what comes after <span className="text-vibe-purple">Cursor</span>, 
              <span className="text-vibe-blue"> Bolt</span>, and 
              <span className="text-vibe-glow"> Lovable</span>
            </p>
            
            <div className="p-4 sm:p-8 bg-vibe-surface-elevated/80 backdrop-blur-xl border border-vibe-purple/40 rounded-2xl sm:rounded-3xl">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 bg-gradient-text bg-clip-text text-transparent">
                VibeStack is the new OS for product creation
              </h3>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-base sm:text-lg">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-vibe-purple rounded-full animate-pulse"></span>
                <span className="text-vibe-purple font-semibold">AI-native</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-vibe-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></span>
                <span className="text-vibe-blue font-semibold">E2E</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-vibe-glow rounded-full animate-pulse" style={{ animationDelay: '1s' }}></span>
                <span className="text-vibe-glow font-semibold">Built for velocity</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
            <Button variant="hero" size="xl" className="w-full sm:w-auto min-w-40 sm:min-w-48 text-sm sm:text-base">
              Join the Revolution (Coming Soon)
            </Button>
            <Button variant="glass" size="xl" className="w-full sm:w-auto min-w-40 sm:min-w-48 text-sm sm:text-base">
              Learn More (Coming Soon)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;