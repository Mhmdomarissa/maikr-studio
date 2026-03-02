"use client";

import { FadeIn } from "@/components/ui/motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import GridBackground from "@/components/ui/GridBackground";

export default function WhySection() {
  return (
    <section id="why" className="py-28 relative overflow-hidden">
      <GridBackground variant="dots">
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="gradient" className="mb-4">
              Why We Built This
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              Why We Created{" "}
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                MAIKR Studio
              </span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <FadeIn direction="left" delay={0.05}>
              <Card variant="bordered" className="h-full">
                <CardContent className="p-8">
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    In 2024, we noticed that LLMs were excellent at generating
                    code, but there&apos;s a significant gap in taking that code
                    to production. Even with AI built into all the software
                    development tools, building beyond simple apps remains
                    extremely challenging.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="right" delay={0.1}>
              <Card variant="glow" className="h-full">
                <CardContent className="p-8">
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    Even with considerable knowledge, users struggled to get
                    apps working properly. The need for expert help sparked the
                    idea for{" "}
                    <strong className="text-white">MAIKR Studio</strong>.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </GridBackground>
    </section>
  );
}
