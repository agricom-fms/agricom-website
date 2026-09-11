"use client";

import { useState } from "react";
import Image from "next/image";

interface BlogImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fallbackSrc?: string;
}

const DEFAULT_FALLBACK = "/images/cropinsura.jpeg";

export default function BlogImage({
  src,
  alt,
  width = 800,
  height = 550,
  className = "h-full w-full object-cover",
  priority = false,
  fallbackSrc = DEFAULT_FALLBACK,
}: BlogImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src || fallbackSrc);
  const [hasError, setHasError] = useState<boolean>(!src);

  return (
    <div className="relative w-full h-full bg-mist-100 overflow-hidden">
      <Image
        src={hasError ? fallbackSrc : imgSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        unoptimized
        referrerPolicy="no-referrer"
        onError={() => {
          if (!hasError) {
            setHasError(true);
            setImgSrc(fallbackSrc);
          }
        }}
      />
    </div>
  );
}
