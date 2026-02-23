import Link from "next/link";

export default function CTASection() {
  return (
    <section id="cta" className="section section-cta">
      <div
        className="cta-bg"
        style={{ backgroundImage: "url('/bg_cta_9x16.png')" }}
      />
      <div className="cta-overlay" />
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
          <Link href="#booking" className="btn btn-primary btn-large">
            Request a Free Discovery Call
          </Link>
        </div>
      </div>
    </section>
  );
}
