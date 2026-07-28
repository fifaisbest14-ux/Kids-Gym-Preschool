import { HeroSection } from "@/components/sections/HeroSection";
import { FounderSection } from "@/components/sections/FounderSection";
import { TrustBarSection } from "@/components/sections/TrustBarSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { SafetyPreview } from "@/components/sections/SafetyPreview";
import { DayInLifeSection } from "@/components/sections/DayInLifeSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FeeCTASection } from "@/components/sections/FeeCTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { LocationSection } from "@/components/sections/LocationSection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FounderSection />
      <TrustBarSection />
      <ProgramsSection />
      <WhyUsSection />
      <SafetyPreview />
      <DayInLifeSection />
      <TestimonialsSection />
      <FeeCTASection />
      <FAQSection />
      <LocationSection />
    </div>
  );
}
