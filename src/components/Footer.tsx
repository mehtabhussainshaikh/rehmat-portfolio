import Link from "next/link";
import { InstagramIcon, TwitterIcon } from "@/components/icons";
import { siteConfig } from "@/data/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-on-ink bg-ink">
      <div className="max-w-[1200px] mx-auto px-5 py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald" />
              <span
                className="text-xl font-bold tracking-tight text-text-on-dark"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {siteConfig.shortName}
              </span>
            </Link>
            <p className="mt-4 max-w-[320px] text-sm leading-relaxed text-text-on-dark-secondary">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-text-on-dark-secondary transition-premium hover:text-emerald"
              >
                <InstagramIcon width={20} height={20} />
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-text-on-dark-secondary transition-premium hover:text-emerald"
              >
                <TwitterIcon width={20} height={20} />
              </a>
            </div>
          </div>

          <FooterColumn title="Product" links={siteConfig.footerLinks.product} />
          <FooterColumn title="Company" links={siteConfig.footerLinks.company} />
          <FooterColumn title="Legal" links={siteConfig.footerLinks.legal} />
        </div>

        <div className="mt-16 border-t border-border-on-ink pt-8 text-xs text-text-on-dark-secondary">
          © {year} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold tracking-[0.5px] text-text-on-dark">{title}</h4>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-text-on-dark-secondary transition-premium hover:text-emerald"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
