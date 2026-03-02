"use client";

import { FadeIn, StaggerContainer, staggerItem } from "@/components/ui/motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const MISSION_ITEMS = [
  "We build AI solutions using multiple types of machine intelligence—from LLMs to computer vision to agentic workflows—choosing the right tools for your specific needs.",
  "We start with a focused session where our experts help you cut through the hype to validate your idea through brainstorming and deep research.",
  "If we identify viable options, we'll use AI coding agents to build a working demo during the session.",
];

export default function MissionSection() {
  return (
    <section id="mission" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="gradient" className="mb-4">
            Our Purpose
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Mission
            </span>
          </h2>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.05}>
            <div className="text-center mb-12 p-8 rounded-2xl border border-violet-500/20 bg-violet-500/5">
              <p className="text-xl text-zinc-200 leading-relaxed">
                We wanted to build a place where people could come in and, with
                the help of AI and our experts, start to build{" "}
                <strong className="text-white">working applications</strong>{" "}
                easily.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-3 gap-5" staggerDelay={0.1}>
            {MISSION_ITEMS.map((text, i) => (
              <motion.div key={i} variants={staggerItem}>
                <Card variant="bordered" className="h-full hover:border-violet-500/30 transition-colors duration-300">
                  <CardContent className="p-6 flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-xs font-bold text-white">
                      {i + 1}
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed">{text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
