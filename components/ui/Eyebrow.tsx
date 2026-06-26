import { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  center?: boolean;
}

export default function Eyebrow({ children, className = "", center = false }: EyebrowProps) {
  return (
    <span
      className={`eyebrow-line inline-flex items-center gap-2 font-display text-[12px] font-semibold uppercase tracking-[0.14em] text-green-600 ${
        center ? "justify-center" : ""
      } ${className}`}
    >
      {children}
    </span>
  );
}
