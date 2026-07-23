// All brand SVG icons as React components.
// Each forwards props (className, width/height) so callers can size/colour them.

import { SVGProps } from "react";
import Image from "next/image";
import type { IconName } from "@/lib/content";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Agricom Assurance"
      width={22}
      height={22}
      priority
      className={className}
    />
  );
}

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={2.2} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Check(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} strokeWidth={2.4} {...props}>
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}

export function Crop(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="M7 20h10M10 20c.5-3.5-1-6-3-7m6 7c-.5-3.5 1-6 3-7M12 13V5m0 0c0-1.7 1.3-3 3-3-.2 1.9-1.3 3-3 3Zm0 0c0-1.7-1.3-3-3-3 .2 1.9 1.3 3 3 3Z" />
    </svg>
  );
}

export function Livestock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="M4 17V9a1 1 0 0 1 1-1h5l2-3h3v4M3 17h10m-7 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm13 1a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 0h2v-4l-3-2" />
    </svg>
  );
}

export function Weather(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="M16 13a4 4 0 0 0-3.9-4A5.5 5.5 0 1 0 6 14.5M8 19v2m4-3v2m4-4v2" />
    </svg>
  );
}

export function Equipment(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="M7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM3 6h11l1 8M7 14h8M14 6l2 4h5l-1 4" />
    </svg>
  );
}

export function Agribusiness(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="M3 3v18h18M7 14l3-3 3 3 5-6" />
    </svg>
  );
}

export function Mobile(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <rect x="7" y="2" width="10" height="20" rx="2.5" />
      <path d="M11 18h2" />
    </svg>
  );
}

export function Input(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="M12 2v6m0 8v6m10-10h-6M8 12H2m15.5-5.5-4 4m-3 3-4 4m11 0-4-4m-3-3-4-4" />
    </svg>
  );
}

export function Rows(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="M3 7h18M3 12h18M3 17h12" />
    </svg>
  );
}

export function Globe(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 0a14 14 0 0 1 0 20M2 12h20" />
    </svg>
  );
}

export function ShieldCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 11 2 2 4-4" />
    </svg>
  );
}

export function Users(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <circle cx="9" cy="7" r="3" />
      <path d="M2 21a7 7 0 0 1 14 0M16 3.1a3 3 0 0 1 0 5.8M22 21a6.5 6.5 0 0 0-4-6" />
    </svg>
  );
}

export function Quote(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2H4v2h1a4 4 0 0 0 4-4V7Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2h-1v2h1a4 4 0 0 0 4-4V7Z" />
    </svg>
  );
}

export function MapPin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function Phone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.5a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

export function Mail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  );
}

export function Clock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function Linkedin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Twitter(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

// Registry so data-driven components can look icons up by string key.
export const ICONS: Record<
  IconName,
  React.ComponentType<SVGProps<SVGSVGElement>>
> = {
  crop: Crop,
  livestock: Livestock,
  weather: Weather,
  equipment: Equipment,
  agribusiness: Agribusiness,
  mobile: Mobile,
  input: Input,
  rows: Rows,
  globe: Globe,
  shieldCheck: ShieldCheck,
  users: Users,
};
