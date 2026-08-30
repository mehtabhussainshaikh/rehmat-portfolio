import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Compass, Users, Sparkles, Award, Clock } from "lucide-react";
import { PageTitle } from "@/components/PageTitle";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the people behind Rehmat AI Tech, a newly founded software company led by founder Mehtab Shaikh, who brings 3+ years of professional development experience.",
};

const values = [
  {
    icon: Heart,
    title: "Craftsmanship",
    description: "We engineer dependable systems with care for performance, security, and maintainability.",
  },
  {
    icon: Compass,
    title: "Honesty",
    description: "We communicate trade-offs clearly and recommend what serves the product best.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work alongside your team, share ownership, and stay accountable for outcomes.",
  },
];

const reasons = [
  {
    icon: Sparkles,
    title: "Founder-led engineering",
    description: "Every project receives direct technical involvement, clear ownership, and hands-on production experience.",
  },
  {
    icon: Award,
    title: "Production-grade quality",
    description: "Architecture, testing, security, and observability are treated as core delivery work.",
  },
  {
    icon: Clock,
    title: "Predictable delivery",
    description: "Clear milestones, frequent demonstrations, and proactive communication keep delivery visible.",
  },
  {
    icon: Compass,
    title: "Strategic thinking",
    description: "We connect technical decisions to customer value, operating cost, and long-term growth.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageTitle title="About Us" />

      <SectionContainer background="paper">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>How We Started</Eyebrow>
            <h2 className="heading-2 mt-4 text-ink">Our Story</h2>
            <p className="mt-6 text-base leading-relaxed text-text-ink-secondary">
              Rehmat AI Tech is a newly founded software company created to give growing
              businesses direct access to practical, dependable engineering support.
              Mehtab Shaikh founded the company after more than 3 years of professional
              software-development experience, with a focus on turning complex ideas and
              fragile systems into secure, maintainable products ready for real users.
            </p>
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/technology-consulting-team.webp"
              alt="Technology consultants reviewing a software delivery roadmap"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </SectionContainer>

      <SectionContainer background="ink">
        <Eyebrow tone="on-dark">Our Mission</Eyebrow>
        <h2 className="heading-2 mt-4 text-center text-text-on-dark">
          To turn ambitious ideas into dependable software that creates lasting business value.
        </h2>
        <p className="mx-auto mt-6 max-w-[700px] text-center text-base leading-relaxed text-text-on-dark-secondary">
          We combine product thinking, disciplined engineering, and operational ownership
          to deliver systems that remain reliable well beyond launch.
        </p>
      </SectionContainer>

      <SectionContainer background="paper">
        <h2 className="heading-2 text-center text-ink">Core Values</h2>
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(16,185,129,0.15)]">
                <value.icon size={28} className="text-emerald-2" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-ink">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-ink-secondary">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer background="paper-2">
        <h2 className="heading-2 text-center text-ink">Our Team</h2>
        <div className="mx-auto mt-14 grid max-w-[600px] grid-cols-1 gap-10 sm:grid-cols-2">
          {teamMembers.map((member) => (
            <div key={member.id} className="group text-center">
              <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{member.name}</h3>
              <p className="text-sm font-medium text-emerald-2">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-text-ink-secondary">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer background="paper">
        <h2 className="heading-2 text-center text-ink">Why Choose Us</h2>
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-5">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[rgba(13,148,136,0.12)]">
                <reason.icon size={24} className="text-teal" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-ink">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-ink-secondary">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
