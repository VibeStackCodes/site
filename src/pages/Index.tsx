import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import MarketSection from "@/components/MarketSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import TractionSection from "@/components/TractionSection";

import VisionSection from "@/components/VisionSection";
import FundingSection from "@/components/FundingSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-vibe-dark text-foreground">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <DifferentiatorsSection />
      <MarketSection />
      <TargetAudienceSection />
      <TractionSection />
      
      <VisionSection />
      <FundingSection />
      <ContactSection />
    </div>
  );
};

export default Index;
