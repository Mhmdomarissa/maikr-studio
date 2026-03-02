"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingParticles from "@/components/ui/FloatingParticles";
import { FadeIn } from "@/components/ui/motion";
import { CALENDLY_URL, CONTACT_EMAIL } from "@/lib/constants";

export default function FinalCTASection() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Background with image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg_cta_9x16.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#06060a] via-[#06060a]/70 to-[#06060a]" />
      <div className="absolute inset-0 bg-gradient-to-r from-violet-950/30 via-transparent to-fuchsia-950/20" />
      <FloatingParticles count={30} />

      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-600/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-10 text-center">
        <FadeIn>
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 shadow-2xl shadow-violet-500/30 mb-8 mx-auto"
          >
            <CalendarDays size={28} className="text-white" />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            Ready to build{" "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
              something real?
            </span>
          </h2>

          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-10">
            Let&apos;s start with a focused session to explore what&apos;s
            possible for your organization.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              <Button size="xl" className="group">
                <CalendarDays size={18} />
                Request a Free Discovery Call
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Button>
            </Link>
            <Link href={`mailto:${CONTACT_EMAIL}`}>
              <Button variant="secondary" size="xl">
                <Mail size={18} />
                Send us an email
              </Button>
            </Link>
          </div>

          <p className="mt-8 text-sm text-zinc-600">
            No commitment required. No sales pitch. Just an honest conversation.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
