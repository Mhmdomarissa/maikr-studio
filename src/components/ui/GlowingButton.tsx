"use client";

import Link from "next/link";

interface GlowingButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function GlowingButton({
  href,
  children,
  className = "",
}: GlowingButtonProps) {
  return (
    <Link href={href} className={`glowing-btn ${className}`}>
      <span className="glowing-btn-content">{children}</span>
    </Link>
  );
}
