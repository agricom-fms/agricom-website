import Link from "next/link";
import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

interface PageHeaderProps {
  crumb: React.ReactNode;
  title: string;
  highlight?: string;
  children?: ReactNode;
}

/**
 * Subpage header with breadcrumb, title, optional highlight, and lead copy.
 */
export default function PageHeader({
  crumb,
  title,
  highlight,
  children,
}: PageHeaderProps) {
  return (
    <section className="relative px-0 pb-[60px] pt-[170px]">
      <Container>
        <Reveal
          className="mb-[18px] flex items-center gap-2 font-display text-[12px] font-medium text-muted"
        >
          <Link href="/" className="transition-colors hover:text-green-600">
            Home
          </Link>
          <span className="opacity-50">/</span>
          {crumb}
        </Reveal>
        <Reveal
          as="h1"
          className="max-w-[16ch] text-[clamp(32px,4.8vw,61px)] font-extrabold"
        >
          {title} {highlight && <span className="text-grad">{highlight}</span>}
        </Reveal>
        {children && (
          <Reveal
            delay={80}
            className="mt-5 max-w-[62ch] text-[clamp(15px,1.25vw,18px)] text-body"
          >
            {children}
          </Reveal>
        )}
      </Container>
    </section>
  );
}
