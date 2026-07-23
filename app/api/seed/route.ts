import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { BLOG_POSTS } from "@/lib/content";

export async function GET() {
  try {
    for (const post of BLOG_POSTS) {
      await prisma.blogPost.upsert({
        where: { slug: post.slug },
        update: {},
        create: {
          slug: post.slug,
          title: post.title,
          desc: post.desc,
          date: new Date(post.date),
          readTime: post.readTime,
          author: post.author,
          image: post.image,
          tag: post.tag,
          cat: JSON.stringify(post.cat),
          body: post.body.join("\n\n"),
        },
      });
    }
    return NextResponse.json({ success: true, message: "Database seeded successfully." });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
