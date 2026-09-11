"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import BlogImage from "@/components/ui/BlogImage";
import { savePost, uploadImageAction } from "./actions";

export default function PostForm({ post }: { post?: any }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string>(post?.image || "");

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    const fd = new FormData();
    fd.append("file", file);

    try {
      const res = await uploadImageAction(fd);
      if (res?.error) {
        setError(res.error);
      } else if (res?.url) {
        setImageUrl(res.url);
      }
    } catch (err: any) {
      setError(err?.message || "Failed to upload image");
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    try {
      const res = await savePost(formData);
      if (res && !res.success) {
        setError(res.error || "Failed to save blog post.");
        setLoading(false);
        return;
      }
      router.push("/admin/blog");
      router.refresh();
    } catch (err: any) {
      setError(err?.message || "An unexpected error occurred.");
      setLoading(false);
    }
  }

  const defaultDate = post ? new Date(post.date).toISOString().split("T")[0] : new Date().toISOString().split("T")[0];
  const defaultCat = post ? JSON.parse(post.cat).join(", ") : "";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-2xl bg-white p-8 rounded-xl border border-mist-200 shadow-sm">
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm flex items-start justify-between">
          <span>{error}</span>
          <button
            type="button"
            onClick={() => setError(null)}
            className="text-red-500 hover:text-red-800 text-xs font-semibold ml-4"
          >
            Dismiss
          </button>
        </div>
      )}
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
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-strong">Cover Image</label>
            <label className="text-xs font-semibold text-green-700 hover:text-green-800 cursor-pointer inline-flex items-center gap-1.5 bg-green-50 hover:bg-green-100 px-2.5 py-1 rounded-md transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              <span>{uploading ? "Uploading..." : "Upload from Device"}</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                disabled={uploading}
                className="hidden"
              />
            </label>
          </div>
          <input
            type="text"
            name="image"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
            className="w-full px-4 py-2 border border-mist-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/40 text-sm"
            placeholder="https://... or /images/..."
          />
          {imageUrl ? (
            <div className="mt-3 relative w-full h-44 rounded-lg overflow-hidden border border-mist-200 bg-mist-50">
              <BlogImage
                src={imageUrl}
                alt="Cover preview"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-2 right-2 px-2 py-0.5 text-[10px] font-semibold bg-black/60 text-white rounded">
                Live Preview
              </span>
            </div>
          ) : null}
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
          {loading ? "Saving..." : post ? "Update Post" : "Save Post"}
        </Button>
        <Button href="/admin/blog" className="!bg-mist-100 !text-strong hover:!bg-mist-200">
          Cancel
        </Button>
      </div>
    </form>
  );
}
