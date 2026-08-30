import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Badge } from "@/components/ui/Badge";
import { PremiumButton } from "@/components/ui/Button";
import { blogPosts } from "@/data/blog";
import { formatDate, readingTime } from "@/lib/utils";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function renderMarkdown(content: string) {
  return content
    .trim()
    .split("\n\n")
    .map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2 key={i} className="heading-3 mt-10 text-ink">
            {block.replace("## ", "")}
          </h2>
        );
      }
      if (block.startsWith("# ")) {
        return null;
      }
      return (
        <p key={i} className="mt-4 text-base leading-relaxed text-text-ink-secondary">
          {block}
        </p>
      );
    });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <div className="relative aspect-[21/9] w-full overflow-hidden bg-ink-2">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      </div>

      <SectionContainer background="paper" padding="small">
        <Badge variant="accent">{post.category}</Badge>
        <h1 className="heading-1 mt-6 max-w-[800px] text-ink">{post.title}</h1>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-text-ink-secondary">
          <span>{post.author}</span>
          <span>·</span>
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{readingTime(post.content)} min read</span>
        </div>

        <div className="mt-10 max-w-[800px]">{renderMarkdown(post.content)}</div>

        <div className="mt-16 max-w-[800px] rounded-2xl border border-border-on-paper bg-card-on-paper p-8">
          <p className="text-sm font-semibold text-text-ink-secondary">Written by</p>
          <p className="mt-1 text-lg font-bold text-ink">{post.author}</p>
        </div>
      </SectionContainer>

      <SectionContainer background="paper-2">
        <h2 className="heading-3 text-ink">Related Posts</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.id}
              href={`/blog/${p.slug}`}
              className="rounded-2xl border border-border-on-paper bg-card-on-paper p-6 transition-premium hover:-translate-y-1"
            >
              <h3 className="font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm text-text-ink-secondary">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </SectionContainer>

      <section className="bg-emerald px-5 py-20 lg:px-10">
        <div className="mx-auto flex max-w-[800px] flex-col items-center gap-6 text-center">
          <h2 className="heading-2 text-ink">Need help with your project?</h2>
          <Link href="/contact">
            <PremiumButton size="lg">Get in Touch</PremiumButton>
          </Link>
        </div>
      </section>
    </>
  );
}
