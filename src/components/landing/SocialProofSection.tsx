"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/ui/motion";
import { STATS, TESTIMONIALS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TECH_LOGOS = [
  { name: "OpenAI", abbr: "OAI" },
  { name: "Anthropic", abbr: "ANT" },
  { name: "LangChain", abbr: "LC" },
  { name: "Pinecone", abbr: "PC" },
  { name: "Supabase", abbr: "SB" },
  { name: "Vercel", abbr: "VCL" },
];

export default function SocialProofSection() {
  return (
    <section id="social-proof" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#06060a] via-zinc-950/30 to-[#06060a]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Stats */}
        <FadeIn className="text-center mb-20">
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-8">
            Measurable results, not promises
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-800/40 rounded-2xl overflow-hidden border border-zinc-800/60">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-zinc-950/80 px-8 py-8 text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Tech stack logos */}
        <FadeIn direction="up" delay={0.1} className="mb-20">
          <p className="text-center text-sm text-zinc-600 mb-8 uppercase tracking-widest">
            Built with the best AI stack
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {TECH_LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-800 bg-zinc-900/60 text-zinc-500 text-sm hover:border-zinc-700 hover:text-zinc-400 transition-colors duration-200"
              >
                <span className="text-xs font-bold text-violet-500/70">
                  {logo.abbr}
                </span>
                <span>{logo.name}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Testimonials */}
        <FadeIn direction="up" delay={0.1}>
          <p className="text-center text-sm font-medium text-zinc-500 uppercase tracking-widest mb-10">
            What our clients say
          </p>
        </FadeIn>
        <StaggerContainer
          className="grid md:grid-cols-3 gap-6"
          staggerDelay={0.12}
        >
          {TESTIMONIALS.map((t) => (
            <motion.div key={t.author} variants={staggerItem}>
              <Card variant="glass" className="h-full">
                <CardContent className="p-6 flex flex-col gap-4 h-full">
                  <Quote size={20} className="text-violet-500/40" />
                  <p className="text-zinc-300 text-sm leading-relaxed flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-2 border-t border-zinc-800/60">
                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-xs font-bold text-white shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        {t.author}
                      </p>
                      <p className="text-xs text-zinc-500">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
