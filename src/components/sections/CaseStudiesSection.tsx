import Link from "next/link";

export default function CaseStudiesSection() {
  return (
    <section id="casestudies" className="section section-casestudies">
      <div className="container">
        <h2 className="section-title">
          SEE OUR <span className="gradient-text">WORK IN ACTION</span>
        </h2>
        <p className="section-subtitle">
          Real solutions we&apos;ve built for real businesses. Explore how we
          turn complex challenges into production-grade AI systems.
        </p>
        <div className="casestudies-grid">
          <div className="casestudy-card">
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
                <span className="metric-value">90%</span>
                <span className="metric-label">Faster Screening</span>
              </div>
              <div className="metric">
                <span className="metric-value">65%</span>
                <span className="metric-label">Faster Hiring</span>
              </div>
              <div className="metric">
                <span className="metric-value">40%</span>
                <span className="metric-label">Better Quality</span>
              </div>
            </div>
            <Link
              href="/case-studies/alpha-cv"
              className="btn btn-secondary casestudy-btn"
            >
              View Full Case Study &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
