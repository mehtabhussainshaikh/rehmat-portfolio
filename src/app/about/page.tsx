import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Compass, Users, Sparkles, Award, Clock } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeroIllustration } from "@/components/HeroIllustration";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "About",
  description: "Our story, mission, values, and the team behind the work.",
};

const values = [
  {
    icon: Heart,
    title: "Craftsmanship",
    description: "We care about the details users never see but always feel.",
  },
  {
    icon: Compass,
    title: "Honesty",
    description: "We tell clients what's true, not just what's easy to hear.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work as an extension of your team, not an outside vendor.",
  },
];

const reasons = [
  {
    icon: Sparkles,
    title: "Senior engineers only",
    description: "Every project is built by experienced engineers, not junior hires.",
  },
  {
    icon: Award,
    title: "Production-grade quality",
    description: "We ship code we'd be comfortable running our own business on.",
  },
  {
    icon: Clock,
    title: "Predictable delivery",
    description: "Clear milestones and weekly updates, no surprises at the deadline.",
  },
  {
    icon: Compass,
    title: "Strategic thinking",
    description: "We push back on scope that doesn't serve the actual goal.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="Our Story"
        title="About Us"
        description="We're a small team of engineers who care more about shipping working software than chasing trends."
        layout="center"
      />

      <SectionContainer background="paper">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>How We Started</Eyebrow>
            <h2 className="heading-2 mt-4 text-navy">Our Story</h2>
            <p className="mt-6 text-base leading-relaxed text-text-navy-secondary">
              We started building custom software for startups after seeing too many
              projects stall out on unclear requirements and fragile codebases. Our
              focus has stayed the same since day one: build things that work, explain
              our decisions clearly, and treat every client&apos;s product like our own.
            </p>
          </div>
          <div className="aspect-square w-full overflow-hidden rounded-2xl">
            <HeroIllustration />
          </div>
        </div>
      </SectionContainer>

      <SectionContainer background="navy">
        <Eyebrow tone="cream">Our Mission</Eyebrow>
        <h2 className="heading-2 mt-4 text-center text-text-cream">
          To help ambitious teams ship software that holds up in production.
        </h2>
        <p className="mx-auto mt-6 max-w-[700px] text-center text-base leading-relaxed text-text-cream-secondary">
          Reliable, maintainable, and built to scale with the business — not just the
          demo.
        </p>
      </SectionContainer>

      <SectionContainer background="paper">
        <h2 className="heading-2 text-center text-navy">Core Values</h2>
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(232,165,72,0.15)]">
                <value.icon size={28} className="text-amber-2" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-navy">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-navy-secondary">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer background="paper-2">
        <h2 className="heading-2 text-center text-navy">Our Team</h2>
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.id} className="group text-center">
              <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-full">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy">{member.name}</h3>
              <p className="text-sm font-medium text-amber-2">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-text-navy-secondary">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer background="paper">
        <h2 className="heading-2 text-center text-navy">Why Choose Us</h2>
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-5">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[rgba(47,127,118,0.12)]">
                <reason.icon size={24} className="text-teal" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-navy">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-navy-secondary">
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
