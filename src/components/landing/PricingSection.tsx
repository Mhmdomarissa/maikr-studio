"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/ui/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PRICING } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent" />
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(139,92,246,1) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="gradient" className="mb-4">
            Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Scoped to your{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              actual needs
            </span>
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            Every project is different. We provide transparent, scope-based
            pricing — no surprise overruns.
          </p>
        </FadeIn>

        <StaggerContainer
          className="grid md:grid-cols-3 gap-6 items-stretch"
          staggerDelay={0.1}
        >
          {PRICING.map((plan) => (
            <motion.div key={plan.name} variants={staggerItem} className="flex">
              <div
                className={cn(
                  "relative flex flex-col w-full rounded-2xl overflow-hidden transition-all duration-300",
                  plan.highlighted
                    ? "border border-violet-500/50 bg-zinc-900/80 shadow-xl shadow-violet-500/10"
                    : "border border-zinc-800/60 bg-zinc-900/40 hover:border-zinc-700"
                )}
              >
                {plan.highlighted && (
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                )}
                {"badge" in plan && plan.badge && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="gradient">{plan.badge}</Badge>
                  </div>
                )}

                <div className="p-7 pb-0">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-zinc-500 mb-5">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-zinc-500 text-sm ml-1">/ project</span>
                  </div>
                </div>

                <div className="px-7 pb-7 flex flex-col flex-1 gap-5">
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-zinc-400"
                      >
                        <Check
                          size={15}
                          className="mt-0.5 shrink-0 text-violet-400"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={plan.ctaHref} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant={plan.highlighted ? "primary" : "secondary"}
                      size="md"
                      className="w-full"
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        <FadeIn direction="up" delay={0.2} className="mt-10 text-center">
          <p className="text-sm text-zinc-600">
            Not sure which fits?{" "}
            <Link
              href="https://calendly.com/omar-maikr/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-violet-300 underline underline-offset-4"
            >
              Let&apos;s have a free 30-min call
            </Link>{" "}
            and figure it out together.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
