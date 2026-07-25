import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { SERVICES } from "@/lib/content";
import { ICONS } from "@/components/icons";

export default function ServicesPreview() {
  return (
    <section className="section" id="services">
      <Container>
        <SectionHeading
          eyebrow="Our Solutions"
          title="Protect farms. Empower farmers. Digitize agriculture. Build financial resilience."
        >
          Integrated Solutions for Climate-Smart Agriculture. From protecting farms against climate risks to providing climate intelligence, retirement security, digital advisory, and input financing, Agricom delivers connected solutions that help farmers and agricultural institutions build resilience, improve productivity, and grow sustainably.
        </SectionHeading>
        <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 80}>
              <ServiceCard
                icon={ICONS[service.icon]}
                title={service.title}
                desc={service.desc}
                href={service.href || "/products"}
                ctaText={service.ctaText}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
