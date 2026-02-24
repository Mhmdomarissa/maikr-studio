import FloatingParticles from "@/components/ui/FloatingParticles";
import TextGenerateEffect from "@/components/ui/TextGenerateEffect";
import GlowingButton from "@/components/ui/GlowingButton";

export default function HeroSection() {
  return (
    <section id="hero" className="hero">
      <div
        className="hero-bg"
        style={{ backgroundImage: "url('/bg_hero_9x16.png')" }}
      />
      <div className="hero-overlay" />
      <FloatingParticles count={50} />
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <TextGenerateEffect
              words="BRIDGING THE GAP BETWEEN AI PROTOTYPES AND PRODUCTION"
              highlightWords={["AI", "PROTOTYPES", "PRODUCTION"]}
              speed={60}
            />
          </h1>
          <p className="hero-subtitle">
            Expert-Guided AI Development for Real-World Applications
          </p>
          <GlowingButton href="#booking" className="btn btn-primary">
            Book a Discovery Session
          </GlowingButton>
        </div>
      </div>
    </section>
  );
}
