import Link from "next/link";
import { prisma } from "@/lib/db";
import Button from "@/components/ui/Button";
import { deletePost } from "./actions";

export default async function AdminBlogPage() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { date: "desc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold font-display">Manage Blog Posts</h1>
        <Button href="/admin/blog/new">Create Post</Button>
      </div>

      <div className="bg-white border border-mist-200 rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-mist-50 border-b border-mist-200 text-strong">
            <tr>
              <th className="px-6 py-4 font-medium">Title</th>
              <th className="px-6 py-4 font-medium">Date</th>
              <th className="px-6 py-4 font-medium">Category</th>
              <th className="px-6 py-4 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-mist-200">
            {posts.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-muted">
                  No posts found. Create one to get started.
                </td>
              </tr>
            ) : (
              posts.map((post) => (
                <tr key={post.id} className="hover:bg-mist-50 transition-colors">
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
                      <form action={async () => {
                        "use server";
                        await deletePost(post.id);
                      }}>
                        <button
                          type="submit"
                          className="text-red-500 hover:text-red-700 font-medium transition-colors"
                          onClick={(e) => {
                            if (!confirm("Are you sure you want to delete this post?")) {
                              e.preventDefault();
                            }
                          }}
                        >
                          Delete
                        </button>
                      </form>
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
