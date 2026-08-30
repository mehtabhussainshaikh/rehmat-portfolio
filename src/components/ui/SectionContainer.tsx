import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SectionPadding = "normal" | "small" | "none";
export type SectionBackground = "paper" | "paper-2" | "ink" | "emerald" | "transparent";

interface SectionContainerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  padding?: SectionPadding;
  background?: SectionBackground;
}

const paddingClasses: Record<SectionPadding, string> = {
  normal: "px-5 py-16 md:px-8 md:py-20 lg:px-10 lg:py-[120px]",
  small: "px-5 py-10 md:px-8 md:py-12 lg:px-10 lg:py-16",
  none: "",
};

const backgroundClasses: Record<SectionBackground, string> = {
  paper: "bg-paper text-text-ink",
  "paper-2": "bg-paper-2 text-text-ink",
  ink: "bg-ink text-text-on-dark",
  emerald: "bg-emerald text-ink",
  transparent: "bg-transparent",
};

export function SectionContainer({
  children,
  className,
  padding = "normal",
  background = "transparent",
  ...rest
}: SectionContainerProps) {
  return (
    <section className={cn(backgroundClasses[background])} {...rest}>
      <div className={cn("max-w-[1200px] mx-auto", paddingClasses[padding], className)}>
        {children}
      </div>
    </section>
  );
}
