import { Button } from "@/components/ui/button";

const VisionSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-vibe-surface via-vibe-dark to-vibe-surface"></div>
      <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-16 right-20 w-20 h-20 bg-vibe-purple/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 left-16 w-32 h-32 bg-vibe-blue/20 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-text bg-clip-text text-transparent leading-tight">
            Vision
          </h2>
          
          <div className="space-y-8 mb-12">
            <p className="text-xl md:text-2xl text-foreground font-medium">
              We're building what comes after <span className="text-vibe-purple">Cursor</span>, 
              <span className="text-vibe-blue"> Bolt</span>, and 
              <span className="text-vibe-glow"> Lovable</span>
            </p>
            
            <div className="p-8 bg-vibe-surface-elevated/80 backdrop-blur-xl border border-vibe-purple/40 rounded-3xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-text bg-clip-text text-transparent">
                VibeStack is the new OS for product creation
              </h3>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-vibe-purple rounded-full animate-pulse"></span>
                <span className="text-vibe-purple font-semibold">AI-native</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-vibe-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></span>
                <span className="text-vibe-blue font-semibold">E2E</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-vibe-glow rounded-full animate-pulse" style={{ animationDelay: '1s' }}></span>
                <span className="text-vibe-glow font-semibold">Built for velocity</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="min-w-48">
              Join the Revolution (Coming Soon)
            </Button>
            <Button variant="glass" size="xl" className="min-w-48">
              Learn More (Coming Soon)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;