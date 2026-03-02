"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Layers,
  ShieldCheck,
  Settings2,
  Clock,
  HeartHandshake,
} from "lucide-react";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/ui/motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FEATURES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap size={22} />,
  Layers: <Layers size={22} />,
  ShieldCheck: <ShieldCheck size={22} />,
  Settings2: <Settings2 size={22} />,
  Clock: <Clock size={22} />,
  HeartHandshake: <HeartHandshake size={22} />,
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-28 relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,1) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,1) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="gradient" className="mb-4">
            What Makes Us Different
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            AI speed.{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Engineer-grade
            </span>{" "}
            quality.
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            We combine multiple types of AI with deep engineering expertise to
            deliver systems that actually work — not demos that impress once.
          </p>
        </FadeIn>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.08}
        >
          {FEATURES.map((feature, i) => (
            <motion.div key={feature.title} variants={staggerItem}>
              <Card
                variant="bordered"
                className="group h-full hover:bg-zinc-900/60 transition-all duration-300"
              >
                <CardContent className="p-7 flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 group-hover:bg-violet-500/15 group-hover:border-violet-500/30 transition-colors duration-200">
                      {iconMap[feature.icon]}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="h-px w-0 group-hover:w-full bg-gradient-to-r from-violet-500/40 to-fuchsia-500/40 transition-all duration-500 rounded-full mt-auto" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
