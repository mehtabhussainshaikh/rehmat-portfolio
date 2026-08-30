export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  content: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "nextjs-performance-optimization",
    title: "How to Optimize Next.js Applications for Lightning-Fast Performance",
    excerpt:
      "Learn practical techniques to improve your Next.js app performance, from image optimization to code splitting.",
    date: "2024-01-15",
    author: "Rehmat",
    category: "Technical",
    image: "/images/blog/nextjs-performance.svg",
    content: `# How to Optimize Next.js Applications

## Introduction
Next.js is a powerful framework for building fast, SEO-friendly React applications, but performance still needs deliberate attention as an app grows.

## 1. Image Optimization
Always use the Next.js Image component so images are automatically resized and served in modern formats.

## 2. Code Splitting
Next.js automatically splits code per route, but you can go further with dynamic imports for heavy client-only components.

## 3. Static Generation
Prefer static generation wherever content doesn't change per request — it removes server round-trips entirely.
`,
    featured: true,
  },
  {
    id: 2,
    slug: "choosing-a-tech-stack",
    title: "How We Choose a Tech Stack for a New Client Project",
    excerpt:
      "A practical framework for picking technologies that fit the team, the timeline, and the product's future.",
    date: "2024-02-08",
    author: "Rehmat",
    category: "Strategy",
    image: "/images/blog/tech-stack.svg",
    content: `# Choosing a Tech Stack

## Start with constraints
Team size, timeline, and hiring plans matter more than which framework is trending.

## Optimize for boring where it counts
Core infrastructure should be boring and reliable; save novelty for the parts that differentiate the product.
`,
    featured: true,
  },
  {
    id: 3,
    slug: "scaling-postgres",
    title: "Scaling PostgreSQL Before You Need to Shard",
    excerpt:
      "Most teams reach for sharding far earlier than necessary. Here's what to try first.",
    date: "2024-03-22",
    author: "Rehmat",
    category: "Technical",
    image: "/images/blog/postgres.svg",
    content: `# Scaling PostgreSQL

## Indexing first
Most slow queries are solved with the right index, not a new database.

## Read replicas
Offloading read traffic buys significant headroom before any structural change is needed.
`,
    featured: true,
  },
];
