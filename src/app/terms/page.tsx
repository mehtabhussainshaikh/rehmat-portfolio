import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.name}.`,
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-[900px] px-5 py-16 md:px-8 lg:px-10 lg:py-[120px]">
      <h1 className="heading-1 text-ink">Terms of Service</h1>
      <p className="mt-4 text-sm text-text-ink-secondary">Last updated: January 2024</p>

      <div className="mt-10 flex flex-col gap-8">
        <section>
          <h2 className="heading-3 text-ink">1. Acceptance of Terms</h2>
          <p className="mt-4 text-base leading-relaxed text-text-ink-secondary">
            By accessing this website, you agree to be bound by these Terms of Service.
            If you do not agree with any part of these terms, please do not use this
            site.
          </p>
        </section>

        <section>
          <h2 className="heading-3 text-ink">2. Use of Content</h2>
          <p className="mt-4 text-base leading-relaxed text-text-ink-secondary">
            All content on this website, including text, graphics, and logos, is the
            property of {siteConfig.name} unless otherwise noted, and may not be
            reproduced without permission.
          </p>
        </section>

        <section>
          <h2 className="heading-3 text-ink">3. Services</h2>
          <p className="mt-4 text-base leading-relaxed text-text-ink-secondary">
            Descriptions of services on this site are for informational purposes only
            and do not constitute a binding offer. Project engagements are governed by
            a separate signed agreement.
          </p>
        </section>

        <section>
          <h2 className="heading-3 text-ink">4. Limitation of Liability</h2>
          <p className="mt-4 text-base leading-relaxed text-text-ink-secondary">
            {siteConfig.name} is not liable for any indirect, incidental, or
            consequential damages arising from the use of this website.
          </p>
        </section>

        <section>
          <h2 className="heading-3 text-ink">5. Changes to Terms</h2>
          <p className="mt-4 text-base leading-relaxed text-text-ink-secondary">
            We may update these terms from time to time. Continued use of the site
            after changes constitutes acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="heading-3 text-ink">6. Contact Us</h2>
          <p className="mt-4 text-base leading-relaxed text-text-ink-secondary">
            Questions about these terms can be directed to {siteConfig.email}.
          </p>
        </section>
      </div>
    </div>
  );
}
