import { prisma } from "@/lib/db";
import { notFound } from "next/navigation";
import PostForm from "../../PostForm";

export default async function EditPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await prisma.blogPost.findUnique({
    where: { slug }
  });

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold font-display mb-8">Edit Post: {post.title}</h1>
      <PostForm post={post} />
    </div>
  );
}
