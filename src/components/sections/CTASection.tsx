import GlowingButton from "@/components/ui/GlowingButton";
import FloatingParticles from "@/components/ui/FloatingParticles";

export default function CTASection() {
  return (
    <section id="cta" className="section section-cta">
      <div
        className="cta-bg"
        style={{ backgroundImage: "url('/bg_cta_9x16.png')" }}
      />
      <div className="cta-overlay" />
      <FloatingParticles count={30} />
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">
            READY TO BUILD <span className="gradient-text">SOMETHING REAL</span>
            ?
          </h2>
          <p className="cta-text">
            Let&apos;s start with a focused session to explore what&apos;s
            possible for your organization.
          </p>
          <GlowingButton href="#booking" className="btn btn-primary btn-large">
            Request a Free Discovery Call
          </GlowingButton>
        </div>
      </div>
    </section>
  );
}
