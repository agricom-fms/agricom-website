import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import ProjectGrid from "@/components/sections/ProjectGrid";
import CtaBand from "@/components/sections/CtaBand";

export default function PortfolioPage() {
  return (
    <main>
      <PageHeader crumb="Portfolio" title="Cover in action," highlight="season after season.">
        Real cooperatives, real payouts, real harvests saved. Explore a
        selection of the programmes we&apos;ve delivered across crops, livestock
        and agribusiness.
      </PageHeader>

      <section className="section pt-1">
        <Container>
          <ProjectGrid />
        </Container>
      </section>

      <CtaBand
        title="Your cooperative could be the next success story."
        image="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1700&q=80&auto=format&fit=crop"
        imageAlt="Farmers"
        titleClassName="max-w-[18ch] text-[clamp(28px,4vw,52px)]"
        primary={{ label: "Start your programme", href: "/contact" }}
      />
    </main>
  );
}
