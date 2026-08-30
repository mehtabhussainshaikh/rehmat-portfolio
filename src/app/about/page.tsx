import type { Metadata } from "next";
import Image from "next/image";
import { Heart, Compass, Users, Sparkles, Award, Clock } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionContainer } from "@/components/ui/SectionContainer";
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
        title="About Us"
        subtitle="Our Story"
        description="We're a small team of engineers who care more about shipping working software than chasing trends."
        layout="center"
      />

      <SectionContainer>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="heading-2 text-primary-text">Our Story</h2>
            <p className="mt-6 text-base leading-relaxed text-primary-text-secondary">
              We started building custom software for startups after seeing too many
              projects stall out on unclear requirements and fragile codebases. Our
              focus has stayed the same since day one: build things that work, explain
              our decisions clearly, and treat every client&apos;s product like our own.
            </p>
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary-bg-2 to-primary-bg">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(232,180,79,0.25),transparent_60%)]" />
          </div>
        </div>
      </SectionContainer>

      <SectionContainer background="secondary">
        <h2 className="heading-2 text-center text-primary-text">Our Mission</h2>
        <p className="mx-auto mt-6 max-w-[700px] text-center text-base leading-relaxed text-primary-text-secondary">
          To help ambitious teams ship software that actually holds up in production —
          reliable, maintainable, and built to scale with the business.
        </p>
      </SectionContainer>

      <SectionContainer>
        <h2 className="heading-2 text-center text-primary-text">Core Values</h2>
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <value.icon size={40} className="mx-auto text-primary-accent" />
              <h3 className="mt-6 text-xl font-bold text-primary-text">{value.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-text-secondary">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer background="secondary">
        <h2 className="heading-2 text-center text-primary-text">Our Team</h2>
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.id} className="group text-center">
              <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-full">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-primary-text">{member.name}</h3>
              <p className="text-sm font-medium text-primary-accent">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-primary-text-secondary">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer>
        <h2 className="heading-2 text-center text-primary-text">Why Choose Us</h2>
        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason.title} className="flex gap-5">
              <reason.icon size={32} className="shrink-0 text-primary-accent" />
              <div>
                <h3 className="text-lg font-bold text-primary-text">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-text-secondary">
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
