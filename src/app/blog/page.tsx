import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles on software architecture, performance, and product strategy.",
};

export default function BlogPage() {
  return (
    <>
      <Hero
        title="Blog"
        subtitle="Insights"
        description="Notes from building and shipping production software."
        layout="center"
      />

      <SectionContainer>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-[rgba(232,180,79,0.1)] bg-primary-bg-2 transition-premium hover:-translate-y-2 hover:border-[rgba(232,180,79,0.3)] hover:shadow-[0_20px_40px_rgba(232,180,79,0.15)]"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-premium group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <Badge variant="accent" size="sm" className="w-fit">
                  {post.category}
                </Badge>
                <h3 className="text-xl font-bold text-primary-text">{post.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-primary-text-secondary">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-primary-text-secondary">
                  <span>{formatDate(post.date)}</span>
                  <span className="font-semibold text-primary-accent">Read More</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
