"use client";

import { useState, FormEvent } from "react";

export default function NewsletterForm() {
  const [done, setDone] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDone(true);
    e.currentTarget.reset();
    setTimeout(() => setDone(false), 3500);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-3.5 flex gap-2 rounded-pill border border-white/[.14] bg-white/[.06] p-1.5"
    >
      <input
        type="email"
        required
        placeholder={done ? "Subscribed thank you!" : "Your email for season updates"}
        className="min-w-0 flex-1 border-none bg-transparent px-3.5 py-2 font-body text-[12.5px] text-white outline-none placeholder:text-[#7FA088]"
      />
      <button
        type="submit"
        className="flex-none rounded-pill bg-gradient-to-br from-green-500 to-green-600 px-[18px] py-2.5 font-display text-[12.5px] font-semibold text-white"
      >
        Subscribe
      </button>
    </form>
  );
}
