import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "inverse";
export type ButtonSize = "sm" | "md" | "lg";

interface PremiumButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-base",
  lg: "px-9 py-4 text-base",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-text-on-dark font-semibold hover:bg-ink-2 hover:scale-[1.02] hover:shadow-[0_16px_30px_rgba(14,42,34,0.25)]",
  secondary:
    "bg-transparent border-2 border-ink text-ink font-semibold hover:bg-ink hover:text-text-on-dark",
  tertiary: "bg-transparent text-ink font-semibold hover:underline underline-offset-4",
  inverse:
    "bg-emerald text-ink font-semibold hover:bg-emerald-2 hover:scale-[1.02] hover:shadow-[0_16px_30px_rgba(16,185,129,0.3)]",
};

export function PremiumButton({
  variant = "primary",
  size = "md",
  children,
  className,
  ...rest
}: PremiumButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full tracking-[0.2px] transition-premium",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
