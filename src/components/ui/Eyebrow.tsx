import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  tone?: "amber" | "cream";
}

export function Eyebrow({ children, className, tone = "amber" }: EyebrowProps) {
  return (
    <span
      className={cn(
        "eyebrow",
        tone === "amber" ? "text-amber-2" : "text-text-cream-secondary",
        className
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          tone === "amber" ? "bg-amber" : "bg-text-cream-secondary"
        )}
      />
      {children}
    </span>
  );
}
