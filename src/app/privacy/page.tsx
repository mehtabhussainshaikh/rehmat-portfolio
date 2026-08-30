import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}.`,
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-[900px] px-5 py-16 md:px-8 lg:px-10 lg:py-[120px]">
      <h1 className="heading-1 text-primary-text">Privacy Policy</h1>
      <p className="mt-4 text-sm text-primary-text-secondary">Last updated: January 2024</p>

      <div className="mt-10 flex flex-col gap-8">
        <section>
          <h2 className="heading-3 text-primary-text">1. Information We Collect</h2>
          <p className="mt-4 text-base leading-relaxed text-primary-text-secondary">
            When you contact us through this website, we collect the information you
            voluntarily provide, such as your name, email address, company, and project
            details. We do not use tracking cookies or third-party analytics beyond what
            is required to operate the site.
          </p>
        </section>

        <section>
          <h2 className="heading-3 text-primary-text">2. How We Use Information</h2>
          <p className="mt-4 text-base leading-relaxed text-primary-text-secondary">
            Information submitted through our contact form is used solely to respond to
            your inquiry. We do not sell or share your information with third parties
            for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="heading-3 text-primary-text">3. Data Retention</h2>
          <p className="mt-4 text-base leading-relaxed text-primary-text-secondary">
            We retain inquiry information only as long as necessary to respond to your
            request and maintain business records, after which it is deleted.
          </p>
        </section>

        <section>
          <h2 className="heading-3 text-primary-text">4. Your Rights</h2>
          <p className="mt-4 text-base leading-relaxed text-primary-text-secondary">
            You may request access to, correction of, or deletion of your personal
            information at any time by contacting us at {siteConfig.email}.
          </p>
        </section>

        <section>
          <h2 className="heading-3 text-primary-text">5. Contact Us</h2>
          <p className="mt-4 text-base leading-relaxed text-primary-text-secondary">
            Questions about this policy can be directed to {siteConfig.email}.
          </p>
        </section>
      </div>
    </div>
  );
}
