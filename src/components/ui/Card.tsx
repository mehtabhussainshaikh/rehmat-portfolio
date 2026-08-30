import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PremiumCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  tone?: "paper" | "navy";
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
          "bg-card-on-paper border border-border-on-paper shadow-[0_4px_16px_rgba(22,35,58,0.06)]",
        tone === "navy" && "bg-navy-2 border border-border-on-navy",
        hover &&
          tone === "paper" &&
          "hover:-translate-y-1.5 hover:border-amber/40 hover:shadow-[0_20px_36px_rgba(22,35,58,0.12)]",
        hover && tone === "navy" && "hover:-translate-y-1.5 hover:bg-navy-3",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
