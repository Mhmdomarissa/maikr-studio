"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/ui/motion";
import { Badge } from "@/components/ui/badge";
import { HOW_IT_WORKS } from "@/lib/constants";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="gradient" className="mb-4">
            How It Works
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            From idea to{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              production
            </span>{" "}
            in weeks
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            No months of scoping. No surprise invoices. A clear three-phase
            process with defined outcomes at each step.
          </p>
        </FadeIn>

        <StaggerContainer className="relative" staggerDelay={0.15}>
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/30 via-fuchsia-500/30 to-transparent hidden lg:block -translate-x-1/2" />

          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            {HOW_IT_WORKS.map((step, i) => (
              <motion.div
                key={step.step}
                variants={staggerItem}
                className="relative"
              >
                {/* Connector dot (desktop) */}
                <div className="hidden lg:flex absolute -top-3 left-1/2 -translate-x-1/2 h-6 w-6 rounded-full bg-zinc-950 border border-violet-500/60 items-center justify-center z-10">
                  <div className="h-2 w-2 rounded-full bg-violet-500" />
                </div>

                <div className="mt-8 lg:mt-6 p-8 rounded-2xl border border-zinc-800/60 bg-zinc-900/40 hover:border-violet-500/30 hover:bg-zinc-900/60 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-5xl font-black bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 bg-clip-text text-transparent">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <span className="inline-block text-xs font-medium text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full">
                    {step.detail}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
