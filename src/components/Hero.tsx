import Link from "next/link";
import { PremiumButton } from "@/components/ui/Button";

export interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  layout?: "center" | "left" | "split";
}

export function Hero({
  title,
  subtitle,
  description,
  cta,
  secondaryCta,
  layout = "split",
}: HeroProps) {
  const isCenter = layout === "center";

  return (
    <section className="px-5 py-16 md:px-8 lg:px-10 lg:py-[120px]">
      <div
        className={
          isCenter
            ? "mx-auto flex max-w-[800px] flex-col items-center gap-8 text-center"
            : "mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
        }
      >
        <div className="flex flex-col gap-6">
          {subtitle && (
            <span className="text-lg font-medium tracking-[0.5px] text-primary-accent">
              {subtitle}
            </span>
          )}
          <h1 className="text-[36px] font-bold leading-tight tracking-[-1px] text-primary-text sm:text-[48px] lg:text-[60px]">
            {title}
          </h1>
          {description && (
            <p className="max-w-[500px] text-base leading-relaxed text-primary-text-secondary">
              {description}
            </p>
          )}
          {(cta || secondaryCta) && (
            <div className={`flex flex-wrap gap-4 ${isCenter ? "justify-center" : ""}`}>
              {cta && (
                <Link href={cta.href}>
                  <PremiumButton size="lg">{cta.label}</PremiumButton>
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href}>
                  <PremiumButton variant="secondary" size="lg">
                    {secondaryCta.label}
                  </PremiumButton>
                </Link>
              )}
            </div>
          )}
        </div>

        {!isCenter && (
          <div className="relative h-[280px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary-bg-2 to-primary-bg lg:h-[420px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(232,180,79,0.25),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_70%,rgba(16,185,129,0.2),transparent_55%)]" />
          </div>
        )}
      </div>
    </section>
  );
}
