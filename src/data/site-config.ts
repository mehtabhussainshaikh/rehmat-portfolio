export const siteConfig = {
  name: "Rehmat AI Tech",
  shortName: "Rehmat AI Tech",
  tagline: "Engineering Software That Lasts",
  description:
    "Rehmat AI Tech is a newly founded software company building secure, scalable digital products under the leadership of founder Mehtab Shaikh, who brings 3+ years of professional development experience.",
  url: "https://rehmat-portfolio-alpha.vercel.app",
  email: "rehmataiworks@gmail.com",
  phone: "7069464859",
  address: "Vapi, Gujarat, India",
  social: {
    instagram: "https://www.instagram.com/rehmataitech/",
    twitter: "https://x.com/rehmatai",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  footerLinks: {
    product: [
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
    company: [{ label: "About", href: "/about" }],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
