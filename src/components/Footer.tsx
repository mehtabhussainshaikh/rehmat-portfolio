import Link from "next/link";
import { LinkedinIcon, GithubIcon, TwitterIcon } from "@/components/icons";
import { siteConfig } from "@/data/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-primary-border bg-primary-bg">
      <div className="max-w-[1200px] mx-auto px-5 py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-accent text-xl font-bold tracking-[0.5px] text-primary-text"
            >
              {siteConfig.shortName}
            </Link>
            <p className="mt-4 max-w-[320px] text-sm leading-relaxed text-primary-text-secondary">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={siteConfig.social.linkedin}
                aria-label="LinkedIn"
                className="text-primary-text-secondary transition-premium hover:text-primary-accent"
              >
                <LinkedinIcon width={20} height={20} />
              </a>
              <a
                href={siteConfig.social.github}
                aria-label="GitHub"
                className="text-primary-text-secondary transition-premium hover:text-primary-accent"
              >
                <GithubIcon width={20} height={20} />
              </a>
              <a
                href={siteConfig.social.twitter}
                aria-label="Twitter"
                className="text-primary-text-secondary transition-premium hover:text-primary-accent"
              >
                <TwitterIcon width={20} height={20} />
              </a>
            </div>
          </div>

          <FooterColumn title="Product" links={siteConfig.footerLinks.product} />
          <FooterColumn title="Company" links={siteConfig.footerLinks.company} />
          <FooterColumn title="Resources" links={siteConfig.footerLinks.resources} />
          <FooterColumn title="Legal" links={siteConfig.footerLinks.legal} />
        </div>

        <div className="mt-16 border-t border-primary-border pt-8 text-xs text-primary-text-secondary">
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
      <h4 className="text-sm font-semibold tracking-[0.5px] text-primary-text">
        {title}
      </h4>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-primary-text-secondary transition-premium hover:text-primary-accent"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
