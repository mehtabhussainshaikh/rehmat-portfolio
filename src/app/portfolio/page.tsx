import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { portfolioItems } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Case studies from real client projects — e-commerce, fintech, healthcare, and inventory systems built for scale.",
};

export default function PortfolioPage() {
  return (
    <>
      <Hero
        eyebrow="Case Studies"
        title="Portfolio"
        description="A selection of products we've designed, built, and shipped to production."
        layout="center"
      />

      <SectionContainer background="paper">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <Link key={item.id} href={`/portfolio/${item.slug}`}>
              <CaseStudyCard
                image={item.image}
                title={item.title}
                description={item.description}
                technologies={item.technologies}
              />
            </Link>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
