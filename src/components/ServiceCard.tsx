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
      className="group rounded-xl border border-transparent bg-primary-bg-2 p-8 transition-premium hover:-translate-y-2 hover:border-[rgba(232,180,79,0.3)] hover:shadow-[0_20px_40px_rgba(232,180,79,0.15)]"
    >
      <Icon size={48} strokeWidth={1.5} className="text-primary-accent" />
      <h3 className="mt-6 text-xl font-bold tracking-[-0.5px] text-primary-text">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-primary-text-secondary">
        {description}
      </p>
      {technologies && technologies.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="accent" size="sm">
              {tech}
            </Badge>
          ))}
        </div>
      )}
      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary-accent">
        Learn more
        <ArrowRight
          size={16}
          className="transition-premium group-hover:translate-x-1"
        />
      </div>
    </div>
  );
}
