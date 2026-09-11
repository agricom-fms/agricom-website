import Link from "next/link";
import { getSession } from "@/lib/auth";
import { Logo } from "@/components/icons";
import LogoutButton from "./LogoutButton";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();

  // On unauthenticated pages like /admin/login, don't show the admin header
  if (!session) {
    return <div className="min-h-screen bg-mist-50">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-mist-50 flex flex-col">
      <header className="bg-white border-b border-mist-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/admin/blog" className="flex items-center gap-2.5 font-display font-bold text-strong hover:opacity-90 transition-opacity">
              <Logo className="w-6 h-6" />
              <span>Admin Portal</span>
            </Link>
            <nav className="hidden sm:flex items-center gap-1 text-sm font-medium">
              <Link
                href="/admin/blog"
                className="px-3 py-1.5 rounded-lg text-strong hover:bg-mist-100 transition-colors"
              >
                Blog Posts
              </Link>
              <Link
                href="/admin/blog/new"
                className="px-3 py-1.5 rounded-lg text-muted hover:text-strong hover:bg-mist-100 transition-colors"
              >
                + New Post
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 border border-green-200/60 text-green-700 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              Admin
            </div>

            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-muted hover:text-green-600 transition-colors px-2 py-1"
            >
              <span>View Site</span>
              <svg className="w-3.5 h-3.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>

            <div className="h-4 w-px bg-mist-200 hidden sm:block" />

            <LogoutButton variant="header" />
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-4 py-8 w-full">
        {children}
      </main>
    </div>
  );
}
