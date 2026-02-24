interface GridBackgroundProps {
  children: React.ReactNode;
  className?: string;
  variant?: "grid" | "dots";
}

export default function GridBackground({
  children,
  className = "",
  variant = "grid",
}: GridBackgroundProps) {
  const patternStyle: React.CSSProperties =
    variant === "dots"
      ? {
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(139, 92, 246, 0.12) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          mask: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
          WebkitMask:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 0,
        }
      : {
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          mask: "radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 100%)",
          WebkitMask:
            "radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 0,
        };

  return (
    <div className={className} style={{ position: "relative" }}>
      <div style={patternStyle} />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}
