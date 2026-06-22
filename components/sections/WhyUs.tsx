import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Band from "@/components/ui/Band";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import { WHY_US } from "@/lib/content";

export default function WhyUs() {
  return (
    <section className="section pt-0">
      <Container>
        <Reveal>
          <Band
            image="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1600&q=80&auto=format&fit=crop"
            alt="Farmers in the field"
            innerClassName="p-[clamp(38px,6vw,72px)]"
          >
            <div className="grid grid-cols-1 items-center gap-[50px] lg:grid-cols-[1.1fr_1fr]">
              <div>
                <Eyebrow className="!text-lime-300">Why Agricom</Eyebrow>
                <h2 className="mt-3.5 text-[clamp(28px,3.6vw,46px)] text-white">
                  Technology that turns uncertainty into resilience.
                </h2>
                <p className="mt-[18px] max-w-[62ch] text-[clamp(17px,1.4vw,20px)] text-white/[.85]">
                  We pair on-the-ground agronomists with satellite imagery and
                  automated weather triggers — so cover is fair, claims are
                  fast, and farmers stay planted through whatever the season
                  brings.
                </p>
                <Button
                  href="/about"
                  size="lg"
                  variant="glass"
                  className="mt-11"
                >
                  Our story
                </Button>
              </div>
              <div className="grid gap-3.5">
                {WHY_US.map((item) => (
                  <div key={item.title} className="glass-dark px-6 py-[22px]">
                    <b className="mb-1.5 block font-display text-[17px] text-white">
                      {item.title}
                    </b>
                    <span className="text-[14.5px] text-[#EAF6EA]/80">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Band>
        </Reveal>
      </Container>
    </section>
  );
}
