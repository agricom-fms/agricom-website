import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { TRUST_LOGOS } from "@/lib/content";

export default function TrustStrip() {
  return (
    <Container as="section" className="relative z-[5] -mt-11">
      <Reveal className="glass flex flex-wrap items-center justify-between gap-6 px-[30px] py-[22px]">
        <span className="font-display text-sm font-semibold text-ink-soft">
          Trusted by cooperatives &amp; agribusinesses across the region
        </span>
        <div className="flex flex-wrap items-center gap-[30px] font-display text-base font-bold tracking-[.02em] text-green-700 opacity-70">
          {TRUST_LOGOS.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </div>
      </Reveal>
    </Container>
  );
}
