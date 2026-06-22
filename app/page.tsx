import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import ServicesPreview from "@/components/sections/ServicesPreview";
import WhyUs from "@/components/sections/WhyUs";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonial from "@/components/sections/Testimonial";
import CtaBand from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <ServicesPreview />
      <WhyUs />
      <HowItWorks />
      <Testimonial />
      <CtaBand
        eyebrow="Ready when you are"
        title="Protect your harvest before the next season."
        text="Get a transparent quote in minutes. No paperwork, no jargon."
        image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1700&q=80&auto=format&fit=crop"
        imageAlt="Golden fields at sunset"
        primary={{ label: "Get a free quote", href: "/contact" }}
        secondary={{ label: "Browse all services", href: "/services" }}
      />
    </main>
  );
}
