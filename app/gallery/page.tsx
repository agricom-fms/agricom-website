import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import GalleryGrid from "@/components/sections/GalleryGrid";

export default function GalleryPage() {
  return (
    <main>
      <PageHeader crumb="Gallery" title="From the field," highlight="in full colour.">
        Moments from the farms, cooperatives and communities we protect. Tap any
        image to view it larger.
      </PageHeader>

      <section className="section pt-1">
        <Container>
          <GalleryGrid />
        </Container>
      </section>
    </main>
  );
}
