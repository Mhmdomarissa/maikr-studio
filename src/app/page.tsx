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
        <section id="hero">
          <HeroSection />
        </section>

        <SocialProofSection />

        <section id="why">
          <WhySection />
        </section>

        <section id="mission">
          <MissionSection />
        </section>

        <section id="how-it-works">
          <HowItWorksSection />
        </section>

        <section id="features">
          <FeaturesSection />
        </section>

        <section id="case-studies">
          <CaseStudiesSection />
        </section>

        <section id="pricing">
          <PricingSection />
        </section>

        <section id="faq">
          <FAQSection />
        </section>

        <FinalCTASection />

        <section id="booking">
          <BookingSection />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
