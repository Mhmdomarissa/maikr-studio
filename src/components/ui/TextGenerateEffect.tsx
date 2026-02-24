"use client";

import { useEffect, useState, useRef } from "react";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  highlightWords?: string[];
  highlightClass?: string;
  speed?: number;
}

export default function TextGenerateEffect({
  words,
  className = "",
  highlightWords = [],
  highlightClass = "gradient-text",
  speed = 40,
}: TextGenerateEffectProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const wordArray = words.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    if (visibleCount >= wordArray.length) return;

    const timer = setTimeout(() => {
      setVisibleCount((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [started, visibleCount, wordArray.length, speed]);

  return (
    <span ref={ref} className={className}>
      {wordArray.map((word, i) => {
        const isHighlighted = highlightWords.some(
          (hw) => hw.toLowerCase() === word.replace(/[^a-zA-Z]/g, "").toLowerCase()
        );
        return (
          <span
            key={i}
            style={{
              opacity: i < visibleCount ? 1 : 0,
              transform: i < visibleCount ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
              display: "inline-block",
              marginRight: "0.3em",
            }}
          >
            {isHighlighted ? (
              <span className={highlightClass}>{word}</span>
            ) : (
              word
            )}
          </span>
        );
      })}
    </span>
  );
}
