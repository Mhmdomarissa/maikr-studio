import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MAIKR Studio | Expert-Guided AI Development",
  description:
    "Bridging the gap between AI prototypes and production. Expert-guided AI development for real-world applications.",
  openGraph: {
    title: "MAIKR Studio | Expert-Guided AI Development",
    description:
      "Bridging the gap between AI prototypes and production. Expert-guided AI development for real-world applications.",
    type: "website",
    siteName: "MAIKR Studio",
  },
  metadataBase: new URL("https://maikr.ai"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
