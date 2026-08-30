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
    "bg-navy text-text-cream font-semibold hover:bg-navy-2 hover:scale-[1.02] hover:shadow-[0_16px_30px_rgba(22,35,58,0.25)]",
  secondary:
    "bg-transparent border-2 border-navy text-navy font-semibold hover:bg-navy hover:text-text-cream",
  tertiary: "bg-transparent text-navy font-semibold hover:underline underline-offset-4",
  inverse:
    "bg-amber text-navy font-semibold hover:bg-amber-2 hover:scale-[1.02] hover:shadow-[0_16px_30px_rgba(232,165,72,0.3)]",
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
