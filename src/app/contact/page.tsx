import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { ContactForm } from "@/components/ContactForm";
import { LinkedinIcon, GithubIcon, TwitterIcon } from "@/components/icons";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch to discuss your project.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Let's Talk"
        subtitle="Contact Us"
        description="Tell us about your project. We typically respond within one business day."
        layout="center"
      />

      <SectionContainer>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <ContactForm />

          <div className="flex flex-col gap-8">
            <div>
              <h2 className="heading-3 text-primary-text">Contact Information</h2>
              <div className="mt-6 flex flex-col gap-5">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 text-primary-text-secondary transition-premium hover:text-primary-accent"
                >
                  <Mail size={20} className="text-primary-accent" />
                  {siteConfig.email}
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-4 text-primary-text-secondary transition-premium hover:text-primary-accent"
                >
                  <Phone size={20} className="text-primary-accent" />
                  {siteConfig.phone}
                </a>
                <div className="flex items-center gap-4 text-primary-text-secondary">
                  <MapPin size={20} className="text-primary-accent" />
                  {siteConfig.address}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold tracking-[0.5px] text-primary-text">
                Follow Us
              </h3>
              <div className="mt-4 flex gap-4">
                <a
                  href={siteConfig.social.linkedin}
                  aria-label="LinkedIn"
                  className="text-primary-text-secondary transition-premium hover:text-primary-accent"
                >
                  <LinkedinIcon width={22} height={22} />
                </a>
                <a
                  href={siteConfig.social.github}
                  aria-label="GitHub"
                  className="text-primary-text-secondary transition-premium hover:text-primary-accent"
                >
                  <GithubIcon width={22} height={22} />
                </a>
                <a
                  href={siteConfig.social.twitter}
                  aria-label="Twitter"
                  className="text-primary-text-secondary transition-premium hover:text-primary-accent"
                >
                  <TwitterIcon width={22} height={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
