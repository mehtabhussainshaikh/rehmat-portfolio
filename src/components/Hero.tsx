import Link from "next/link";
import { PremiumButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeroIllustration } from "@/components/HeroIllustration";

export interface HeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  layout?: "center" | "split";
  highlights?: string[];
}

export function Hero({
  eyebrow,
  title,
  description,
  cta,
  secondaryCta,
  layout = "split",
  highlights,
}: HeroProps) {
  const isCenter = layout === "center";

  return (
    <section className="bg-paper">
      <div
        className={
          isCenter
            ? "mx-auto flex max-w-[800px] flex-col items-center gap-6 px-5 py-16 text-center md:px-8 lg:px-10 lg:py-[120px]"
            : "mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-[120px]"
        }
      >
        <div className="flex flex-col gap-6">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="heading-1 text-ink">{title}</h1>
          {description && (
            <p className={`max-w-[520px] text-base leading-relaxed text-text-ink-secondary ${isCenter ? "mx-auto" : ""}`}>
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
          <div className="aspect-[560/460] w-full overflow-hidden rounded-2xl">
            <HeroIllustration />
          </div>
        )}
      </div>

      {highlights && highlights.length > 0 && (
        <div className="border-t border-border-on-paper">
          <div className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-6 px-5 py-6 md:px-8 lg:px-10">
            {highlights.map((item) => (
              <span key={item} className="text-sm font-medium text-text-ink-secondary">
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
