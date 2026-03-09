import Link from "next/link";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import SpotlightCard from "@/components/ui/SpotlightCard";
import GridBackground from "@/components/ui/GridBackground";

export default function CaseStudiesSection() {
  return (
    <section id="casestudies" className="section section-casestudies">
      <GridBackground variant="grid">
        <div className="container">
          <h2 className="section-title">
            SEE OUR <span className="gradient-text">WORK IN ACTION</span>
          </h2>
          <p className="section-subtitle">
            Real solutions we&apos;ve built for real businesses. Explore how we
            turn complex challenges into production-grade AI systems.
          </p>
          <div className="casestudies-grid">
            <SpotlightCard className="casestudy-card" spotlightColor="rgba(168, 85, 247, 0.2)">
              <div className="casestudy-badge">FEATURED PROJECT</div>
              <div className="casestudy-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
              </div>
              <h3 className="casestudy-title">Alpha CV</h3>
              <p className="casestudy-tagline">
                AI-Powered Recruitment Intelligence Platform
              </p>
              <p className="casestudy-description">
                An enterprise platform that automates the entire hiring pipeline —
                from CV ingestion to intelligent candidate ranking — reducing
                screening time by 90%.
              </p>
              <div className="casestudy-metrics">
                <div className="metric">
                  <AnimatedCounter value="90%" className="metric-value" />
                  <span className="metric-label">Faster Screening</span>
                </div>
                <div className="metric">
                  <AnimatedCounter value="65%" className="metric-value" />
                  <span className="metric-label">Faster Hiring</span>
                </div>
                <div className="metric">
                  <AnimatedCounter value="40%" className="metric-value" />
                  <span className="metric-label">Better Quality</span>
                </div>
              </div>
              <Link
                href="/case-studies/alpha-cv"
                className="btn btn-secondary casestudy-btn"
              >
                View Full Case Study &rarr;
              </Link>
            </SpotlightCard>

            <SpotlightCard className="casestudy-card" spotlightColor="rgba(56, 189, 248, 0.2)">
              <div className="casestudy-badge">DEPLOYED</div>
              <div className="casestudy-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <h3 className="casestudy-title">Lexora</h3>
              <p className="casestudy-tagline">
                Intelligent Library System
              </p>
              <p className="casestudy-description">
                A modern web-based library system that transforms how users explore,
                manage, and interact with library resources through a clean digital
                experience.
              </p>
              <div className="casestudy-metrics">
                <div className="metric">
                  <span className="metric-value">100%</span>
                  <span className="metric-label">Digital Workflow</span>
                </div>
                <div className="metric">
                  <span className="metric-value">3x</span>
                  <span className="metric-label">Faster Access</span>
                </div>
                <div className="metric">
                  <span className="metric-value">Smart</span>
                  <span className="metric-label">Search &amp; Browse</span>
                </div>
              </div>
              <Link
                href="/case-studies/lexora"
                className="btn btn-secondary casestudy-btn"
              >
                View Full Case Study &rarr;
              </Link>
            </SpotlightCard>
          </div>
        </div>
      </GridBackground>
    </section>
  );
}
