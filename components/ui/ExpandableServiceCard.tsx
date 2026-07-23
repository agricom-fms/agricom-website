"use client";

import { useState } from "react";
import FeatureIcon from "@/components/ui/FeatureIcon";
import { ICONS } from "@/components/icons";
import type { AgricomService } from "@/lib/content";
import { ArrowRight } from "@/components/icons";

export default function ExpandableServiceCard({ service }: { service: AgricomService }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group flex h-full flex-col rounded-lg border border-mist-200 bg-white p-[30px] shadow-sm transition-[transform,box-shadow,border-color] duration-300 ease-smooth hover:-translate-y-1.5 hover:border-green-500/40 hover:shadow-md">
      <FeatureIcon icon={ICONS[service.icon]} className="mb-5" />
      <h3 className="text-[19px]">{service.title}</h3>
      <p className="mt-2.5 font-display text-[14px] font-medium leading-snug text-ink">
        {service.short}
      </p>
      
      <div 
        className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-out ${
          expanded ? "grid-rows-[1fr] opacity-100 mt-3.5" : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="border-t border-mist-200 pt-3.5 text-[13.5px] leading-relaxed text-muted">
            {service.long}
          </p>
        </div>
      </div>
      
      <div className="mt-auto pt-4">
        <button
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-1.5 font-display text-[12.5px] font-semibold text-green-600 transition-colors hover:text-green-700"
        >
          {expanded ? "Show less" : "Read more"}
          <ArrowRight className={`h-3.5 w-3.5 transition-transform duration-300 ${expanded ? "-rotate-90" : "rotate-90"}`} />
        </button>
      </div>
    </article>
  );
}
