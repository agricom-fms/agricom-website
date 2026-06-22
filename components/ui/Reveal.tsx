"use client";

import { useEffect, useRef, useState, ElementType, HTMLAttributes } from "react";

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
}

/**
 * Scroll-reveal wrapper: fades + slides its children in once they enter the
 * viewport. Honours prefers-reduced-motion (renders visible immediately).
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState<boolean>(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const frame = window.requestAnimationFrame(() => setShown(true));
      return () => window.cancelAnimationFrame(frame);
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Component = Tag as ElementType;

  return (
    <Component
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-smooth ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
