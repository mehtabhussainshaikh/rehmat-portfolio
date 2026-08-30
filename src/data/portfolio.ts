export interface PortfolioItem {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  problem: string;
  solution: string;
  results: string;
  challenges?: string;
  link?: string;
  featured: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    slug: "ecommerce-platform",
    title: "E-commerce Platform Built with FastAPI & React",
    description:
      "Scalable multi-vendor marketplace with real-time inventory management",
    image: "/images/portfolio/ecommerce.svg",
    technologies: ["FastAPI", "PostgreSQL", "React", "Redis", "AWS"],
    problem:
      "Traditional e-commerce platforms lacked real-time capabilities and struggled with scalability.",
    solution:
      "Built from scratch with a modern tech stack emphasizing performance, scalability, and real-time features.",
    results:
      "Reduced page load time by 70%, 10x faster checkout, support for 100k+ concurrent users.",
    challenges:
      "Coordinating inventory consistency across vendors during flash sales required a custom event-driven locking strategy.",
    link: "#",
    featured: true,
  },
  {
    id: 2,
    slug: "inventory-system",
    title: "Real-time Inventory Management System",
    description:
      "Dashboard for tracking stock across multiple warehouses",
    image: "/images/portfolio/inventory.svg",
    technologies: ["Node.js", "MongoDB", "React", "WebSocket"],
    problem:
      "Manual inventory tracking was causing stockouts and overstock situations.",
    solution:
      "Automated real-time system with instant notifications and demand predictions.",
    results:
      "Reduced stockouts by 85%, inventory accuracy improved to 99.8%.",
    challenges:
      "Syncing warehouse-floor scanners with the dashboard in near real time over unreliable networks.",
    featured: true,
  },
  {
    id: 3,
    slug: "fintech-dashboard",
    title: "Analytics Dashboard for a Fintech Startup",
    description:
      "Unified reporting dashboard for transactions, risk, and compliance teams",
    image: "/images/portfolio/fintech.svg",
    technologies: ["Next.js", "TypeScript", "GraphQL", "Snowflake"],
    problem:
      "Teams relied on disconnected spreadsheets to track transaction volume and risk signals.",
    solution:
      "Delivered a single dashboard with role-based views and scheduled exports for compliance.",
    results:
      "Cut manual reporting time by 90% and shortened month-end close by 3 days.",
    challenges:
      "Modeling flexible role-based access without slowing down query performance on large datasets.",
    featured: true,
  },
  {
    id: 4,
    slug: "healthcare-scheduling",
    title: "Scheduling Platform for a Healthcare Network",
    description:
      "Multi-clinic appointment scheduling with automated reminders",
    image: "/images/portfolio/healthcare.svg",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Twilio"],
    problem:
      "Clinics were losing revenue to no-shows and double-booked appointment slots.",
    solution:
      "Built a scheduling engine with conflict detection and automated SMS/email reminders.",
    results: "No-show rate dropped by 42% within the first quarter.",
    featured: false,
  },
];
