import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface CaseStudyCardProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
}

export function CaseStudyCard({
  image,
  title,
  description,
  technologies,
}: CaseStudyCardProps) {
  return (
    <div className="group relative aspect-video overflow-hidden rounded-2xl bg-navy-2 transition-premium hover:shadow-[0_20px_36px_rgba(22,35,58,0.2)]">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-premium group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(22,35,58,0.95)] via-[rgba(22,35,58,0.5)] to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 opacity-100 transition-premium sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
        <h3
          className="text-lg font-bold text-text-cream"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-text-cream-secondary">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="accent" size="sm">
              {tech}
            </Badge>
          ))}
        </div>
        <span className="mt-1 flex items-center gap-2 text-sm font-semibold text-amber">
          View Case Study
          <ArrowRight size={16} />
        </span>
      </div>
    </div>
  );
}
