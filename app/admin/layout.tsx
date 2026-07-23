import Link from "next/link";
import { logout } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Logo } from "@/components/icons";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  async function handleLogout() {
    "use server";
    await logout();
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-mist-50 flex flex-col">
      <header className="bg-white border-b border-mist-200">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/admin/blog" className="flex items-center gap-2 font-display font-bold">
            <Logo className="w-6 h-6" />
            <span>Admin Portal</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" target="_blank" className="text-sm font-medium hover:text-green-600 transition-colors">
              View Site
            </Link>
            <form action={handleLogout}>
              <button type="submit" className="text-sm text-red-600 font-medium hover:text-red-700 transition-colors">
                Logout
              </button>
            </form>
          </div>
        </div>
      </header>
      <main className="flex-1 max-w-5xl mx-auto px-4 py-8 w-full">
        {children}
      </main>
    </div>
  );
}
