import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StatBlock } from "@/components/ui/StatBlock";
import { NumberedFeatureCard } from "@/components/NumberedFeatureCard";
import { StartInquiryButton } from "@/components/StartInquiryButton";
import { services } from "@/data/services";

const highlights = [
  "Founder with 3+ years of experience",
  "Founder-led engineering",
  "Two-week delivery cycles",
  "No long-term lock-in",
];

const engagementSteps = [
  {
    label: "Step 01",
    title: "Technical discovery",
    description: "We assess your product, codebase, risks, and priorities before recommending a build plan.",
  },
  {
    label: "Step 02",
    title: "Practical delivery plan",
    description: "You receive a clear scope, architecture direction, milestones, and commercial model.",
  },
  {
    label: "Step 03",
    title: "Deliver in focused cycles",
    description: "Working software is reviewed every two weeks, keeping progress visible and decisions timely.",
  },
  {
    label: "Step 04",
    title: "Improve and scale",
    description: "After launch, we support, monitor, and evolve the product as your business grows.",
  },
];

const techGroups = [
  { title: "Frontend", tags: ["React", "TypeScript", "Next.js"] },
  { title: "Backend", tags: ["Node.js", "Python", "Go"] },
  { title: "Cloud & DevOps", tags: ["AWS", "Docker", "Kubernetes"] },
  { title: "Data & AI", tags: ["PostgreSQL", "Snowflake", "LLM APIs"] },
];

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Software Delivery & Services"
        title="Software engineered for growth, reliability, and real-world use."
        description="Rehmat AI Tech is a newly founded software company led by founder Mehtab Shaikh. We design, build, and support dependable digital products—from the first architecture decision through long-term operation."
        cta={{ label: "Get Started", href: "/contact" }}
        secondaryCta={{ label: "Our Approach", href: "/about" }}
        highlights={highlights}
      />

      <SectionContainer background="ink">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow tone="on-dark">Who We Are</Eyebrow>
          </div>
          <Link href="/services" className="text-sm font-semibold text-emerald hover:underline">
            Explore our capabilities →
          </Link>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <NumberedFeatureCard
              key={service.id}
              index={index}
              title={service.title}
              description={service.description}
              items={service.features.slice(0, 3)}
            />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer background="paper">
        <Eyebrow>Our Engagement Model</Eyebrow>
        <h2 className="heading-2 mt-4 max-w-[700px] text-ink">
          A transparent delivery model built around working software.
        </h2>
        <div className="mt-14 flex flex-col divide-y divide-border-on-paper md:grid md:grid-cols-4 md:divide-x md:divide-y-0">
          {engagementSteps.map((step) => (
            <div
              key={step.title}
              className="p-7 max-md:first:pt-0 max-md:last:pb-0 md:first:pl-0 md:last:pr-0"
            >
              <span className="text-xs font-semibold uppercase tracking-[2px] text-emerald-2">
                {step.label}
              </span>
              <h3 className="mt-3 text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-ink-secondary">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer background="paper-2">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Expertise</Eyebrow>
            <h2 className="heading-2 mt-4 text-ink">
              The right technology for your product, team, and growth plan.
            </h2>
            <p className="mt-6 max-w-[440px] text-base leading-relaxed text-text-ink-secondary">
              We choose proven technologies around business requirements, operating
              constraints, security, and maintainability—not trends or convenience.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {techGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-border-on-paper bg-card-on-paper p-6"
              >
                <h3 className="text-sm font-bold text-emerald-2">{group.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-paper-2 px-3 py-1 text-xs font-medium text-text-ink-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer background="ink">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow tone="on-dark">Why Us</Eyebrow>
            <h2 className="heading-2 mt-4 text-text-on-dark">
              Hands-on engineering. Accountable delivery. Lasting quality.
            </h2>
            <p className="mt-6 max-w-[440px] text-base leading-relaxed text-text-on-dark-secondary">
              Mehtab Shaikh, founder of Rehmat AI Tech, brings more than 3 years of
              professional software-development experience across product engineering,
              cloud platforms, data systems, and production support.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <StatBlock value="3+" label="Years of professional software-development experience from founder Mehtab Shaikh." tone="emerald" />
            <StatBlock value="24/7" label="Production monitoring and support options for critical systems." tone="teal" />
          </div>
        </div>
      </SectionContainer>

      <section className="bg-emerald px-5 py-20 lg:px-10">
        <div className="mx-auto flex max-w-[800px] flex-col items-center gap-6 text-center">
          <h2 className="heading-2 text-ink">Build your next product with confidence.</h2>
          <p className="text-base leading-relaxed text-ink/80">
            Share your goals, technical challenges, or existing product roadmap. We&apos;ll
            respond with practical next steps within one business day.
          </p>
          <StartInquiryButton size="lg">
            Start an Inquiry <ArrowRight size={18} className="ml-2" />
          </StartInquiryButton>
        </div>
      </section>
    </>
  );
}
