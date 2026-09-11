"use client";

import { useTransition } from "react";
import { logoutAction } from "./actions";

interface LogoutButtonProps {
  variant?: "header" | "button";
  className?: string;
}

export default function LogoutButton({
  variant = "header",
  className = "",
}: LogoutButtonProps) {
  const [isPending, startTransition] = useTransition();

  const handleLogout = () => {
    if (confirm("Are you sure you want to log out of the admin portal?")) {
      startTransition(async () => {
        await logoutAction();
      });
    }
  };

  const icon = (
    <svg
      className={`h-4 w-4 transition-transform duration-200 ${
        isPending ? "animate-spin" : "group-hover:translate-x-0.5"
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      {isPending ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      )}
    </svg>
  );

  if (variant === "button") {
    return (
      <button
        type="button"
        onClick={handleLogout}
        disabled={isPending}
        className={`group inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 hover:text-red-700 rounded-lg border border-red-200/70 transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none cursor-pointer ${className}`}
        title="Log out of admin session"
      >
        {icon}
        <span>{isPending ? "Logging out..." : "Log Out"}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={isPending}
      className={`group inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all duration-150 disabled:opacity-50 disabled:pointer-events-none cursor-pointer ${className}`}
      title="Log out of admin session"
    >
      {icon}
      <span>{isPending ? "Logging out..." : "Log Out"}</span>
    </button>
  );
}
