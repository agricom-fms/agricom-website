"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { Quote, ArrowRight } from "@/components/icons";
import { TESTIMONIALS } from "@/lib/content";

const GAP = 20; // matches gap-5 on the track
const AUTOPLAY_MS = 4000;

export default function Testimonial() {
  const trackRef = useRef<HTMLDivElement>(null);
  const hovering = useRef<boolean>(false);
  const stopped = useRef<boolean>(false); // permanent once the user interacts
  const [active, setActive] = useState<number>(0);

  // Width of one card step (card + gap).
  const step = () => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>("[data-card]");
    return card ? card.offsetWidth + GAP : (track?.clientWidth ?? 0) * 0.85;
  };

  const scroll = useCallback((dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + GAP : track.clientWidth * 0.85;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;
    // Loop back to the start once the end is reached.
    if (dir === 1 && atEnd) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      track.scrollBy({ left: dir * amount, behavior: "smooth" });
    }
  }, []);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: i * step(), behavior: "smooth" });
  };

  // Stop autoplay for good when the user takes manual control.
  const stop = () => {
    stopped.current = true;
  };

  // Track the active (leftmost) card for the indicators.
  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const w = step() || 1;
    setActive(Math.round(track.scrollLeft / w));
  };

  // Autoplay — advances every AUTOPLAY_MS, pausing while hovered/focused and
  // when the tab is hidden, and stopping entirely after manual interaction.
  // Respects prefers-reduced-motion.
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = window.setInterval(() => {
      if (!hovering.current && !stopped.current && !document.hidden) scroll(1);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [scroll]);

  return (
    <section className="section pt-0">
      <Container>
        <div className="mb-[clamp(28px,4vw,44px)] flex flex-wrap items-end justify-between gap-5">
          <div>
            <Eyebrow>What farmers say</Eyebrow>
            <h2 className="mt-3.5 text-[clamp(21px,2.4vw,32px)]">
              Trusted across the region.
            </h2>
          </div>

          <div className="flex gap-2.5">
            <button
              type="button"
              aria-label="Previous testimonials"
              onClick={() => {
                stop();
                scroll(-1);
              }}
              className="grid h-11 w-11 place-items-center rounded-pill border border-mist-200 bg-white text-green-700 transition-colors hover:border-green-400 hover:text-green-600"
            >
              <ArrowRight className="h-[18px] w-[18px] rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
              onClick={() => {
                stop();
                scroll(1);
              }}
              className="grid h-11 w-11 place-items-center rounded-pill border border-mist-200 bg-white text-green-700 transition-colors hover:border-green-400 hover:text-green-600"
            >
              <ArrowRight className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={onScroll}
          onMouseEnter={() => (hovering.current = true)}
          onMouseLeave={() => (hovering.current = false)}
          onFocusCapture={() => (hovering.current = true)}
          onBlurCapture={() => (hovering.current = false)}
          className="-mx-2 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-2 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              data-card
              className="flex shrink-0 snap-start basis-full flex-col rounded-lg border border-mist-200 bg-white p-6 md:basis-[calc((100%-20px)/2)] lg:basis-[calc((100%-40px)/3)] xl:basis-[calc((100%-60px)/4)] 2xl:basis-[calc((100%-80px)/5)]"
            >
              <Quote className="mb-3.5 h-[26px] w-[26px] flex-none text-green-500 opacity-50" />
              <p className="flex-1 font-display text-[14px] font-medium leading-[1.5] text-ink">
                {t.quote}
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-mist-200 pt-4">
                <div className="h-10 w-10 flex-none overflow-hidden rounded-full">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <strong className="block truncate font-display text-[13.5px] text-green-700">
                    {t.name}
                  </strong>
                  <span className="block truncate text-[12px] text-muted">
                    {t.role}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Indicators */}
        <div className="mt-7 flex justify-center gap-2.5">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === active}
              onClick={() => {
                stop();
                goTo(i);
              }}
              className={`h-2 rounded-pill transition-all duration-300 ease-smooth ${
                i === active
                  ? "w-6 bg-green-500"
                  : "w-2 bg-mist-200 hover:bg-green-400/60"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
