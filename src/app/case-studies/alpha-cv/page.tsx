import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Alpha CV Case Study | MAIKR Studio",
  description:
    "Alpha CV - AI-Powered Recruitment Intelligence Platform built by MAIKR Studio. See how we automated hiring with 90% faster screening.",
  openGraph: {
    title: "Alpha CV Case Study | MAIKR Studio",
    description:
      "Enterprise AI recruitment platform - 90% faster screening, 65% faster hiring",
    type: "website",
  },
};

const navLinks = [
  { href: "/#why", label: "Why Us" },
  { href: "/#approach", label: "Approach" },
  { href: "/#casestudies", label: "Case Studies" },
];

const footerLinks = [
  { href: "/#why", label: "Why Us" },
  { href: "/#approach", label: "Approach" },
  { href: "/#casestudies", label: "Case Studies" },
  { href: "/#booking", label: "Book a Call" },
  { href: "/#contact", label: "Contact" },
];

const metrics = [
  { value: "90%", label: "Faster Screening" },
  { value: "65%", label: "Faster Time-to-Hire" },
  { value: "40%", label: "Better Candidate Quality" },
  { value: "75%", label: "Less Drop-off" },
];

const challenges = [
  {
    title: "Time Waste",
    description:
      "60–80% of recruiter time was spent manually screening resumes — hours reading through hundreds of applications for each position.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Missed Talent",
    description:
      "Qualified candidates were getting buried in hundreds of applications. Traditional keyword search couldn't identify transferable skills or equivalent experience.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="22" y1="11" x2="16" y2="11" />
      </svg>
    ),
  },
  {
    title: "Slow Hiring",
    description:
      "2–3 weeks to first interview, inconsistent quality across hires, and 40–60% application drop-off rates were costing the business.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
];

const solutions = [
  {
    title: "Smart AI Matching",
    description:
      'Advanced semantic understanding that goes beyond keywords. The system recognizes that "React" implies "JavaScript", and "AWS" experience is comparable to "Azure".',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Automated Processing",
    description:
      "Handles any CV format — PDF, Word, images, scanned documents — with intelligent parsing that extracts skills, experience, and qualifications automatically.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Intelligent Ranking",
    description:
      "Delivers the top candidates with detailed match explanations — showing exactly why each candidate fits and where the gaps are, enabling confident decisions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Privacy-First",
    description:
      "Personal information is extracted for records but redacted before any AI processing. Enterprise-grade security with GDPR compliance built in from day one.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "HR Posts a Job",
    description:
      "Upload a job description (PDF or Word) or enter it manually. AI automatically extracts skills, responsibilities, and requirements. A public career page is generated instantly.",
  },
  {
    number: "02",
    title: "Candidates Apply",
    description:
      "Via a public job page (no login required) or by sending their CV to a dedicated email inbox. Zero-friction for candidates means higher application rates.",
  },
  {
    number: "03",
    title: "AI Processing",
    description:
      "Documents are parsed automatically — PDFs, Word files, even scanned images via OCR. The AI structures every CV into a standardized format, extracting skills, experience, and qualifications.",
  },
  {
    number: "04",
    title: "Smart Matching",
    description:
      "Multi-layered AI analysis calculates deep semantic similarity between candidates and job requirements. Each candidate receives a composite score with detailed explanations.",
  },
  {
    number: "05",
    title: "HR Reviews Results",
    description:
      "A ranked candidate list with match explanations, key strengths, gaps, and recommendations. Shortlist top candidates, schedule interviews, and make data-backed decisions.",
  },
];

const keyFeatures = [
  {
    title: "Smart Job Posting",
    description:
      "Upload any job description and AI automatically extracts requirements. Public career pages generated instantly with unique tracking IDs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Automated Email Intake",
    description:
      "Candidates can email their CVs directly. The system monitors the inbox, extracts attachments, processes them, and creates profiles automatically.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    title: "Advanced Search & Filters",
    description:
      "Filter candidates by skills, education, domains, or experience. Full-text search across all CV content with tagging and organization tools.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Explainable AI",
    description:
      "Every match score includes detailed reasoning — know exactly why a candidate scored 85% vs 72%. No black box decisions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "GPU-Accelerated",
    description:
      "End-to-end GPU pipeline processes hundreds of candidates in seconds. Batch processing means results are ready almost instantly.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Fair Evaluation",
    description:
      "AI-based matching reduces unconscious bias. Semantic understanding recognizes transferable skills. Objective scoring based on actual qualifications.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <polyline points="17 11 19 13 23 9" />
      </svg>
    ),
  },
];

const impactData = [
  { label: "Time to Screen 100 CVs", before: "15–20 hours", after: "4 minutes" },
  { label: "Time to First Interview", before: "2–3 weeks", after: "3–5 days" },
  { label: "Candidate Quality", before: "Inconsistent", after: "Top 10% ranked" },
  { label: "Application Drop-off", before: "40–60%", after: "10–15%" },
];

const industries = [
  {
    title: "Technology",
    description: "Complex technical roles, emerging tech stacks, technology equivalences (AWS ↔ Azure, React ↔ Vue)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Financial Services",
    description: "Regulatory knowledge (FINRA, GDPR), financial certifications (CFA, CPA), compliance experience",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Healthcare",
    description: "Medical credentials and licenses, specific clinical experience, certification verification",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Manufacturing",
    description: "Technical certifications, safety credentials, hands-on operational experience matching",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 20h20M5 20V8l7-5 7 5v12" />
        <path d="M9 20v-5h6v5" />
      </svg>
    ),
  },
];

const techCards = [
  {
    title: "AI & Machine Learning",
    description:
      "Advanced language models for intelligent document understanding, combined with semantic embedding technology for deep, contextual matching that goes far beyond simple keyword search.",
  },
  {
    title: "Modern Web Platform",
    description:
      "Responsive, fast-loading interface built with enterprise-grade frameworks. Intuitive dashboard for recruiters with real-time updates and collaboration tools.",
  },
  {
    title: "Scalable Backend",
    description:
      "High-performance asynchronous architecture with GPU acceleration, multi-layer caching, and connection pooling. Designed to handle thousands of candidates effortlessly.",
  },
  {
    title: "Security & Compliance",
    description:
      "Privacy-first design with PII redaction, role-based access control, encryption in transit and at rest, rate limiting, and full GDPR compliance.",
  },
];

export default function AlphaCVPage() {
  return (
    <>
      <Navbar
        links={navLinks}
        ctaLink={{ href: "/#booking", label: "Book a Call" }}
        homeHref="/"
      />
      <main>
        {/* Hero */}
        <section className="cs-hero">
          <div
            className="hero-bg"
            style={{ backgroundImage: "url('/bg_hero_9x16.png')" }}
          />
          <div className="hero-overlay" />
          <div className="container">
            <div className="cs-hero-content">
              <Link href="/#casestudies" className="cs-back-link">
                &larr; Back to Case Studies
              </Link>
              <div className="cs-hero-badge">CASE STUDY</div>
              <h1 className="cs-hero-title">
                <span className="gradient-text">ALPHA CV</span>
              </h1>
              <p className="cs-hero-tagline">
                AI-Powered Recruitment Intelligence Platform
              </p>
              <p className="cs-hero-description">
                Transform talent acquisition with enterprise-grade AI matching,
                automated CV processing, and intelligent candidate ranking.
              </p>
              <div className="cs-hero-metrics">
                {metrics.map((m) => (
                  <div key={m.label} className="cs-metric">
                    <span className="cs-metric-value">{m.value}</span>
                    <span className="cs-metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
              <div className="cs-hero-cta">
                <a
                  href="https://alphacvdemo.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-large"
                >
                  Try Live Demo →
                </a>
                <p className="cs-demo-note">
                  Explore the platform with pre-loaded data • No signup required
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="section cs-section">
          <div className="container">
            <h2 className="section-title">
              THE <span className="gradient-text">CHALLENGE</span>
            </h2>
            <p className="cs-section-intro">
              Our client, a growing recruitment firm, was drowning in manual
              processes that couldn&apos;t scale.
            </p>
            <div className="cs-challenge-grid">
              {challenges.map((c) => (
                <div key={c.title} className="cs-challenge-card">
                  <div className="cs-challenge-icon">{c.icon}</div>
                  <h3>{c.title}</h3>
                  <p>{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Solution */}
        <section className="section cs-section cs-section-alt">
          <div className="container">
            <h2 className="section-title">
              OUR <span className="gradient-text">SOLUTION</span>
            </h2>
            <p className="cs-section-intro">
              We built Alpha CV — an AI-powered platform that automates the
              entire hiring pipeline, from CV ingestion to intelligent candidate
              ranking.
            </p>
            <div className="cs-solution-overview">
              {solutions.map((s) => (
                <div key={s.title} className="cs-solution-card">
                  <div className="cs-solution-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section cs-section">
          <div className="container">
            <h2 className="section-title">
              HOW IT <span className="gradient-text">WORKS</span>
            </h2>
            <p className="cs-section-intro">
              A streamlined five-step pipeline that takes hiring from weeks to
              days.
            </p>
            <div className="cs-workflow">
              {workflowSteps.map((step, i) => (
                <div key={step.number}>
                  <div className="cs-workflow-step">
                    <div className="cs-step-number">{step.number}</div>
                    <div className="cs-step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                  {i < workflowSteps.length - 1 && (
                    <div className="cs-workflow-connector" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="section cs-section cs-section-alt">
          <div className="container">
            <h2 className="section-title">
              KEY <span className="gradient-text">FEATURES</span>
            </h2>
            <div className="cs-features-grid">
              {keyFeatures.map((f) => (
                <div key={f.title} className="cs-feature">
                  <div className="cs-feature-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Impact */}
        <section className="section cs-section">
          <div className="container">
            <h2 className="section-title">
              BUSINESS <span className="gradient-text">IMPACT</span>
            </h2>
            <p className="cs-section-intro">
              Measurable results that transformed our client&apos;s hiring
              operation.
            </p>
            <div className="cs-impact-grid">
              {impactData.map((d) => (
                <div key={d.label} className="cs-impact-card">
                  <div className="cs-impact-label">{d.label}</div>
                  <div className="cs-impact-comparison">
                    <div className="cs-impact-before">
                      <span className="cs-impact-tag">Before</span>
                      <span className="cs-impact-val">{d.before}</span>
                    </div>
                    <div className="cs-impact-arrow">→</div>
                    <div className="cs-impact-after">
                      <span className="cs-impact-tag">After</span>
                      <span className="cs-impact-val">{d.after}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="section cs-section cs-section-alt">
          <div className="container">
            <h2 className="section-title">
              INDUSTRIES <span className="gradient-text">SERVED</span>
            </h2>
            <p className="cs-section-intro">
              Alpha CV adapts to any industry&apos;s unique requirements and
              terminology.
            </p>
            <div className="cs-industries-grid">
              {industries.map((ind) => (
                <div key={ind.title} className="cs-industry">
                  <div className="cs-industry-icon">{ind.icon}</div>
                  <h3>{ind.title}</h3>
                  <p>{ind.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="section cs-section">
          <div className="container">
            <h2 className="section-title">
              BUILT WITH <span className="gradient-text">ENTERPRISE AI</span>
            </h2>
            <div className="cs-tech-overview">
              {techCards.map((t) => (
                <div key={t.title} className="cs-tech-card">
                  <h3>{t.title}</h3>
                  <p>{t.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section section-cta cs-cta">
          <div
            className="cta-bg"
            style={{ backgroundImage: "url('/bg_cta_9x16.png')" }}
          />
          <div className="cta-overlay" />
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">
                READY TO BUILD{" "}
                <span className="gradient-text">YOUR SOLUTION</span>?
              </h2>
              <p className="cta-text">
                Whether it&apos;s recruitment AI, computer vision, or custom
                enterprise tools — we can build it for you. Let&apos;s discuss
                your project.
              </p>
              <div className="cs-cta-buttons">
                <a
                  href="https://alphacvdemo.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-large"
                >
                  Try Alpha CV Demo →
                </a>
                <Link href="/#booking" className="btn btn-secondary btn-large">
                  Book a Discovery Call
                </Link>
                <Link href="/" className="btn btn-secondary btn-large">
                  Back to MAIKR Studio
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer links={footerLinks} />
    </>
  );
}
