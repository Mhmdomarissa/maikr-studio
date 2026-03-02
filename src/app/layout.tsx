import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://maikr.ai";
const siteTitle = "MAIKR Studio | Expert-Guided AI Development";
const siteDescription =
  "Bridging the gap between AI prototypes and production. We design, build and deploy production-ready AI systems — from automation to custom LLM pipelines. Expert-guided, not prompt-engineered.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | MAIKR Studio",
  },
  description: siteDescription,
  keywords: [
    "AI development",
    "AI consulting",
    "custom AI",
    "LLM integration",
    "AI automation",
    "AI studio",
    "machine learning",
    "AI product development",
    "expert AI development",
  ],
  authors: [{ name: "MAIKR Studio", url: siteUrl }],
  creator: "MAIKR Studio",
  publisher: "MAIKR Studio",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "MAIKR Studio",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MAIKR Studio — Expert-Guided AI Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.jpg"],
    creator: "@maikr_ai",
    site: "@maikr_ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "MAIKR Studio",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/maikr_logo.png`,
      },
      description: siteDescription,
      email: "omar@maikr.ai",
      founder: {
        "@type": "Person",
        name: "Omar Al-Issa",
      },
      sameAs: [
        "https://linkedin.com/company/maikr",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "MAIKR Studio",
      description: siteDescription,
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#18181b",
              border: "1px solid #3f3f46",
              color: "#fafafa",
            },
          }}
        />
      </body>
      <GoogleAnalytics gaId="G-T4ZW1XKXMC" />
    </html>
  );
}
