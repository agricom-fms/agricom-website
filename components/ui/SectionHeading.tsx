import { ReactNode } from "react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  center?: boolean;
  className?: string;
}

/**
 * Section heading block: eyebrow + title (+ optional lead paragraph).
 */
export default function SectionHeading({
  eyebrow,
  title,
  children,
  center = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`mb-[clamp(38px,5vw,60px)] max-w-[720px] ${
        center ? "mx-auto text-center" : ""
      } ${className}`}
    >
      {eyebrow && <Eyebrow center={center}>{eyebrow}</Eyebrow>}
      <h2 className="mt-3.5 text-[clamp(30px,4vw,52px)] font-bold">{title}</h2>
      {children && (
        <p className="mt-[18px] max-w-[62ch] text-[clamp(17px,1.4vw,20px)] text-body">
          {children}
        </p>
      )}
    </Reveal>
  );
}
