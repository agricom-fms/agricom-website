"use client";

import Image from "next/image";
import { useEffect, useState, MouseEvent } from "react";
import Reveal from "@/components/ui/Reveal";
import Chip from "@/components/ui/Chip";
import { GALLERY_FILTERS, GALLERY } from "@/lib/content";

interface GalleryItem {
  caption: string;
  image: string;
  cat: string[];
}

export default function GalleryGrid() {
  const [filter, setFilter] = useState<string>("all");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  // Close on Escape + lock scroll while open
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const visible = GALLERY.filter(
    (g) => filter === "all" || g.cat.includes(filter)
  );

  return (
    <>
      <Reveal delay={120} className="mt-11 flex flex-wrap gap-2.5">
        {GALLERY_FILTERS.map((f) => (
          <Chip
            key={f.value}
            as="button"
            type="button"
            active={filter === f.value}
            onClick={() => setFilter(f.value)}
          >
            {f.label}
          </Chip>
        ))}
      </Reveal>

      {/* Masonry */}
      <Reveal className="mt-6 [column-gap:18px] [columns:1] sm:[columns:2] lg:[columns:3]">
        {visible.map((shot) => (
          <figure
            key={shot.caption}
            onClick={() => setLightbox(shot)}
            className="group relative mb-[18px] cursor-zoom-in overflow-hidden rounded-md shadow-sm transition-[transform,box-shadow] duration-300 ease-smooth [break-inside:avoid] hover:-translate-y-1 hover:shadow-md"
          >
            <Image
              src={shot.image}
              alt={shot.caption}
              width={900}
              height={650}
              className="w-full transition-transform duration-[.6s] ease-smooth group-hover:scale-[1.06]"
            />
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-[linear-gradient(transparent,rgba(6,35,26,.78))] px-4 pb-3.5 pt-[30px] font-display text-sm font-semibold text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </Reveal>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(6,23,17,.86)] p-[5vw] backdrop-blur-[10px]"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLightbox(null)}
            className="absolute right-7 top-6 grid h-12 w-12 place-items-center rounded-full border border-white/40 bg-white/[.14] text-[22px] text-white backdrop-blur-[10px] transition hover:bg-white/[.28]"
          >
            ✕
          </button>
          <Image
            src={lightbox.image}
            alt={lightbox.caption}
            width={1400}
            height={1000}
            className="max-h-[88vh] w-auto rounded-md object-contain shadow-lg"
            onClick={(e: MouseEvent) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
