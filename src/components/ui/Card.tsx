import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PremiumCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  tone?: "paper" | "ink";
}

export function PremiumCard({
  children,
  className,
  hover = true,
  tone = "paper",
  ...rest
}: PremiumCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-8 transition-premium",
        tone === "paper" &&
          "bg-card-on-paper border border-border-on-paper shadow-[0_4px_16px_rgba(14,42,34,0.06)]",
        tone === "ink" && "bg-ink-2 border border-border-on-ink",
        hover &&
          tone === "paper" &&
          "hover:-translate-y-1.5 hover:border-emerald/40 hover:shadow-[0_20px_36px_rgba(14,42,34,0.12)]",
        hover && tone === "ink" && "hover:-translate-y-1.5 hover:bg-ink-3",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
