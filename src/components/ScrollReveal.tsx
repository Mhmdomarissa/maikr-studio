"use client";

import { useEffect, useRef } from "react";

const OBSERVER_THRESHOLD = 0.15;

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const el = ref.current;
    if (!el) return;

    el.classList.add("fade-in");
    el.style.transitionDelay = `${delay}s`;
    el.style.transitionDuration = "0.5s";
    el.style.transitionProperty = "opacity, transform";
    el.style.transitionTimingFunction = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -50px 0px",
        threshold: OBSERVER_THRESHOLD,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
