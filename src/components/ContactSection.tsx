import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-vibe-dark relative">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-text bg-clip-text text-transparent leading-tight">
            Ready to Build the Future?
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto px-4">
            Join us in revolutionizing how products are created. Be part of the AI-native generation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 max-w-4xl lg:max-w-6xl mx-auto">
          {/* Contact Card */}
          <Card className="p-4 sm:p-8 bg-vibe-surface/80 backdrop-blur-xl border-vibe-purple/40 hover:border-vibe-purple/60 transition-all duration-300">
            <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground">Get in Touch</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-lg sm:text-xl">💬</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm sm:text-base">General Inquiries</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">tbc</p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-lg sm:text-xl">🚀</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm sm:text-base">Partnerships</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">tbc</p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-lg sm:text-xl">💼</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm sm:text-base">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/company/vibestack/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-vibe-purple hover:text-vibe-glow transition-colors text-xs sm:text-sm"
                  >
                    linkedin.com/company/vibestack
                  </a>
                </div>
              </div>
            </div>
          </Card>

          {/* CTA Card */}
          <Card className="p-4 sm:p-8 bg-gradient-to-br from-vibe-surface/90 to-vibe-surface-elevated/90 backdrop-blur-xl border-vibe-purple/40 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
            <div className="relative z-10">
              <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-text bg-clip-text text-transparent">
                Join the Waitlist
              </h3>
              <p className="text-xs sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                Be among the first to experience the future of product creation. 
                Get early access, exclusive updates, and founder pricing.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <Button variant="hero" size="xl" className="w-full text-sm sm:text-base">
                  Get Early Access (Coming Soon)
                </Button>
                <Button variant="glass" size="lg" className="w-full text-sm sm:text-base">
                  Schedule a Demo (Coming Soon)
                </Button>
              </div>
              <div className="mt-6 sm:mt-8 text-center">
                <p className="text-xs sm:text-sm text-muted-foreground">
                  🔐 No spam, unsubscribe anytime
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 px-4">
          <div className="inline-block p-4 sm:p-6 bg-vibe-surface-elevated/60 backdrop-blur-xl border border-vibe-purple/30 rounded-xl sm:rounded-2xl">
            <p className="text-base sm:text-lg font-semibold text-vibe-purple mb-2">Ready to revolutionize product creation?</p>
            <p className="text-xs sm:text-base text-muted-foreground">Let's build the future together.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;