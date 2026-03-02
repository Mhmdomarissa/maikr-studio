import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-violet-500/15 text-violet-300 border border-violet-500/30",
        secondary: "bg-zinc-800 text-zinc-300 border border-zinc-700",
        success: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
        destructive: "bg-red-500/15 text-red-400 border border-red-500/30",
        outline: "border border-zinc-700 text-zinc-400",
        gradient: "bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 text-violet-300 border border-violet-500/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
