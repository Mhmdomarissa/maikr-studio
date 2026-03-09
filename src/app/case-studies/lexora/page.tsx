import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lexora — Intelligent Library System",
  description:
    "How MAIKR Studio built Lexora: a modern intelligent library system that transforms how users explore, manage, and interact with library resources through a clean digital experience.",
  alternates: {
    canonical: "https://maikr.ai/case-studies/lexora",
  },
  openGraph: {
    type: "article",
    url: "https://maikr.ai/case-studies/lexora",
    siteName: "MAIKR Studio",
    locale: "en_US",
    title: "Lexora — Intelligent Library System | MAIKR Studio",
    description:
      "Modern intelligent library system — clean digital experience for exploring, managing, and accessing library resources.",
    images: [
      {
        url: "https://maikr.ai/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lexora — Intelligent Library System by MAIKR Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lexora — Intelligent Library System | MAIKR Studio",
    description:
      "Modern intelligent library system built by MAIKR Studio. Clean digital experience for library management.",
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
  { value: "100%", label: "Digital Workflow" },
  { value: "3x", label: "Faster Access" },
  { value: "Smart", label: "Search & Browse" },
  { value: "Live", label: "Deployed" },
];

const challenges = [
  {
    title: "Fragmented Workflows",
    description:
      "Library systems typically rely on disconnected tools — spreadsheets for inventory, paper slips for borrowing, and manual logs for returns. This fragmentation slows everything down.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: "Poor User Experience",
    description:
      "Existing library interfaces are often outdated, unintuitive, and not designed for how modern users expect to interact with digital tools — resulting in low adoption and frustration.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 15h8M9 9h.01M15 9h.01" />
      </svg>
    ),
  },
  {
    title: "Limited Accessibility",
    description:
      "Traditional library systems require physical presence or desktop-era software. Users today need web-based access from any device, anywhere, at any time.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
];

const solutions = [
  {
    title: "Unified Digital Platform",
    description:
      "A single, cohesive web application that replaces all disconnected tools — handling cataloging, browsing, borrowing, and returns in one streamlined interface.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Modern User Interface",
    description:
      "Clean, intuitive design built for how people actually use software today — responsive, fast, and visually clear with minimal learning curve.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Smart Search & Browse",
    description:
      "Powerful search functionality that helps users quickly find what they need — filtering by category, availability, author, and more with instant results.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Fully Deployed",
    description:
      "Production-ready from day one — live on the web, accessible anywhere, with fast load times and modern infrastructure that scales as needed.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
];

const keyFeatures = [
  {
    title: "Book Catalog Management",
    description:
      "Complete CRUD operations for library inventory — add, edit, view, and remove books with cover images, authors, categories, and availability status.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    title: "User Management",
    description:
      "Role-based user system for librarians and members with authentication, profiles, and activity tracking for a personalized experience.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Borrow & Return System",
    description:
      "Digital borrowing workflow with due date tracking, return processing, and real-time availability updates — no paper slips needed.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
  },
  {
    title: "Search & Filtering",
    description:
      "Instant search across the entire catalog with filters for category, author, availability, and more — find any book in seconds.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    ),
  },
  {
    title: "Responsive Design",
    description:
      "Works perfectly on desktop, tablet, and mobile. Access the library system from any device with a consistent, polished experience.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Modern Tech Stack",
    description:
      "Built with current best practices — fast performance, clean architecture, and deployment on modern infrastructure for reliability and speed.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

const outcomes = [
  {
    label: "Book Discovery",
    before: "Manual browsing shelves",
    after: "Instant search & filter",
  },
  {
    label: "Borrowing Process",
    before: "Paper-based logging",
    after: "One-click digital checkout",
  },
  {
    label: "Inventory Tracking",
    before: "Spreadsheets & guesswork",
    after: "Real-time availability",
  },
  {
    label: "User Access",
    before: "Physical presence required",
    after: "Anywhere, any device",
  },
];

const techCards = [
  {
    title: "Frontend",
    description:
      "Modern, responsive web application built with current frameworks and best practices — delivering fast load times, smooth interactions, and a polished user experience across all devices.",
  },
  {
    title: "Backend & API",
    description:
      "Clean, well-structured server architecture handling authentication, data management, and business logic with secure API endpoints and efficient data flow.",
  },
  {
    title: "Database & Storage",
    description:
      "Reliable data persistence layer managing books, users, borrowing records, and more — with optimized queries for fast search and retrieval at scale.",
  },
  {
    title: "Deployment & Infrastructure",
    description:
      "Deployed on modern cloud infrastructure with automatic builds, HTTPS, and global CDN distribution for fast, reliable access from anywhere.",
  },
];

export default function LexoraPage() {
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
                <span className="gradient-text">LEXORA</span>
              </h1>
              <p className="cs-hero-tagline">
                Intelligent Library System
              </p>
              <p className="cs-hero-description">
                A modern intelligent library system designed to improve how users
                explore, manage, and interact with library resources through a
                clean digital experience.
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
                  href="https://mini-library-system.vercel.app/"
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
              Lexora was built to modernize the library experience — replacing
              outdated, fragmented workflows with a single, clean web application
              that handles everything from catalog management to digital borrowing.
            </p>
            <div className="cs-overview-details">
              <div className="cs-overview-item">
                <span className="cs-overview-label">Category</span>
                <span className="cs-overview-value">Web Application / Library Management</span>
              </div>
              <div className="cs-overview-item">
                <span className="cs-overview-label">Status</span>
                <span className="cs-overview-value">Deployed &amp; Live</span>
              </div>
              <div className="cs-overview-item">
                <span className="cs-overview-label">Client Focus</span>
                <span className="cs-overview-value">Digital Library Modernization</span>
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
              Traditional library workflows are often slow, fragmented, and not
              user-friendly. Users and librarians alike deserve a smoother, more
              modern experience.
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
              We built Lexora — a modern web-based library system that brings
              the entire library experience into a single, intuitive digital
              platform.
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

        {/* Outcome */}
        <section className="section cs-section">
          <div className="container">
            <h2 className="section-title">
              THE <span className="gradient-text">OUTCOME</span>
            </h2>
            <p className="cs-section-intro">
              Lexora replaced manual, disconnected library processes with a
              unified digital experience — measurable improvements across the
              board.
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
        <section className="section cs-section cs-section-alt">
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
                Whether it&apos;s a library system, an internal tool, or a
                custom web application — we can build it for you. Let&apos;s
                discuss your project.
              </p>
              <div className="cs-cta-buttons">
                <a
                  href="https://mini-library-system.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-large"
                >
                  View Lexora Demo →
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
