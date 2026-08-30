export const siteConfig = {
  name: "Rehmat",
  shortName: "Rehmat",
  tagline: "Build Better Software",
  description:
    "Custom software solutions for startups and enterprises. We design, build, and ship scalable products.",
  url: "https://rehmat-portfolio-alpha.vercel.app",
  email: "hello@rehmat.dev",
  phone: "+1-555-010-2030",
  address: "Valsad, Gujarat, India",
  social: {
    linkedin: "https://linkedin.com/company/rehmat",
    github: "https://github.com/rehmat",
    twitter: "https://twitter.com/rehmat",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  footerLinks: {
    product: [
      { label: "Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Contact", href: "/contact" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
    ],
    resources: [
      { label: "Blog", href: "/blog" },
      { label: "Portfolio", href: "/portfolio" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
