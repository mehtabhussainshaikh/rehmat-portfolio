import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageTitle } from "@/components/PageTitle";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { InquiryForm } from "@/components/InquiryForm";
import { InstagramIcon, FacebookIcon, TwitterIcon } from "@/components/icons";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch to discuss your project.",
};

export default function ContactPage() {
  return (
    <>
      <PageTitle title="Let's Talk" />

      <SectionContainer background="paper">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <InquiryForm submitLabel="Send Inquiry" />

          <div className="flex flex-col gap-8">
            <div>
              <h2 className="heading-3 text-ink">Contact Information</h2>
              <div className="mt-6 flex flex-col gap-5">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 text-text-ink-secondary transition-premium hover:text-ink"
                >
                  <Mail size={20} className="text-emerald-2" />
                  {siteConfig.email}
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-4 text-text-ink-secondary transition-premium hover:text-ink"
                >
                  <Phone size={20} className="text-emerald-2" />
                  {siteConfig.phone}
                </a>
                <div className="flex items-center gap-4 text-text-ink-secondary">
                  <MapPin size={20} className="text-emerald-2" />
                  {siteConfig.address}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold tracking-[0.5px] text-ink">
                Follow Us
              </h3>
              <div className="mt-4 flex gap-4">
                <a
                  href={siteConfig.social.instagram}
                  aria-label="Instagram"
                  className="text-text-ink-secondary transition-premium hover:text-ink"
                >
                  <InstagramIcon width={22} height={22} />
                </a>
                <a
                  href={siteConfig.social.facebook}
                  aria-label="Facebook"
                  className="text-text-ink-secondary transition-premium hover:text-ink"
                >
                  <FacebookIcon width={22} height={22} />
                </a>
                <a
                  href={siteConfig.social.twitter}
                  aria-label="Twitter"
                  className="text-text-ink-secondary transition-premium hover:text-ink"
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
