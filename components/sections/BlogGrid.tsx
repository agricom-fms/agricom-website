"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import Chip from "@/components/ui/Chip";
import { BLOG_FILTERS, BLOG_POSTS, formatDate } from "@/lib/content";

export default function BlogGrid() {
  const [filter, setFilter] = useState<string>("all");

  const visible = BLOG_POSTS.filter(
    (p) => filter === "all" || p.cat.includes(filter)
  );

  return (
    <>
      {/* Filter chips */}
      <Reveal delay={120} className="mt-11 flex flex-wrap gap-2.5">
        {BLOG_FILTERS.map((f) => (
          <Chip
            key={f.value}
            as="button"
            type="button"
            active={filter === f.value}
            onClick={() => setFilter(f.value)}
          >
            {f.label}
          </Chip>
        ))}
      </Reveal>

      {/* Cards */}
      <div className="mt-[clamp(28px,4vw,44px)] grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((post, i) => (
          <Reveal key={post.slug} delay={(i % 3) * 80}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block h-full overflow-hidden rounded-lg border border-mist-200 bg-white shadow-sm transition-[transform,box-shadow,border-color] duration-300 ease-smooth hover:-translate-y-1.5 hover:border-green-500/40 hover:shadow-md"
            >
              <div className="aspect-[16/11] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={550}
                  className="h-full w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-6">
                <Chip active className="px-3 py-[5px] text-[11px]">
                  {post.tag}
                </Chip>
                <h3 className="mt-3.5 text-[19px] transition-colors group-hover:text-green-700">
                  {post.title}
                </h3>
                <p className="mt-2 text-[13px] text-muted">{post.desc}</p>
                <div className="mt-4 flex items-center gap-2 font-display text-[12px] text-muted">
                  <span>{formatDate(post.date)}</span>
                  <span className="opacity-50">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  );
}
