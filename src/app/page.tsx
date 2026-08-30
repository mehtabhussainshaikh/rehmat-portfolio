import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { StatBlock } from "@/components/ui/StatBlock";
import { NumberedFeatureCard } from "@/components/NumberedFeatureCard";
import { StartInquiryButton } from "@/components/StartInquiryButton";
import { services } from "@/data/services";

const highlights = ["Fixed or hourly", "Free audit sprint", "Two-week slices", "No lock-in"];

const engagementSteps = [
  {
    label: "Step 01",
    title: "Free audit sprint",
    description: "We map your codebase and goals before you spend a dollar on a build.",
  },
  {
    label: "Step 02",
    title: "Costed plan",
    description: "A clear scope, timeline, and price — no open-ended estimates.",
  },
  {
    label: "Step 03",
    title: "Ship in two-week slices",
    description: "You see working software every sprint, not just at the end.",
  },
  {
    label: "Step 04",
    title: "Fixed or hourly — your call",
    description: "Pick the engagement model that fits how you like to work.",
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
        title="We build and maintain software, for every piece of tech."
        description="From the first architecture decision to launch and beyond — a small, senior team that ships production-grade software without the agency overhead."
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
            View all services →
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
          You see working software before you see a big invoice.
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
              Any tech, chosen for your problem — not our comfort.
            </h2>
            <p className="mt-6 max-w-[440px] text-base leading-relaxed text-text-ink-secondary">
              We pick the stack that fits your team, budget, and timeline — not the one
              we happen to already know.
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
              No legacy to lean on. Just relentless craft.
            </h2>
            <p className="mt-6 max-w-[440px] text-base leading-relaxed text-text-on-dark-secondary">
              We&apos;re a young studio with a senior mindset. Every engineer here has
              shipped and operated production systems — no learning on your dime.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <StatBlock value="100%" label="Projects delivered on the agreed scope and timeline." tone="emerald" />
            <StatBlock value="24/7" label="Monitoring and support for everything we ship." tone="teal" />
          </div>
        </div>
      </SectionContainer>

      <section className="bg-emerald px-5 py-20 lg:px-10">
        <div className="mx-auto flex max-w-[800px] flex-col items-center gap-6 text-center">
          <h2 className="heading-2 text-ink">Let&apos;s build something worth shipping.</h2>
          <p className="text-base leading-relaxed text-ink/80">
            Tell us about your project and we&apos;ll get back to you within one
            business day.
          </p>
          <StartInquiryButton size="lg">
            Start an Inquiry <ArrowRight size={18} className="ml-2" />
          </StartInquiryButton>
        </div>
      </section>
    </>
  );
}
