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
          <h2 key={i} className="heading-3 mt-10 text-primary-text">
            {block.replace("## ", "")}
          </h2>
        );
      }
      if (block.startsWith("# ")) {
        return null;
      }
      return (
        <p key={i} className="mt-4 text-base leading-relaxed text-primary-text-secondary">
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
      <div className="relative aspect-[21/9] w-full overflow-hidden bg-primary-bg-2">
        <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/40 to-transparent" />
      </div>

      <SectionContainer padding="small">
        <Badge variant="accent">{post.category}</Badge>
        <h1 className="heading-1 mt-6 max-w-[800px] text-primary-text">{post.title}</h1>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-primary-text-secondary">
          <span>{post.author}</span>
          <span>·</span>
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{readingTime(post.content)} min read</span>
        </div>

        <div className="mt-10 max-w-[800px]">{renderMarkdown(post.content)}</div>

        <div className="mt-16 max-w-[800px] rounded-xl border border-[rgba(232,180,79,0.1)] bg-primary-bg-2 p-8">
          <p className="text-sm font-semibold text-primary-text-secondary">
            Written by
          </p>
          <p className="mt-1 text-lg font-bold text-primary-text">{post.author}</p>
        </div>
      </SectionContainer>

      <SectionContainer background="secondary">
        <h2 className="heading-3 text-primary-text">Related Posts</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.id}
              href={`/blog/${p.slug}`}
              className="rounded-xl border border-[rgba(232,180,79,0.1)] bg-primary-bg-2-hover p-6 transition-premium hover:-translate-y-1"
            >
              <h3 className="font-bold text-primary-text">{p.title}</h3>
              <p className="mt-2 text-sm text-primary-text-secondary">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </SectionContainer>

      <section className="bg-primary-bg-2-hover px-5 py-20 lg:px-10">
        <div className="mx-auto flex max-w-[800px] flex-col items-center gap-6 text-center">
          <h2 className="heading-2 text-primary-text">Need help with your project?</h2>
          <Link href="/contact">
            <PremiumButton size="lg">Get in Touch</PremiumButton>
          </Link>
        </div>
      </section>
    </>
  );
}
