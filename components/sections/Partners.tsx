import Image from "next/image";
import { PARTNERS } from "@/lib/content";

export default function Partners() {
  // Duplicate the list so the marquee can loop seamlessly (translateX -50%).
  const loop = [...PARTNERS, ...PARTNERS];

  return (
    <section className="pb-[clamp(20px,3vw,36px)] pt-[clamp(28px,4vw,52px)]">
      <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-[clamp(16px,2vw,28px)] py-3 pr-[clamp(16px,2vw,28px)] group-hover:[animation-play-state:paused]">
          {loop.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex h-[clamp(96px,10vw,120px)] w-[clamp(170px,18vw,220px)] flex-none items-center justify-center rounded-lg bg-white p-7 shadow-md"
            >
              <div className="relative h-full w-full">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="196px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
