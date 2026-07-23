import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Chip from "@/components/ui/Chip";
import CtaBand from "@/components/sections/CtaBand";
import { formatDate } from "@/lib/content";
import { prisma } from "@/lib/db";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await prisma.blogPost.findMany({ select: { slug: true } });
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({ where: { slug } });

  if (!post) return { title: "Post not found" };

  return {
    title: `${post.title} Agricom Assurance`,
    description: post.desc,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({ where: { slug } });

  if (!post) notFound();

  return (
    <main>
      <article>
        {/* Header */}
        <section className="relative px-0 pb-[40px] pt-[170px]">
          <Container>
            <Reveal className="mb-[18px] flex items-center gap-2 font-display text-[12px] font-medium text-muted">
              <Link href="/" className="transition-colors hover:text-green-600">
                Home
              </Link>
              <span className="opacity-50">/</span>
              <Link
                href="/blog"
                className="transition-colors hover:text-green-600"
              >
                Blog
              </Link>
              <span className="opacity-50">/</span>
              {post.tag}
            </Reveal>

            <Reveal>
              <Chip active className="px-3 py-[5px] text-[11px]">
                {post.tag}
              </Chip>
            </Reveal>

            <Reveal
              as="h1"
              delay={60}
              className="mt-4 max-w-[20ch] text-[clamp(26px,4vw,48px)] font-extrabold"
            >
              {post.title}
            </Reveal>

            <Reveal
              delay={120}
              className="mt-5 flex flex-wrap items-center gap-2 font-display text-[12.5px] text-muted"
            >
              <span>{post.author}</span>
              <span className="opacity-50">•</span>
              <span>{formatDate(post.date.toISOString ? post.date.toISOString() : post.date)}</span>
              <span className="opacity-50">•</span>
              <span>{post.readTime}</span>
            </Reveal>
          </Container>
        </section>

        {/* Hero image */}
        <Container>
          <Reveal className="overflow-hidden rounded-lg border border-mist-200 shadow-sm">
            <div className="aspect-[16/8] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={1700}
                height={850}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </Reveal>
        </Container>

        {/* Body */}
        <section className="section pt-[clamp(32px,5vw,56px)]">
          <Container>
            <div className="mx-auto max-w-[68ch]">
              <p className="text-[clamp(16px,1.35vw,19px)] font-medium text-strong">
                {post.desc}
              </p>
              {post.body.split("\n\n").map((paragraph, i) => (
                <Reveal
                  key={i}
                  as="p"
                  delay={(i % 3) * 60}
                  className="mt-6 text-[clamp(14px,1.15vw,16px)] leading-relaxed text-body"
                >
                  {paragraph}
                </Reveal>
              ))}

              <div className="mt-10 border-t border-mist-200 pt-6">
                <Link
                  href="/blog"
                  className="font-display text-[13.5px] font-semibold text-green-700 transition-colors hover:text-green-600"
                >
                  ← Back to all posts
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </article>

      <CtaBand
        title="Ready to protect your harvest?"
        image="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1700&q=80&auto=format&fit=crop"
        imageAlt="Farmers"
        titleClassName="max-w-[18ch] text-[clamp(22px,3.2vw,42px)]"
        primary={{ label: "Get Started", href: "/contact" }}
      />
    </main>
  );
}
