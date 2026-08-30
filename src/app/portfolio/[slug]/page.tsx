import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Badge } from "@/components/ui/Badge";
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
      <div className="relative aspect-[21/9] w-full overflow-hidden bg-primary-bg-2">
        <Image src={item.image} alt={item.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/40 to-transparent" />
      </div>

      <SectionContainer padding="small">
        <h1 className="heading-1 max-w-[900px] text-primary-text">{item.title}</h1>
        <p className="mt-6 max-w-[700px] text-lg leading-relaxed text-primary-text-secondary">
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

      <SectionContainer background="secondary">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="heading-3 text-primary-text">The Problem</h2>
            <p className="mt-4 text-base leading-relaxed text-primary-text-secondary">
              {item.problem}
            </p>
          </div>
          <div>
            <h2 className="heading-3 text-primary-text">The Solution</h2>
            <p className="mt-4 text-base leading-relaxed text-primary-text-secondary">
              {item.solution}
            </p>
          </div>
        </div>
      </SectionContainer>

      {item.challenges && (
        <SectionContainer>
          <h2 className="heading-3 text-primary-text">Challenges</h2>
          <p className="mt-4 max-w-[800px] text-base leading-relaxed text-primary-text-secondary">
            {item.challenges}
          </p>
        </SectionContainer>
      )}

      <SectionContainer background="secondary">
        <h2 className="heading-3 text-primary-text">Results</h2>
        <p className="mt-4 max-w-[800px] text-base leading-relaxed text-primary-text-secondary">
          {item.results}
        </p>
      </SectionContainer>

      <section className="bg-primary-bg-2-hover px-5 py-20 lg:px-10">
        <div className="mx-auto flex max-w-[800px] flex-col items-center gap-6 text-center">
          <h2 className="heading-2 text-primary-text">Ready to start your project?</h2>
          <Link href="/contact">
            <PremiumButton size="lg">Get Started</PremiumButton>
          </Link>
        </div>
      </section>

      <SectionContainer padding="small">
        <div className="flex flex-col justify-between gap-6 sm:flex-row">
          <Link
            href={`/portfolio/${prev.slug}`}
            className="flex items-center gap-2 text-sm font-semibold text-primary-text-secondary transition-premium hover:text-primary-accent"
          >
            <ArrowLeft size={16} /> {prev.title}
          </Link>
          <Link
            href={`/portfolio/${next.slug}`}
            className="flex items-center gap-2 text-right text-sm font-semibold text-primary-text-secondary transition-premium hover:text-primary-accent"
          >
            {next.title} <ArrowRight size={16} />
          </Link>
        </div>
      </SectionContainer>
    </>
  );
}
