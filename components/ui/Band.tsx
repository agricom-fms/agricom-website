import Image from "next/image";
import type { ReactNode } from "react";

interface BandProps {
  image?: string;
  alt?: string;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
}

/**
 * Dark, image-backed band used for CTA blocks and feature panels.
 */
export default function Band({
  image,
  alt = "",
  className = "",
  innerClassName = "",
  children,
}: BandProps) {
  return (
    <div
      className={`relative isolate overflow-hidden rounded-xl text-[#EAF6EA] ${className}`}
    >
      {image && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(6,35,26,.92),rgba(11,94,46,.7))]" />
        </div>
      )}
      <div className={innerClassName}>{children}</div>
    </div>
  );
}
