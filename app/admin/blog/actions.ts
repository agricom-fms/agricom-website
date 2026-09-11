"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import fs from "fs";
import path from "path";


function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")        // Replace spaces with -
    .replace(/[^\w\-]+/g, "")    // Remove all non-word chars
    .replace(/\-\-+/g, "-")      // Replace multiple - with single -
    .replace(/^-+|-+$/g, "");    // Trim - from start and end
}

export type SavePostResult = {
  success: boolean;
  error?: string;
  slug?: string;
};

export async function savePost(formData: FormData): Promise<SavePostResult> {
  const session = await getSession();
  if (!session) {
    return { success: false, error: "Unauthorized. Please log in." };
  }

  const id = (formData.get("id") as string | null) || null;
  const title = (formData.get("title") as string)?.trim() || "";
  const rawSlug = (formData.get("slug") as string)?.trim() || "";

  let slug = slugify(rawSlug || title);
  if (!slug) {
    return { success: false, error: "A title or valid slug is required." };
  }

  try {
    // If slug was entered manually, check uniqueness and alert if taken
    if (rawSlug) {
      const existing = await prisma.blogPost.findUnique({ where: { slug } });
      if (existing && existing.id !== id) {
        return {
          success: false,
          error: `The slug "${slug}" is already in use by another blog post. Please specify a different slug.`,
        };
      }
    } else {
      // If slug was auto-generated from title, automatically deduplicate with numeric suffix
      let candidateSlug = slug;
      let counter = 1;
      while (true) {
        const existing = await prisma.blogPost.findUnique({ where: { slug: candidateSlug } });
        if (!existing || existing.id === id) {
          slug = candidateSlug;
          break;
        }
        counter++;
        candidateSlug = `${slug}-${counter}`;
      }
    }

    const desc = (formData.get("desc") as string) || "";
    const dateStr = formData.get("date") as string;
    const date = dateStr ? new Date(dateStr) : new Date();
    const readTime = (formData.get("readTime") as string) || "5 min read";
    const author = (formData.get("author") as string) || "Admin";
    const image = (formData.get("image") as string) || "";
    const tag = (formData.get("tag") as string) || "General";
    const catString = (formData.get("cat") as string) || "";
    const body = (formData.get("body") as string) || "";

    const cat = JSON.stringify(
      catString
        .split(",")
        .map((c) => c.trim())
        .filter(Boolean)
    );

    const data = {
      slug,
      title,
      desc,
      date,
      readTime,
      author,
      image,
      tag,
      cat,
      body,
    };

    if (id) {
      await prisma.blogPost.update({ where: { id }, data });
    } else {
      await prisma.blogPost.create({ data });
    }

    revalidatePath("/blog");
    revalidatePath("/admin/blog");
    revalidatePath(`/blog/${slug}`);

    return { success: true, slug };
  } catch (err: any) {
    if (err.code === "P2002") {
      return {
        success: false,
        error: `A blog post with the slug "${slug}" already exists. Please choose a different slug.`,
      };
    }
    console.error("Error saving post:", err);
    return {
      success: false,
      error: err.message || "Failed to save blog post.",
    };
  }
}

export async function deletePost(id: string) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  await prisma.blogPost.delete({ where: { id } });
  revalidatePath("/blog");
  redirect("/admin/blog");
}

export async function uploadImageAction(formData: FormData) {
  const session = await getSession();
  if (!session) return { error: "Unauthorized" };

  const file = formData.get("file") as File | null;
  if (!file) return { error: "No file provided" };

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadsDir = path.join(process.cwd(), "public", "uploads");
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  const ext = path.extname(file.name) || ".jpg";
  const filename = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}${ext}`;
  const filePath = path.join(uploadsDir, filename);

  fs.writeFileSync(filePath, buffer);

  return { success: true, url: `/uploads/${filename}` };
}
