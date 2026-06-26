import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import BlogGrid from "@/components/sections/BlogGrid";
import CtaBand from "@/components/sections/CtaBand";

export default function BlogPage() {
  return (
    <main>
      <PageHeader crumb="Blog" title="Field notes," highlight="season after season.">
        Stories, results and lessons from the cooperatives we work with across
        crops and agribusiness. Real payouts, real harvests saved.
      </PageHeader>

      <section className="section pt-1">
        <Container>
          <BlogGrid />
        </Container>
      </section>

      <CtaBand
        title="Your cooperative could be the next success story."
        image="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1700&q=80&auto=format&fit=crop"
        imageAlt="Farmers"
        titleClassName="max-w-[18ch] text-[clamp(22px,3.2vw,42px)]"
        primary={{ label: "Get Started", href: "/contact" }}
      />
    </main>
  );
}
