import Link from "next/link";
import { SVGProps } from "react";
import FeatureIcon from "./FeatureIcon";
import { ArrowRight } from "@/components/icons";

interface ServiceCardProps {
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  href?: string;
}

/**
 * Service / feature card with hover lift, left ribbon accent and optional
 * "Explore cover" link.
 */
export default function ServiceCard({ icon, title, desc, href }: ServiceCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-lg border border-mist-200 bg-white p-[30px] shadow-sm transition-[transform,box-shadow,border-color] duration-300 ease-smooth hover:-translate-y-1.5 hover:border-green-500/40 hover:shadow-md">
      {/* left ribbon */}
      <span className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 rounded bg-gradient-to-b from-green-500 to-lime-400 transition-transform duration-300 group-hover:scale-y-100" />
      <FeatureIcon icon={icon} className="mb-5" />
      <h3 className="mb-2.5 text-[21px]">{title}</h3>
      <p className="text-[15px] text-muted">{desc}</p>
      {href && (
        <Link
          href={href}
          className="mt-[18px] inline-flex items-center gap-[7px] font-display text-sm font-semibold text-green-600"
        >
          Explore cover
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      )}
    </article>
  );
}
