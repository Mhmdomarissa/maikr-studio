import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "bordered" | "glow";
}

export function Card({ className, variant = "default", ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl transition-all duration-300",
        {
          "bg-zinc-900/60 border border-zinc-800/60 backdrop-blur-sm": variant === "default",
          "bg-white/[0.03] border border-white/[0.08] backdrop-blur-md":
            variant === "glass",
          "bg-zinc-900/40 border border-violet-500/20 hover:border-violet-500/40":
            variant === "bordered",
          "bg-zinc-900/60 border border-violet-500/20 shadow-lg shadow-violet-500/10 hover:shadow-violet-500/20 hover:border-violet-500/40":
            variant === "glow",
        },
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pb-0", className)} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6", className)} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pt-0", className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-lg font-semibold text-white leading-tight", className)}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-zinc-400 mt-1.5", className)} {...props} />
  );
}
