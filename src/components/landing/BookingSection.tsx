"use client";

import { FadeIn } from "@/components/ui/motion";
import { Badge } from "@/components/ui/badge";

export default function BookingSection() {
  return (
    <section id="booking" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <FadeIn className="text-center mb-12">
          <Badge variant="gradient" className="mb-4">
            Book a Session
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Book a{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Discovery Session
            </span>
          </h2>
          <p className="text-zinc-400 leading-relaxed max-w-xl mx-auto">
            Schedule a free 30-minute session to discuss your idea and explore
            what&apos;s possible.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-zinc-800/60 overflow-hidden bg-zinc-950/40">
            <iframe
              src="https://calendly.com/omar-maikr/30min?hide_gdpr_banner=1&background_color=06060a&text_color=ffffff&primary_color=8b5cf6"
              width="100%"
              height="700"
              frameBorder="0"
              title="Schedule a Discovery Session"
              loading="lazy"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
