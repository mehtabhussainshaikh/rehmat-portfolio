import type { Metadata } from "next";
import Link from "next/link";
import {
  Code,
  Smartphone,
  Cloud,
  Database,
  Shield,
  LineChart,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { PremiumCard } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { PremiumButton } from "@/components/ui/Button";
import { services, type IconName } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software development, web & mobile applications, cloud infrastructure, data engineering, security, and product strategy.",
};

const icons: Record<IconName, LucideIcon> = {
  Code,
  Smartphone,
  Cloud,
  Database,
  Shield,
  LineChart,
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Services"
        subtitle="What We Do"
        description="Full-lifecycle software delivery — from architecture to production support."
        layout="center"
      />

      <SectionContainer>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <PremiumCard key={service.id} className="flex flex-col gap-6">
                <Icon size={40} className="text-primary-accent" />
                <h3 className="heading-3 text-primary-text">{service.title}</h3>
                <p className="text-base leading-relaxed text-primary-text-secondary">
                  {service.description}
                </p>
                <ul className="flex flex-col gap-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-primary-text-secondary"
                    >
                      <CheckCircle2 size={16} className="shrink-0 text-primary-accent-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <Badge key={tech} variant="accent">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </PremiumCard>
            );
          })}
        </div>
      </SectionContainer>

      <section className="bg-primary-bg-2-hover px-5 py-20 lg:px-10">
        <div className="mx-auto flex max-w-[800px] flex-col items-center gap-6 text-center">
          <h2 className="heading-2 text-primary-text">Start Your Project</h2>
          <p className="text-base leading-relaxed text-primary-text-secondary">
            Tell us what you&apos;re building and we&apos;ll help you scope it.
          </p>
          <Link href="/contact">
            <PremiumButton size="lg">Start Your Project</PremiumButton>
          </Link>
        </div>
      </section>
    </>
  );
}
