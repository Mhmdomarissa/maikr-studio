import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="hero">
      <div
        className="hero-bg"
        style={{ backgroundImage: "url('/bg_hero_9x16.png')" }}
      />
      <div className="hero-overlay" />
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            BRIDGING THE GAP BETWEEN
            <br />
            <span className="gradient-text">AI PROTOTYPES</span> AND{" "}
            <span className="gradient-text">PRODUCTION</span>
          </h1>
          <p className="hero-subtitle">
            Expert-Guided AI Development for Real-World Applications
          </p>
          <Link href="#booking" className="btn btn-primary">
            Book a Discovery Session
          </Link>
        </div>
      </div>
    </section>
  );
}
