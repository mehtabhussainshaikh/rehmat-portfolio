import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PremiumButton } from "@/components/ui/Button";
import { portfolioItems } from "@/data/portfolio";

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = portfolioItems.find((p) => p.slug === slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.description,
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = portfolioItems.findIndex((p) => p.slug === slug);
  const item = portfolioItems[index];
  if (!item) notFound();

  const prev = portfolioItems[(index - 1 + portfolioItems.length) % portfolioItems.length];
  const next = portfolioItems[(index + 1) % portfolioItems.length];

  return (
    <>
      <div className="relative aspect-[21/9] w-full overflow-hidden bg-navy-2">
        <Image src={item.image} alt={item.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
      </div>

      <SectionContainer background="paper" padding="small">
        <Eyebrow>Case Study</Eyebrow>
        <h1 className="heading-1 mt-4 max-w-[900px] text-navy">{item.title}</h1>
        <p className="mt-6 max-w-[700px] text-lg leading-relaxed text-text-navy-secondary">
          {item.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <Badge key={tech} variant="accent">
              {tech}
            </Badge>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer background="paper-2">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="heading-3 text-navy">The Problem</h2>
            <p className="mt-4 text-base leading-relaxed text-text-navy-secondary">
              {item.problem}
            </p>
          </div>
          <div>
            <h2 className="heading-3 text-navy">The Solution</h2>
            <p className="mt-4 text-base leading-relaxed text-text-navy-secondary">
              {item.solution}
            </p>
          </div>
        </div>
      </SectionContainer>

      {item.challenges && (
        <SectionContainer background="paper">
          <h2 className="heading-3 text-navy">Challenges</h2>
          <p className="mt-4 max-w-[800px] text-base leading-relaxed text-text-navy-secondary">
            {item.challenges}
          </p>
        </SectionContainer>
      )}

      <SectionContainer background="navy">
        <h2 className="heading-3 text-text-cream">Results</h2>
        <p className="mt-4 max-w-[800px] text-base leading-relaxed text-text-cream-secondary">
          {item.results}
        </p>
      </SectionContainer>

      <section className="bg-amber px-5 py-20 lg:px-10">
        <div className="mx-auto flex max-w-[800px] flex-col items-center gap-6 text-center">
          <h2 className="heading-2 text-navy">Ready to start your project?</h2>
          <Link href="/contact">
            <PremiumButton size="lg">Get Started</PremiumButton>
          </Link>
        </div>
      </section>

      <SectionContainer background="paper" padding="small">
        <div className="flex flex-col justify-between gap-6 sm:flex-row">
          <Link
            href={`/portfolio/${prev.slug}`}
            className="flex items-center gap-2 text-sm font-semibold text-text-navy-secondary transition-premium hover:text-navy"
          >
            <ArrowLeft size={16} /> {prev.title}
          </Link>
          <Link
            href={`/portfolio/${next.slug}`}
            className="flex items-center gap-2 text-right text-sm font-semibold text-text-navy-secondary transition-premium hover:text-navy"
          >
            {next.title} <ArrowRight size={16} />
          </Link>
        </div>
      </SectionContainer>
    </>
  );
}
