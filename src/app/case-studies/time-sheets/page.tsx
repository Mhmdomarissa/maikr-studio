import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Time Sheets — Timesheet Automation Portal",
  description:
    "How MAIKR Studio built Time Sheets: an email-driven timesheet portal that extracts leave data with AI, validates it, matches it to employees, and files everything for manager review.",
  alternates: {
    canonical: "https://maikr.ai/case-studies/time-sheets",
  },
  openGraph: {
    type: "article",
    url: "https://maikr.ai/case-studies/time-sheets",
    siteName: "MAIKR Studio",
    locale: "en_US",
    title: "Time Sheets — Timesheet Automation Portal | MAIKR Studio",
    description:
      "Email-driven timesheet processing — AI leave extraction, automatic validation, employee matching, and organized filing.",
    images: [
      {
        url: "https://maikr.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Time Sheets — Timesheet Automation Portal by MAIKR Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Time Sheets — Timesheet Automation Portal | MAIKR Studio",
    description:
      "Email-driven timesheet automation built by MAIKR Studio. AI extraction, validation, and manager sign-off in one portal.",
    images: ["https://maikr.ai/og-image.jpg"],
    creator: "@maikr_ai",
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
  { value: "AI", label: "Leave Extraction" },
  { value: "6", label: "Leave Categories" },
  { value: "Auto", label: "Validation Checks" },
  { value: "Live", label: "Demo" },
];

const challenges = [
  {
    title: "Manual Inbox Processing",
    description:
      "Timesheets arrive by email as PDFs, Word documents, spreadsheets, and images. Someone has to open every message, read each attachment, and copy the leave data out by hand.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    title: "Easy-to-Miss Errors",
    description:
      "Duplicate dates, the same day logged under two leave types, or dates that fall outside the month are hard to spot by eye — and they flow straight into HR records.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: "Scattered Records",
    description:
      "Sheets, manager approvals, and notes end up spread across mailboxes and folders, with names spelled inconsistently — making it slow to see who is clear and who needs review.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
  },
];

const solutions = [
  {
    title: "Review Inside the App",
    description:
      "Incoming timesheet emails are read and previewed in a built-in inbox. Each one is accepted into the extraction pipeline or rejected to the archive.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: "AI Leave Extraction",
    description:
      "Attachments are converted to images and read by a vision language model that returns structured leave data, alongside a check of the manager approval screenshot.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Automatic Validation",
    description:
      "Deterministic checks flag problems in plain language, and every record is rolled up to green (clear) or yellow (needs review).",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Organized Filing",
    description:
      "Each result is matched to the right employee and filed with its source sheet, approval, and extraction result in a per-employee, per-month folder.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Email Arrives",
    description:
      "Timesheet emails land in the in-app inbox, where the body and attachments — PDF, Word, Excel, or images — can be previewed. Files can also be uploaded directly.",
  },
  {
    number: "02",
    title: "Accept or Reject",
    description:
      "A reviewer accepts the email to run extraction, or rejects it to the archive. Rejected emails never reach the pipeline.",
  },
  {
    number: "03",
    title: "Extract & Validate",
    description:
      "The manager approval screenshot is read once, then each timesheet in the email is extracted into leave categories and validated for duplicates, overlaps, and out-of-month dates.",
  },
  {
    number: "04",
    title: "Match & File",
    description:
      "The person is matched against the employee list — by ID, then exact name, then fuzzy name — and the files are stored under their name and month.",
  },
  {
    number: "05",
    title: "Review & Sign Off",
    description:
      "The dashboard shows every employee as green or yellow. Reviewers open the monthly record, correct dates if needed, mark it verified, and set the approval sign-off.",
  },
];

const keyFeatures = [
  {
    title: "Email Inbox",
    description:
      "Read timesheet emails, preview attachments inline, and send each one to the pipeline or the archive with a single decision.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      </svg>
    ),
  },
  {
    title: "Status Dashboard",
    description:
      "A per-employee green/yellow roll-up with a year filter and a quick link into each employee's monthly detail.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: "Editable Employee Records",
    description:
      "View the stored sheet, approval, and result side by side, edit leave dates, mark records verified, and approve or reject — edits re-run validation automatically.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
  {
    title: "Employee Matcher",
    description:
      "Manage the employee list from the UI or import it from Excel. Matching is team-aware, so people who share an ID across teams are not mixed up.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "File Browser & Export",
    description:
      "Browse the employee and month folder tree, create, rename, or delete folders, and download the archive as a ZIP file.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
  },
  {
    title: "Pipeline Monitoring",
    description:
      "Every ingestion run is tracked step by step, with failure categories, retries, and manual resolution when a run needs a human.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

const outcomes = [
  {
    label: "Reading Timesheets",
    before: "Copying data by hand",
    after: "AI-extracted leave data",
  },
  {
    label: "Catching Errors",
    before: "Checking dates by eye",
    after: "Automatic plain-language flags",
  },
  {
    label: "Finding Records",
    before: "Scattered emails & folders",
    after: "Filed by employee & month",
  },
  {
    label: "Review Status",
    before: "No single overview",
    after: "Green / yellow dashboard",
  },
];

const techCards = [
  {
    title: "Frontend",
    description:
      "React and TypeScript single-page app built with Vite, styled with Tailwind CSS and shadcn/ui components, using TanStack Query for data fetching and Recharts for charts.",
  },
  {
    title: "Backend & API",
    description:
      "Python FastAPI service with async SQLAlchemy and Pydantic, running the ingestion pipeline, validation, and RapidFuzz-based fuzzy name matching.",
  },
  {
    title: "AI Document Processing",
    description:
      "Attachments are rendered to images with PyMuPDF and read by an OpenAI vision model using structured extraction prompts, with an optional second model cross-checking the result.",
  },
  {
    title: "Swappable Integrations",
    description:
      "Email, extraction, file storage, and database sit behind clean interfaces — built to move from local storage and SQLite to Microsoft Graph, OneDrive, and Postgres through configuration.",
  },
];

export default function TimeSheetsPage() {
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
                <span className="gradient-text">TIME SHEETS</span>
              </h1>
              <p className="cs-hero-tagline">
                AI-Powered Timesheet Automation Portal
              </p>
              <p className="cs-hero-description">
                An email-driven portal that extracts leave data from timesheets
                with AI, validates it, matches it to the right employee, and
                files everything for manager review.
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
                  href="https://time-sheets-demo.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-large"
                >
                  View Live Demo →
                </a>
                <p className="cs-demo-note">
                  Explore the live application • Fully deployed
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="section cs-section">
          <div className="container">
            <h2 className="section-title">
              PROJECT <span className="gradient-text">OVERVIEW</span>
            </h2>
            <p className="cs-section-intro">
              Time Sheets turns a manual, inbox-based timesheet process into a
              single review portal — from reading the email to signing off the
              month.
            </p>
            <div className="cs-overview-details">
              <div className="cs-overview-item">
                <span className="cs-overview-label">Category</span>
                <span className="cs-overview-value">Web Application / HR Automation</span>
              </div>
              <div className="cs-overview-item">
                <span className="cs-overview-label">Status</span>
                <span className="cs-overview-value">Live Demo</span>
              </div>
              <div className="cs-overview-item">
                <span className="cs-overview-label">Client Focus</span>
                <span className="cs-overview-value">Timesheet &amp; Leave Processing</span>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="section cs-section cs-section-alt">
          <div className="container">
            <h2 className="section-title">
              THE <span className="gradient-text">PROBLEM</span>
            </h2>
            <p className="cs-section-intro">
              Processing emailed timesheets by hand is slow, repetitive, and
              error-prone — especially when every sheet looks different.
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
        <section className="section cs-section">
          <div className="container">
            <h2 className="section-title">
              THE <span className="gradient-text">SOLUTION</span>
            </h2>
            <p className="cs-section-intro">
              We built Time Sheets — a portal that combines AI document
              extraction with rule-based validation and human review.
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
        <section className="section cs-section cs-section-alt">
          <div className="container">
            <h2 className="section-title">
              HOW IT <span className="gradient-text">WORKS</span>
            </h2>
            <p className="cs-section-intro">
              A five-step flow from incoming email to a verified, signed-off
              monthly record.
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
        <section className="section cs-section">
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

        {/* Outcome */}
        <section className="section cs-section cs-section-alt">
          <div className="container">
            <h2 className="section-title">
              THE <span className="gradient-text">OUTCOME</span>
            </h2>
            <p className="cs-section-intro">
              Time Sheets replaces manual reading and checking with a guided
              review process.
            </p>
            <div className="cs-impact-grid">
              {outcomes.map((d) => (
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

        {/* Technology */}
        <section className="section cs-section">
          <div className="container">
            <h2 className="section-title">
              BUILT WITH <span className="gradient-text">MODERN TECH</span>
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
                Whether it&apos;s document automation, an internal HR tool, or a
                custom AI workflow — we can build it for you. Let&apos;s discuss
                your project.
              </p>
              <div className="cs-cta-buttons">
                <a
                  href="https://time-sheets-demo.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-large"
                >
                  View Time Sheets Demo →
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
