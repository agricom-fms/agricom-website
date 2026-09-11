"use client";

import { useTransition } from "react";
import { deletePost } from "./actions";

export default function DeletePostButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this post?")) {
      startTransition(async () => {
        await deletePost(id);
      });
    }
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={isPending}
      className="text-red-500 hover:text-red-700 font-medium transition-colors disabled:opacity-50"
    >
      {isPending ? "Deleting..." : "Delete"}
    </button>
  );
}
