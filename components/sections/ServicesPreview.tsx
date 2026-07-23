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
          eyebrow="What we cover"
          title="Protection for every stage of the growing cycle."
        >
          Modular policies built around real agricultural risk backed by
          satellite data, weather indices and a claims process you can actually
          trust.
        </SectionHeading>
        <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 80}>
              <ServiceCard
                icon={ICONS[service.icon]}
                title={service.title}
                desc={service.desc}
                href={service.href || "/products"}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
