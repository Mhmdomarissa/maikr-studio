import SiteNavbar from "@/components/landing/SiteNavbar";
import HeroSection from "@/components/landing/HeroSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import SiteFooter from "@/components/landing/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteNavbar />
      <main className="bg-[#06060a]">
        {/* Hero */}
        <section id="hero">
          <HeroSection />
        </section>

        {/* Social Proof */}
        <section id="social-proof">
          <SocialProofSection />
        </section>

        {/* Features */}
        <section id="features">
          <FeaturesSection />
        </section>

        {/* How It Works */}
        <section id="how-it-works">
          <HowItWorksSection />
        </section>

        {/* Case Studies */}
        <section id="case-studies">
          <CaseStudiesSection />
        </section>

        {/* Pricing */}
        <section id="pricing">
          <PricingSection />
        </section>

        {/* FAQ */}
        <section id="faq">
          <FAQSection />
        </section>

        {/* Final CTA */}
        <FinalCTASection />
      </main>
      <SiteFooter />
    </>
  );
}
