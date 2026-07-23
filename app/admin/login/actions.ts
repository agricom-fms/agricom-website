"use server";

import { login } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const password = formData.get("password") as string;
  if (!password) {
    return { error: "Password is required" };
  }

  const success = await login(password);
  if (!success) {
    return { error: "Invalid password" };
  }

  redirect("/admin/blog");
}
