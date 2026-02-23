import ScrollReveal from "@/components/ScrollReveal";

const phaseDetails = [
  {
    id: "phase1",
    bgClass: "section-phase-1",
    label: "PHASE 1:",
    title: "FAST PROTOTYPING",
    description:
      "We start with an intensive brainstorming session where our experts work with you to cut through the AI hype and validate your idea.",
    items: [
      "Deep research and feasibility analysis",
      "Rapid prototype development with AI agents",
      "Working demo to validate concepts",
      "Clear path forward or quick pivot",
    ],
  },
  {
    id: "phase2",
    bgClass: "section-phase-2",
    label: "PHASE 2:",
    title: "PRODUCTION DEVELOPMENT",
    description:
      "This is where our expertise really makes a difference. We build production-ready systems that AI alone cannot create.",
    items: [
      "Enterprise-grade architecture and security",
      "Integration with your organization's systems",
      "Flexible development accommodating changes",
      "Professional expertise for stability and scale",
    ],
    note: "Current AI systems can't understand your organization's structure or maintain proper security and UX. Our experienced team bridges this gap, combining AI speed with professional expertise to build stable, production-grade systems.",
  },
  {
    id: "phase3",
    bgClass: "section-phase-3",
    label: "PHASE 3:",
    title: "ENHANCEMENT & SUPPORT",
    description:
      "Once your product reaches users, we continue to support you with ongoing improvements and refinements.",
    items: [
      "Continuous enhancements based on user feedback",
      "Performance and UX refinements",
      "Long-term product support and maintenance",
      "Scaling assistance as your user base grows",
    ],
  },
];

export default function PhaseDetailSections() {
  return (
    <>
      {phaseDetails.map((phase) => (
        <section
          key={phase.id}
          id={phase.id}
          className={`section section-phase ${phase.bgClass}`}
        >
          <div className="container">
            <ScrollReveal>
              <div className="phase-detail">
                <div className="phase-detail-content">
                  <h2 className="phase-detail-title">
                    {phase.label}
                    <br />
                    <span className="gradient-text">{phase.title}</span>
                  </h2>
                  <p className="phase-detail-description">
                    {phase.description}
                  </p>
                  <ul className="phase-detail-list">
                    {phase.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {phase.note && (
                    <p className="phase-detail-note">{phase.note}</p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}
    </>
  );
}
