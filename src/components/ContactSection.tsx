import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section className="py-24 px-6 bg-vibe-dark relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us in revolutionizing how products are created. Be part of the AI-native generation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Card */}
          <Card className="p-8 bg-vibe-surface/80 backdrop-blur-xl border-vibe-purple/40 hover:border-vibe-purple/60 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-xl">💬</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">General Inquiries</p>
                  <p className="text-muted-foreground">tbc</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-xl">🚀</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Partnerships</p>
                  <p className="text-muted-foreground">tbc</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-xl">💼</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/company/vibestack/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-vibe-purple hover:text-vibe-glow transition-colors"
                  >
                    linkedin.com/company/vibestack
                  </a>
                </div>
              </div>
            </div>
          </Card>

          {/* CTA Card */}
          <Card className="p-8 bg-gradient-to-br from-vibe-surface/90 to-vibe-surface-elevated/90 backdrop-blur-xl border-vibe-purple/40 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
                Join the Waitlist
              </h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Be among the first to experience the future of product creation. 
                Get early access, exclusive updates, and founder pricing.
              </p>
              
              <div className="space-y-4">
                <Button variant="hero" size="xl" className="w-full">
                  Get Early Access (Coming Soon)
                </Button>
                
                <Button variant="glass" size="lg" className="w-full">
                  Schedule a Demo (Coming Soon)
                </Button>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  🔐 No spam, unsubscribe anytime
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-6 bg-vibe-surface-elevated/60 backdrop-blur-xl border border-vibe-purple/30 rounded-2xl">
            <p className="text-lg font-semibold text-vibe-purple mb-2">Ready to revolutionize product creation?</p>
            <p className="text-muted-foreground">Let's build the future together.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;