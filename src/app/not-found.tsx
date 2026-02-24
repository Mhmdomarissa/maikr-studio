import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
        background: "var(--color-bg, #06060a)",
        color: "var(--color-text, #ffffff)",
        gap: "1.5rem",
      }}
    >
      <p
        style={{
          fontSize: "6rem",
          fontWeight: 800,
          lineHeight: 1,
          background: "linear-gradient(135deg, #a855f7, #ec4899)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        404
      </p>
      <h1 style={{ fontSize: "1.75rem", fontWeight: 700 }}>
        Page Not Found
      </h1>
      <p style={{ color: "var(--color-text-secondary, #a0a0a0)", maxWidth: 400 }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          marginTop: "1rem",
          padding: "0.75rem 2rem",
          borderRadius: "9999px",
          background: "linear-gradient(135deg, #a855f7, #ec4899)",
          color: "#fff",
          fontWeight: 600,
          textDecoration: "none",
          display: "inline-block",
        }}
      >
        Back to Home
      </Link>
    </main>
  );
}
