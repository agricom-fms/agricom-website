"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/content";
import { Logo } from "@/components/icons";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);

  const isActive = (href: string): boolean =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 pt-3.5 [padding-inline:clamp(20px,5vw,64px)] ${open ? "open" : ""}`}>
      <div className="mx-auto flex max-w-wrap items-center justify-between gap-[18px] rounded-pill border border-white/70 bg-white/[.58] py-[11px] pl-[22px] pr-3.5 shadow-md backdrop-blur-[18px] backdrop-saturate-[1.4]">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 font-display text-[16px] font-bold tracking-[-.01em] text-green-700"
          onClick={() => setOpen(false)}
        >
          <Logo className="h-[38px] w-[38px] flex-none object-contain" />
          Agricom Assurance
        </Link>

        {/* Links */}
        <div
          className={`flex items-center gap-1 max-lg:fixed max-lg:inset-x-[clamp(20px,5vw,64px)] max-lg:top-[84px] max-lg:flex-col max-lg:items-stretch max-lg:gap-1.5 max-lg:rounded-lg max-lg:border max-lg:border-white/70 max-lg:bg-white/[.72] max-lg:p-3.5 max-lg:shadow-lg max-lg:backdrop-blur-[24px] max-lg:transition-all ${
            open
              ? "max-lg:pointer-events-auto max-lg:translate-y-0 max-lg:opacity-100"
              : "max-lg:pointer-events-none max-lg:-translate-y-3 max-lg:opacity-0"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-pill px-[15px] py-[9px] font-display text-[13px] transition-colors max-lg:px-4 max-lg:py-3.5 max-lg:text-[14.5px] ${
                isActive(link.href)
                  ? "bg-green-500/[.12] font-semibold text-green-700"
                  : "font-medium text-ink-soft hover:bg-green-500/[.08] hover:text-green-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + burger */}
        <div className="flex items-center gap-2.5">
          <Button href="/contact" className="max-lg:hidden">
            Get Started
          </Button>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-pill border border-white/70 bg-white/40 lg:hidden"
          >
            <span
              className={`h-0.5 w-[18px] rounded bg-green-700 transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-[18px] rounded bg-green-700 transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-[18px] rounded bg-green-700 transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </nav>
  );
}
