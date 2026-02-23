import ScrollReveal from "@/components/ScrollReveal";

export default function MissionSection() {
  return (
    <section id="mission" className="section section-mission">
      <div className="container">
        <h2 className="section-title">
          OUR <span className="gradient-text">MISSION</span>
        </h2>
        <div className="mission-content">
          <ScrollReveal>
            <div className="mission-statement">
              <p>
                We wanted to build a place where people could come in and, with
                the help of AI and our experts, start to build{" "}
                <strong>working applications</strong> easily.
              </p>
            </div>
          </ScrollReveal>
          <div className="mission-details">
            {[
              "We build AI solutions using multiple types of machine intelligence—from LLMs to computer vision to agentic workflows—choosing the right tools for your specific needs.",
              "We start with a focused session where our experts help you cut through the hype to validate your idea through brainstorming and deep research.",
              "If we identify viable options, we'll use AI coding agents to build a working demo during the session.",
            ].map((text, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="mission-item">
                  <p>{text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
