import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import WhySection from "@/components/sections/WhySection";
import MissionSection from "@/components/sections/MissionSection";
import ApproachSection from "@/components/sections/ApproachSection";
import PhaseDetailSections from "@/components/sections/PhaseDetailSections";
import DifferentSection from "@/components/sections/DifferentSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import CTASection from "@/components/sections/CTASection";
import BookingSection from "@/components/sections/BookingSection";
import ContactSection from "@/components/sections/ContactSection";

const navLinks = [
  { href: "#why", label: "Why Us" },
  { href: "#mission", label: "Mission" },
  { href: "#approach", label: "Approach" },
  { href: "#different", label: "Difference" },
  { href: "#casestudies", label: "Case Studies" },
];

const footerLinks = [
  { href: "#why", label: "Why Us" },
  { href: "#mission", label: "Mission" },
  { href: "#approach", label: "Approach" },
  { href: "#booking", label: "Book a Call" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <>
      <Navbar
        links={navLinks}
        ctaLink={{ href: "#booking", label: "Book a Call" }}
      />
      <main>
        <HeroSection />
        <WhySection />
        <MissionSection />
        <ApproachSection />
        <PhaseDetailSections />
        <DifferentSection />
        <CaseStudiesSection />
        <CTASection />
        <BookingSection />
        <ContactSection />
      </main>
      <Footer links={footerLinks} />
    </>
  );
}
