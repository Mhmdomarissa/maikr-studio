import ScrollReveal from "@/components/ScrollReveal";
import SpotlightCard from "@/components/ui/SpotlightCard";
import GridBackground from "@/components/ui/GridBackground";

export default function WhySection() {
  return (
    <section id="why" className="section section-why">
      <GridBackground variant="dots">
        <div className="container">
          <h2 className="section-title">
            WHY WE CREATED <span className="gradient-text">MAIKR STUDIO</span>
          </h2>
          <div className="why-content">
            <ScrollReveal>
              <SpotlightCard className="why-card">
                <p className="why-text-large">
                  In 2024, we noticed that LLMs were excellent at generating code,
                  but there&apos;s a significant gap in taking that code to
                  production. Even with AI built into all the software development
                  tools, building beyond simple apps remains extremely challenging.
                </p>
              </SpotlightCard>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <SpotlightCard className="why-card why-card-highlight">
                <p className="why-text">
                  Even with considerable knowledge, users struggled to get apps
                  working properly. The need for expert help sparked the idea for{" "}
                  <strong>MAIKR Studio</strong>.
                </p>
              </SpotlightCard>
            </ScrollReveal>
          </div>
        </div>
      </GridBackground>
    </section>
  );
}
