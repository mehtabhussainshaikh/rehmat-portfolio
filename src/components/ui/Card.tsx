import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PremiumCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function PremiumCard({
  children,
  className,
  hover = true,
  ...rest
}: PremiumCardProps) {
  return (
    <div
      className={cn(
        "bg-primary-bg-2 border border-[rgba(232,180,79,0.1)] rounded-xl p-10 shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-premium",
        hover &&
          "hover:-translate-y-2 hover:border-[rgba(232,180,79,0.3)] hover:shadow-[0_20px_40px_rgba(232,180,79,0.15)] hover:bg-primary-bg-2-hover",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
