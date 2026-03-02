"use client";

import { FadeIn } from "@/components/ui/motion";

const TECH_LOGOS = [
  { name: "OpenAI" },
  { name: "Anthropic" },
  { name: "LangChain" },
  { name: "Pinecone" },
  { name: "Supabase" },
  { name: "Vercel" },
  { name: "Next.js" },
  { name: "TypeScript" },
];

export default function SocialProofSection() {
  return (
    <section id="social-proof" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#06060a] via-zinc-950/20 to-[#06060a]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <FadeIn className="text-center">
          <p className="text-sm font-medium text-zinc-600 uppercase tracking-widest mb-8">
            Built with the best AI stack
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {TECH_LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="px-5 py-2.5 rounded-full border border-zinc-800 bg-zinc-900/60 text-zinc-400 text-sm hover:border-zinc-700 hover:text-zinc-300 transition-colors duration-200"
              >
                {logo.name}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
