import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "tertiary";
export type ButtonSize = "sm" | "md" | "lg";

interface PremiumButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-8 py-4 text-base",
  lg: "px-10 py-5 text-lg",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-[#E8B44F] to-[#D4A747] text-[#0D1117] font-semibold rounded-lg hover:scale-[1.02] hover:shadow-[0_20px_25px_rgba(232,180,79,0.2)]",
  secondary:
    "bg-transparent border-2 border-[#A3ADB7] text-primary-text rounded-lg hover:border-primary-accent hover:text-primary-accent hover:bg-[rgba(232,180,79,0.05)]",
  tertiary:
    "bg-transparent text-primary-accent hover:text-primary-text hover:underline",
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
        "inline-flex items-center justify-center tracking-[0.5px] transition-premium",
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
