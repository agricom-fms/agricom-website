import Link from "next/link";
import { prisma } from "@/lib/db";
import Button from "@/components/ui/Button";
import DeletePostButton from "./DeletePostButton";
import LogoutButton from "../LogoutButton";
import BlogImage from "@/components/ui/BlogImage";

export default async function AdminBlogPage() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { date: "desc" },
  });

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold font-display">Manage Blog Posts</h1>
          <p className="text-sm text-muted mt-1">
            Create, edit, and organize posts published on your website.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button href="/admin/blog/new">+ Create Post</Button>
          <LogoutButton variant="button" />
        </div>
      </div>

      <div className="bg-white border border-mist-200 rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-mist-50 border-b border-mist-200 text-strong">
            <tr>
              <th className="px-6 py-4 font-medium w-24">Cover</th>
              <th className="px-6 py-4 font-medium">Title</th>
              <th className="px-6 py-4 font-medium">Date</th>
              <th className="px-6 py-4 font-medium">Category</th>
              <th className="px-6 py-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-mist-200">
            {posts.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-muted">
                  No posts found. Create one to get started.
                </td>
              </tr>
            ) : (
              posts.map((post) => (
                <tr key={post.id} className="hover:bg-mist-50 transition-colors">
                  <td className="px-6 py-3">
                    <div className="w-16 h-11 rounded-md overflow-hidden border border-mist-200 shrink-0">
                      <BlogImage src={post.image} alt={post.title} width={64} height={44} className="w-full h-full object-cover" />
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-body">
                    {post.title}
                  </td>
                  <td className="px-6 py-4 text-muted">
                    {post.date.toISOString().split("T")[0]}
                  </td>
                  <td className="px-6 py-4 text-muted">
                    {post.tag}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <Link
                        href={`/admin/blog/${post.slug}/edit`}
                        className="text-green-600 hover:text-green-700 font-medium transition-colors"
                      >
                        Edit
                      </Link>
                      <DeletePostButton id={post.id} />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
