import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Quote } from "@/components/icons";
import { TESTIMONIAL } from "@/lib/content";

export default function Testimonial() {
  return (
    <section className="section pt-0">
      <Container>
        <Reveal className="glass grid grid-cols-1 items-center gap-10 p-[clamp(34px,5vw,64px)] md:grid-cols-[auto_1fr]">
          <div className="aspect-square w-[clamp(120px,18vw,200px)] overflow-hidden rounded-lg shadow-md">
            <Image
              src={TESTIMONIAL.image}
              alt={TESTIMONIAL.name}
              width={200}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <Quote className="mb-3.5 h-[34px] w-[34px] text-green-500 opacity-50" />
            <p className="font-display text-[clamp(20px,2.4vw,30px)] font-semibold leading-[1.35] tracking-[-.01em] text-ink">
              {TESTIMONIAL.quote}
            </p>
            <div className="mt-[22px] flex items-center gap-3">
              <strong className="font-display text-green-700">
                {TESTIMONIAL.name}
              </strong>
              <span className="opacity-40">•</span>
              <span className="text-[14.5px] text-muted">
                {TESTIMONIAL.role}
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
