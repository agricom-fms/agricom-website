"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import Chip from "@/components/ui/Chip";
import { PORTFOLIO_FILTERS, PROJECTS } from "@/lib/content";

export default function ProjectGrid() {
  const [filter, setFilter] = useState<string>("all");

  const visible = PROJECTS.filter(
    (p) => filter === "all" || p.cat.includes(filter)
  );

  return (
    <>
      {/* Filter chips */}
      <Reveal delay={120} className="mt-11 flex flex-wrap gap-2.5">
        {PORTFOLIO_FILTERS.map((f) => (
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

      {/* Cards */}
      <div className="mt-[clamp(28px,4vw,44px)] grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <Reveal
            key={project.title}
            delay={(i % 3) * 80}
            className="overflow-hidden rounded-lg border border-mist-200 bg-white shadow-sm transition-[transform,box-shadow,border-color] duration-300 ease-smooth hover:-translate-y-1.5 hover:border-green-500/40 hover:shadow-md"
          >
            <div className="aspect-[16/11] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={550}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <Chip active className="px-3 py-[5px] text-xs">
                {project.tag}
              </Chip>
              <h3 className="mt-3.5 text-[21px]">{project.title}</h3>
              <p className="mt-2 text-[14.5px] text-muted">{project.desc}</p>
              <div className="mt-4 flex gap-[18px] font-display">
                {project.stats.map((s) => (
                  <span key={s} className="font-bold text-green-700">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}
