import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  tone?: "emerald" | "on-dark";
}

export function Eyebrow({ children, className, tone = "emerald" }: EyebrowProps) {
  return (
    <span
      className={cn(
        "eyebrow",
        tone === "emerald" ? "text-emerald-2" : "text-text-on-dark-secondary",
        className
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          tone === "emerald" ? "bg-emerald" : "bg-text-on-dark-secondary"
        )}
      />
      {children}
    </span>
  );
}
