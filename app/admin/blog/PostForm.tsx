"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { savePost } from "./actions";

export default function PostForm({ post }: { post?: any }) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    await savePost(formData);
    // savePost redirects on success
  }

  const defaultDate = post ? new Date(post.date).toISOString().split("T")[0] : new Date().toISOString().split("T")[0];
  const defaultCat = post ? JSON.parse(post.cat).join(", ") : "";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-2xl bg-white p-8 rounded-xl border border-mist-200 shadow-sm">
      {post && <input type="hidden" name="id" value={post.id} />}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-strong">Title</label>
          <input type="text" name="title" defaultValue={post?.title} required className="w-full px-4 py-2 border border-mist-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/40" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-strong">Slug (optional)</label>
          <input type="text" name="slug" defaultValue={post?.slug} className="w-full px-4 py-2 border border-mist-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/40" placeholder="auto-generated-if-empty" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-strong">Short Description</label>
        <textarea name="desc" defaultValue={post?.desc} required rows={2} className="w-full px-4 py-2 border border-mist-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/40"></textarea>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2 text-strong">Date</label>
          <input type="date" name="date" defaultValue={defaultDate} required className="w-full px-4 py-2 border border-mist-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/40" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-strong">Read Time</label>
          <input type="text" name="readTime" defaultValue={post?.readTime || "5 min read"} required className="w-full px-4 py-2 border border-mist-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/40" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-strong">Author</label>
          <input type="text" name="author" defaultValue={post?.author || "Admin"} required className="w-full px-4 py-2 border border-mist-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/40" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <label className="block text-sm font-medium mb-2 text-strong">Cover Image URL</label>
          <input type="url" name="image" defaultValue={post?.image} required className="w-full px-4 py-2 border border-mist-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/40" placeholder="https://..." />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2 text-strong">Display Tag</label>
          <input type="text" name="tag" defaultValue={post?.tag} required className="w-full px-4 py-2 border border-mist-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/40" placeholder="e.g. Crop" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-strong">Categories (comma-separated filter IDs)</label>
        <input type="text" name="cat" defaultValue={defaultCat} required className="w-full px-4 py-2 border border-mist-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/40" placeholder="crop, index, agri" />
        <p className="text-xs text-muted mt-1">Available: crop, livestock, index, agri</p>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-strong">Body Content</label>
        <textarea name="body" defaultValue={post?.body} required rows={12} className="w-full px-4 py-2 border border-mist-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/40 font-mono text-sm" placeholder="Separate paragraphs with double newlines..."></textarea>
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-mist-200">
        <Button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Save Post"}
        </Button>
        <Button href="/admin/blog" className="!bg-mist-100 !text-strong hover:!bg-mist-200">
          Cancel
        </Button>
      </div>
    </form>
  );
}
