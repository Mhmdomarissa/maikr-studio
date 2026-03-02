import SiteNavbar from "@/components/landing/SiteNavbar";
import HeroSection from "@/components/landing/HeroSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import WhySection from "@/components/landing/WhySection";
import MissionSection from "@/components/landing/MissionSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import BookingSection from "@/components/landing/BookingSection";
import SiteFooter from "@/components/landing/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteNavbar />
      <main className="bg-[#06060a]">
        <HeroSection />
        <SocialProofSection />
        <WhySection />
        <MissionSection />
        <HowItWorksSection />
        <FeaturesSection />
        <CaseStudiesSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
        <BookingSection />
      </main>
      <SiteFooter />
    </>
  );
}
