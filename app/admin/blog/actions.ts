"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";


function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")        // Replace spaces with -
    .replace(/[^\w\-]+/g, "")    // Remove all non-word chars
    .replace(/\-\-+/g, "-");     // Replace multiple - with single -
}

export async function savePost(formData: FormData) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  const id = formData.get("id") as string | null;
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string || slugify(title);
  const desc = formData.get("desc") as string;
  const date = new Date(formData.get("date") as string);
  const readTime = formData.get("readTime") as string;
  const author = formData.get("author") as string;
  const image = formData.get("image") as string;
  const tag = formData.get("tag") as string;
  const catString = formData.get("cat") as string;
  const body = formData.get("body") as string;

  const cat = JSON.stringify(catString.split(",").map(c => c.trim()));

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
  revalidatePath(`/blog/${slug}`);
  redirect("/admin/blog");
}

export async function deletePost(id: string) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  await prisma.blogPost.delete({ where: { id } });
  revalidatePath("/blog");
  redirect("/admin/blog");
}
