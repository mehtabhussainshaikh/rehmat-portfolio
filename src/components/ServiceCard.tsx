import {
  Code,
  Smartphone,
  Cloud,
  Database,
  Shield,
  LineChart,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/data/services";
import { Badge } from "@/components/ui/Badge";

const icons: Record<IconName, LucideIcon> = {
  Code,
  Smartphone,
  Cloud,
  Database,
  Shield,
  LineChart,
};

interface ServiceCardProps {
  icon: IconName;
  title: string;
  description: string;
  technologies?: string[];
  features?: string[];
  onClick?: () => void;
}

export function ServiceCard({
  icon,
  title,
  description,
  technologies,
  onClick,
}: ServiceCardProps) {
  const Icon = icons[icon];

  return (
    <div
      onClick={onClick}
      className="group rounded-2xl border border-border-on-paper bg-card-on-paper p-8 transition-premium hover:-translate-y-1.5 hover:border-amber/40 hover:shadow-[0_20px_36px_rgba(22,35,58,0.1)]"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(232,165,72,0.15)]">
        <Icon size={24} strokeWidth={1.75} className="text-amber-2" />
      </span>
      <h3
        className="mt-6 text-xl font-bold tracking-tight text-navy"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-text-navy-secondary">{description}</p>
      {technologies && technologies.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="accent" size="sm">
              {tech}
            </Badge>
          ))}
        </div>
      )}
      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-navy">
        Learn more
        <ArrowRight size={16} className="transition-premium group-hover:translate-x-1" />
      </div>
    </div>
  );
}
