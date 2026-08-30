import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NumberedFeatureCardProps {
  index: number;
  title: string;
  description: string;
  items?: string[];
  icon?: ReactNode;
}

const badgeTones = ["bg-emerald text-ink", "bg-teal text-text-on-dark"];

export function NumberedFeatureCard({
  index,
  title,
  description,
  items,
}: NumberedFeatureCardProps) {
  const badgeTone = badgeTones[index % badgeTones.length];
  const label = String(index + 1).padStart(2, "0");

  return (
    <div className="rounded-2xl border border-border-on-ink bg-ink-2 p-8 transition-premium hover:-translate-y-1.5 hover:bg-ink-3">
      <span
        className={cn(
          "inline-flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold",
          badgeTone
        )}
      >
        {label}
      </span>
      <h3 className="mt-6 text-lg font-bold text-text-on-dark" style={{ fontFamily: "var(--font-heading)" }}>
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-text-on-dark-secondary">{description}</p>
      {items && items.length > 0 && (
        <ul className="mt-5 flex flex-col gap-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm text-text-on-dark-secondary"
            >
              <span className="h-1 w-1 shrink-0 rounded-full bg-text-on-dark-secondary" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
