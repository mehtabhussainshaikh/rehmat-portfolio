import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  tone?: "light" | "dark";
  className?: string;
  priority?: boolean;
}

export function BrandLogo({
  tone = "light",
  className,
  priority = false,
}: BrandLogoProps) {
  return (
    <span
      className={cn("inline-flex items-center gap-0.5", className)}
      aria-label="Rehmat AI Tech"
    >
      <Image
        src="https://pub-82f7463d8b074a0c96f61eb289378ccb.r2.dev/image.png"
        alt=""
        width={25}
        height={32}
        priority={priority}
        className="h-8 w-auto shrink-0"
        style={{ width: "auto" }}
      />
      <span
        className={cn(
          "text-xl font-bold tracking-[-0.04em]",
          tone === "light" ? "text-ink" : "text-text-on-dark"
        )}
        style={{ fontFamily: "var(--font-heading)" }}
        aria-hidden="true"
      >
        ehmat
      </span>
    </span>
  );
}
