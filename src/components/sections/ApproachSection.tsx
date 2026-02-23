import ScrollReveal from "@/components/ScrollReveal";

const phases = [
  {
    number: "01",
    title: "Fast Prototyping",
    description:
      "We start with an intensive brainstorming session where our experts work with you to cut through the AI hype and validate your idea.",
  },
  {
    number: "02",
    title: "Production Development",
    description:
      "This is where our expertise really makes a difference. We build production-ready systems that AI alone cannot create.",
  },
  {
    number: "03",
    title: "Enhancement & Support",
    description:
      "Once your product reaches users, we continue to support you with ongoing improvements and refinements.",
  },
];

export default function ApproachSection() {
  return (
    <section id="approach" className="section section-approach">
      <div
        className="approach-bg"
        style={{ backgroundImage: "url('/bg_swirl_9x16.png')" }}
      />
      <div className="container">
        <h2 className="section-title">
          OUR THREE-PHASE <span className="gradient-text">APPROACH</span>
        </h2>
        <div className="approach-grid">
          {phases.map((phase, i) => (
            <ScrollReveal key={phase.number} delay={i * 0.08}>
              <div className="phase-card">
                <div className="phase-number">{phase.number}</div>
                <h3 className="phase-title">{phase.title}</h3>
                <p className="phase-description">{phase.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
