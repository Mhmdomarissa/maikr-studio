"use client";

import { FadeIn } from "@/components/ui/motion";
import { Badge } from "@/components/ui/badge";
import { Accordion } from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQSection() {
  return (
    <section id="faq" className="py-28 relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <FadeIn className="text-center mb-14">
          <Badge variant="gradient" className="mb-4">
            FAQ
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Common questions,{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              honest answers
            </span>
          </h2>
          <p className="text-zinc-400 leading-relaxed max-w-xl mx-auto">
            Everything you need to know about working with MAIKR Studio.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.1}>
          <Accordion items={[...FAQ_ITEMS]} />
        </FadeIn>
      </div>
    </section>
  );
}
