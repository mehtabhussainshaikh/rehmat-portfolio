import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "default" | "success" | "accent";
export type BadgeSize = "sm" | "md";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-paper-2 border-border-on-paper text-text-ink-secondary",
  success: "bg-[rgba(13,148,136,0.1)] border-teal text-teal",
  accent: "bg-[rgba(16,185,129,0.15)] border-emerald text-emerald-2",
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-3 py-1.5 text-xs",
};

export function Badge({
  children,
  variant = "default",
  size = "md",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border font-semibold",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  );
}
