interface StatBlockProps {
  value: string;
  label: string;
  tone?: "emerald" | "teal";
}

export function StatBlock({ value, label, tone = "emerald" }: StatBlockProps) {
  return (
    <div className="rounded-2xl border border-border-on-ink bg-ink-2 p-8">
      <div className={tone === "emerald" ? "text-4xl font-bold text-emerald" : "text-4xl font-bold text-teal"}>
        {value}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-text-on-dark-secondary">{label}</p>
    </div>
  );
}
