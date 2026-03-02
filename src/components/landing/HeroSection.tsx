"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FloatingParticles from "@/components/ui/FloatingParticles";
import { CALENDLY_URL } from "@/lib/constants";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

const TERMINAL_LINES = [
  { type: "comment", text: "// MAIKR Studio — AI Development" },
  { type: "command", text: "> npx maikr init my-ai-project" },
  { type: "success", text: "✓ Discovery session scheduled" },
  { type: "success", text: "✓ Feasibility analysis complete" },
  { type: "success", text: "✓ Prototype built in 3 days" },
  { type: "success", text: "✓ Production deploy ready" },
  { type: "highlight", text: "→ Time to value: 48h" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg_hero_9x16.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#06060a]/60 via-[#06060a]/40 to-[#06060a]" />
      <div className="absolute inset-0 bg-gradient-to-r from-violet-950/20 via-transparent to-fuchsia-950/10" />
      <FloatingParticles count={45} />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants}>
              <Badge variant="gradient" className="mb-6">
                <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse inline-block" />
                Expert-Guided AI Development
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.07] text-white mb-6"
            >
              Bridging the gap between{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                AI prototypes
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
                production
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-zinc-400 leading-relaxed mb-10 max-w-xl"
            >
              We don&apos;t prompt-engineer your ideas. We architect, build, and
              ship production-ready AI systems that work in the real world —
              fast.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 items-center"
            >
              <Link href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="group">
                  <CalendarDays size={18} />
                  Book a Free Discovery Call
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Button>
              </Link>
              <Link href="/case-studies/alpha-cv">
                <Button variant="secondary" size="lg">
                  See Our Work
                </Button>
              </Link>
            </motion.div>

            {/* Trust signal */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {["SK", "ML", "AR"].map((initials) => (
                  <div
                    key={initials}
                    className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-xs font-bold text-white border-2 border-[#06060a]"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <p className="text-sm text-zinc-500">
                <span className="text-zinc-300 font-medium">
                  Trusted by founders & CTOs
                </span>{" "}
                building real AI products
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Terminal Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotateY: -5 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] as const }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow behind terminal */}
              <div className="absolute -inset-4 bg-violet-600/10 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl border border-zinc-800 bg-zinc-950/90 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/50">
                {/* Terminal chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800/80 bg-zinc-900/60">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs text-zinc-500 font-mono">
                    maikr — AI Development Studio
                  </span>
                </div>
                {/* Terminal body */}
                <div className="p-6 font-mono text-sm space-y-2">
                  {TERMINAL_LINES.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.18, duration: 0.3 }}
                      className={
                        line.type === "comment"
                          ? "text-zinc-600"
                          : line.type === "command"
                          ? "text-zinc-200"
                          : line.type === "success"
                          ? "text-emerald-400"
                          : "text-violet-400 font-semibold"
                      }
                    >
                      {line.text}
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      delay: 2.6,
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 0.2,
                    }}
                    className="inline-block h-4 w-2 bg-violet-400 rounded-sm"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        >
          <span className="text-xs text-zinc-600">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-5 w-px bg-gradient-to-b from-zinc-600 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
