import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/icons";
import { HERO_STATS } from "@/lib/content";

export default function Hero() {
  return (
    <header className="relative flex min-h-[92vh] items-center overflow-hidden pb-[90px] pt-[160px]">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1900&q=80&auto=format&fit=crop"
          alt="Farmers tending crops at dawn"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(6,35,26,.82)_0%,rgba(6,35,26,.5)_42%,rgba(6,35,26,.18)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(6,35,26,.6),transparent_45%)]" />
      </div>

      <Container>
        <Reveal>
          <div className="mb-[26px]">
            <span className="inline-flex items-center gap-2.5 rounded-pill border border-white/[.34] bg-white/[.12] py-[9px] pl-3 pr-[18px] font-display text-[13.5px] font-semibold text-white backdrop-blur-[12px]">
              <span className="h-[9px] w-[9px] rounded-full bg-lime-300 shadow-[0_0_0_4px_rgba(168,227,106,.25)]" />
              We are empowering farmers
            </span>
          </div>

          <h1 className="max-w-[15ch] text-[clamp(44px,6.4vw,86px)] font-extrabold text-white">
            Insurance that grows <span className="text-grad">with the land.</span>
          </h1>

          <p className="mt-[22px] max-w-[52ch] text-[clamp(17px,1.5vw,21px)] text-white/[.86]">
            Agricom Assurance protects farmers, agribusinesses and rural
            communities with transparent, technology-driven cover — from seed to
            harvest and beyond.
          </p>

          <div className="mt-[38px] flex flex-wrap gap-3.5">
            <Button href="/services" size="lg">
              Discover our cover
              <ArrowRight />
            </Button>
            <Button href="/contact" size="lg" variant="ghost-light">
              Talk to an advisor
            </Button>
          </div>

          <div className="mt-[54px] flex flex-wrap gap-3.5">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-md border border-white/[.22] bg-white/10 px-6 py-[18px] backdrop-blur-[12px]"
              >
                <b className="block font-display text-[30px] font-bold leading-none text-white">
                  {stat.value}
                </b>
                <span className="mt-1.5 block text-[13px] text-white/[.78]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </header>
  );
}
