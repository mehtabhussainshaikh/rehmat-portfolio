import Link from "next/link";
import {
  Target,
  Zap,
  ShieldCheck,
  Quote,
  ArrowRight,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { ServiceCard } from "@/components/ServiceCard";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { PremiumButton } from "@/components/ui/Button";
import { services } from "@/data/services";
import { portfolioItems } from "@/data/portfolio";

const problems = [
  {
    icon: Target,
    title: "Unclear Technical Direction",
    description:
      "We turn ambiguous product ideas into a concrete architecture and delivery plan.",
  },
  {
    icon: Zap,
    title: "Slow, Fragile Delivery",
    description:
      "We build with automated testing and CI/CD so releases stay fast and predictable.",
  },
  {
    icon: ShieldCheck,
    title: "Scaling & Reliability Risk",
    description:
      "We design systems that stay reliable under real production load, not just demos.",
  },
];

const techStack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "AWS",
  "Docker",
  "GraphQL",
  "Kubernetes",
];

const process = [
  {
    number: "01",
    title: "Discover",
    description: "We learn your business, users, and constraints before writing any code.",
  },
  {
    number: "02",
    title: "Design",
    description: "We map the architecture and UX so the build phase has no surprises.",
  },
  {
    number: "03",
    title: "Build",
    description: "We ship in short, reviewable increments with continuous feedback.",
  },
  {
    number: "04",
    title: "Support",
    description: "We stay engaged post-launch to monitor, iterate, and scale with you.",
  },
];

const testimonials = [
  {
    quote:
      "They rebuilt our checkout flow in six weeks and it hasn't gone down once since launch.",
    author: "Head of Engineering, E-commerce Client",
  },
  {
    quote:
      "The clearest technical communication we've had from any partner we've worked with.",
    author: "Founder, Fintech Startup",
  },
];

export default function Home() {
  const featuredPortfolio = portfolioItems.filter((item) => item.featured).slice(0, 3);

  return (
    <>
      <Hero
        title="Build Better Software"
        subtitle="Premium Solutions"
        description="We create scalable, production-grade software for startups and enterprises — from first architecture decision to launch and beyond."
        cta={{ label: "Get Started", href: "/contact" }}
        secondaryCta={{ label: "View Our Work", href: "/portfolio" }}
      />

      <SectionContainer>
        <div className="flex flex-col gap-4 text-center">
          <h2 className="heading-2 mx-auto max-w-[700px] text-primary-text">
            Problems We Solve
          </h2>
          <p className="mx-auto max-w-[600px] text-base leading-relaxed text-primary-text-secondary">
            Software partners who ship demos are common. We focus on the problems that
            keep products from surviving contact with real users.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-xl border border-[rgba(232,180,79,0.1)] bg-primary-bg-2 p-8"
            >
              <problem.icon size={40} className="text-primary-accent" />
              <h3 className="mt-6 text-xl font-bold text-primary-text">
                {problem.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-text-secondary">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer background="secondary">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="heading-2 mx-auto max-w-[700px] text-primary-text">
            Services Overview
          </h2>
          <p className="mx-auto max-w-[600px] text-base leading-relaxed text-primary-text-secondary">
            End-to-end software delivery, from strategy to production.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              technologies={service.technologies}
            />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer>
        <h2 className="heading-2 text-center text-primary-text">Our Tech Stack</h2>
        <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
          {techStack.map((tech) => (
            <div
              key={tech}
              className="flex items-center justify-center rounded-lg border border-primary-border bg-primary-bg-2 px-4 py-6 text-center text-sm font-semibold tracking-[0.5px] text-primary-text-secondary transition-premium hover:border-primary-accent hover:text-primary-accent"
            >
              {tech}
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer background="secondary">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="heading-2 mx-auto max-w-[700px] text-primary-text">
            Featured Portfolio
          </h2>
          <p className="mx-auto max-w-[600px] text-base leading-relaxed text-primary-text-secondary">
            A few of the products we&apos;ve helped ship.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {featuredPortfolio.map((item) => (
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

      <SectionContainer>
        <h2 className="heading-2 text-center text-primary-text">How We Work</h2>
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-4">
          {process.map((step) => (
            <div key={step.number} className="flex flex-col gap-4">
              <span className="font-accent text-4xl font-bold text-primary-accent">
                {step.number}
              </span>
              <h3 className="text-xl font-bold text-primary-text">{step.title}</h3>
              <p className="text-sm leading-relaxed text-primary-text-secondary">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer background="secondary">
        <h2 className="heading-2 text-center text-primary-text">Building Our Portfolio</h2>
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="rounded-xl border border-[rgba(232,180,79,0.1)] bg-primary-bg-2 p-10"
            >
              <Quote size={32} className="text-primary-accent" />
              <p className="mt-6 text-lg leading-relaxed text-primary-text">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-6 text-sm font-semibold text-primary-text-secondary">
                {t.author}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      <section className="bg-primary-bg-2-hover px-5 py-20 lg:px-10">
        <div className="mx-auto flex max-w-[800px] flex-col items-center gap-6 text-center">
          <h2 className="heading-2 text-primary-text">Ready to build something great?</h2>
          <p className="text-base leading-relaxed text-primary-text-secondary">
            Tell us about your project and we&apos;ll get back to you within one
            business day.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <PremiumButton size="lg">
                Get Started <ArrowRight size={18} className="ml-2" />
              </PremiumButton>
            </Link>
            <Link href="/services">
              <PremiumButton variant="secondary" size="lg">
                Explore Services
              </PremiumButton>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
