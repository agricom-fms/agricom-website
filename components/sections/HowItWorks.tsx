import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { HOW_IT_WORKS } from "@/lib/content";

export default function HowItWorks() {
  return (
    <section className="section pt-0">
      <Container>
        <SectionHeading
          center
          eyebrow="How it works"
          title="From enrolment to payout in four steps."
        />
        <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
          {HOW_IT_WORKS.map((item, index) => (
            <Reveal key={item.step} delay={index * 80} className="text-center">
              <div className="mx-auto mb-[18px] grid h-16 w-16 place-items-center rounded-[20px] bg-gradient-to-br from-green-500 to-green-700 font-display text-2xl font-bold text-white shadow-glow">
                {item.step}
              </div>
              <h3 className="mb-2 text-[19px]">{item.title}</h3>
              <p className="text-[14.5px] text-muted">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
