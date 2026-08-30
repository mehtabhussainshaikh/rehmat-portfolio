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
        eyebrow="Insights"
        title="Blog"
        description="Notes from building and shipping production software."
        layout="center"
      />

      <SectionContainer background="paper">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border-on-paper bg-card-on-paper transition-premium hover:-translate-y-1.5 hover:border-emerald/40 hover:shadow-[0_20px_36px_rgba(14,42,34,0.1)]"
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
                <h3 className="text-xl font-bold text-ink">{post.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-text-ink-secondary">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-text-ink-secondary">
                  <span>{formatDate(post.date)}</span>
                  <span className="font-semibold text-ink">Read More</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
