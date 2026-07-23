"use client";

import { useState } from "react";
import { loginAction } from "./actions";
import Button from "@/components/ui/Button";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    const formData = new FormData(e.currentTarget);
    const result = await loginAction(formData);
    
    // loginAction redirects on success. If it returns, there's an error.
    if (result?.error) {
      setError(result.error);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-mist-50 p-4">
      <div className="w-full max-w-sm bg-white border border-mist-200 rounded-xl shadow-sm p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold font-display">Admin Portal</h1>
          <p className="text-muted text-sm mt-2">Enter your password to continue.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-strong" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoFocus
              required
              className="w-full px-4 py-2 border border-mist-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/40"
            />
          </div>
          
          {error && <p className="text-red-500 text-sm">{error}</p>}
          
          <Button type="submit" disabled={loading} className="w-full justify-center">
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </div>
    </div>
  );
}
