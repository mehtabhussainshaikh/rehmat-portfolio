interface StatBlockProps {
  value: string;
  label: string;
  tone?: "amber" | "teal";
}

export function StatBlock({ value, label, tone = "amber" }: StatBlockProps) {
  return (
    <div className="rounded-2xl border border-border-on-navy bg-navy-2 p-8">
      <div className={tone === "amber" ? "text-4xl font-bold text-amber" : "text-4xl font-bold text-teal"}>
        {value}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-text-cream-secondary">{label}</p>
    </div>
  );
}
