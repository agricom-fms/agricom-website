import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHeader from "@/components/ui/PageHeader";
import ExpandableServiceCard from "@/components/ui/ExpandableServiceCard";
import FeatureRow from "@/components/sections/FeatureRow";
import CtaBand from "@/components/sections/CtaBand";
import { SERVICE_FEATURES, AGRICOM_SERVICES } from "@/lib/content";
import { ICONS } from "@/components/icons";

export default function ServicesPage() {
  return (
    <main>
      <PageHeader crumb="Products" title="Cover for every acre, herd" highlight="and harvest.">
        Modular agricultural insurance built on real risk data. Mix and match
        the protection your operation needs from a single smallholder plot to a
        regional cooperative.
      </PageHeader>

      {/* Feature rows */}
      <section className="section pt-5">
        <Container className="flex flex-col gap-[26px]">
          {SERVICE_FEATURES.map((f) => (
            <FeatureRow
              key={f.title}
              icon={ICONS[f.icon]}
              title={f.title}
              desc={f.desc}
              chips={f.chips}
              cta={f.cta}
              href={f.href}
              image={f.image}
              imageAlt={f.imageAlt}
              reverse={f.reverse}
            />
          ))}
        </Container>
      </section>

      {/* Services grid */}
      <section className="section pt-0">
        <Container>
          <SectionHeading center eyebrow="What we offer" title="Our services." />
          <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
            {AGRICOM_SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={(i % 3) * 80} className="h-full">
                <ExpandableServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Protect your operation."
        image="https://images.unsplash.com/photo-1625246333195-78d9c38ad576?w=1700&q=80&auto=format&fit=crop"
        imageAlt="Agricultural field"
        primary={{ label: "Get Started", href: "/contact" }}
      />
    </main>
  );
}
