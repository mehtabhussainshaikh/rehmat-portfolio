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
      "Build scalable, production-grade software tailored to your business needs.",
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
      "Create intuitive, responsive applications for web and mobile platforms.",
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
      "Design resilient cloud infrastructure and automate your delivery pipeline.",
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
      "Build reliable data pipelines and analytics platforms that scale with you.",
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
      "Protect your systems and data with security-first engineering practices.",
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
      "Turn ideas into roadmaps with technical strategy that matches your goals.",
    technologies: ["Roadmapping", "MVP Design", "Tech Audits", "Scaling"],
    features: [
      "Discovery Workshops",
      "Technical Due Diligence",
      "MVP Definition",
      "Growth Planning",
    ],
  },
];
