export type IconName =
  | "Code"
  | "Smartphone"
  | "Cloud"
  | "Database"
  | "Shield"
  | "LineChart";

export interface Service {
  id: number;
  icon: IconName;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
}

export const services: Service[] = [
  {
    id: 1,
    icon: "Code",
    title: "Custom Software Development",
    description:
      "Design and build secure, maintainable software aligned with your workflows, customers, and growth strategy.",
    technologies: ["Python", "Node.js", "React", "PostgreSQL"],
    features: [
      "Requirement Analysis",
      "Architecture Design",
      "Development",
      "Testing",
      "Deployment",
    ],
  },
  {
    id: 2,
    icon: "Smartphone",
    title: "Web & Mobile Applications",
    description:
      "Deliver fast, accessible web and mobile experiences backed by reliable application architecture.",
    technologies: ["React", "React Native", "TypeScript", "Firebase"],
    features: [
      "UI/UX Design",
      "Cross-platform Development",
      "Real-time Features",
      "App Store Deployment",
    ],
  },
  {
    id: 3,
    icon: "Cloud",
    title: "Cloud & DevOps",
    description:
      "Modernize infrastructure, automate delivery, and improve the reliability and cost efficiency of production systems.",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
    features: [
      "Infrastructure as Code",
      "CI/CD Pipelines",
      "Monitoring & Alerting",
      "Cost Optimization",
    ],
  },
  {
    id: 4,
    icon: "Database",
    title: "Data Engineering",
    description:
      "Transform operational data into dependable pipelines, governed platforms, and decision-ready insights.",
    technologies: ["Python", "Airflow", "Spark", "Snowflake"],
    features: [
      "Pipeline Design",
      "ETL/ELT Automation",
      "Data Warehousing",
      "Reporting & BI",
    ],
  },
  {
    id: 5,
    icon: "Shield",
    title: "Security & Compliance",
    description:
      "Reduce technical risk with secure architecture, practical controls, and compliance-ready engineering practices.",
    technologies: ["OAuth2", "SOC 2", "GDPR", "OWASP"],
    features: [
      "Security Audits",
      "Penetration Testing",
      "Compliance Readiness",
      "Secure Architecture",
    ],
  },
  {
    id: 6,
    icon: "LineChart",
    title: "Product Strategy & Consulting",
    description:
      "Convert business goals into focused product roadmaps, sound architecture decisions, and achievable delivery plans.",
    technologies: ["Roadmapping", "MVP Design", "Tech Audits", "Scaling"],
    features: [
      "Discovery Workshops",
      "Technical Due Diligence",
      "MVP Definition",
      "Growth Planning",
    ],
  },
];
