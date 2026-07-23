import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHeader from "@/components/ui/PageHeader";
import CtaBand from "@/components/sections/CtaBand";
import FeatureIcon from "@/components/ui/FeatureIcon";
import { ShieldCheck, Globe, Users, Agribusiness, Weather, Crop } from "@/components/icons";

const COVERAGE = [
  "Drought",
  "Flooding",
  "Excessive Rainfall",
  "Pest & Disease Outbreaks",
  "Other eligible climate-related risks",
];

const HOW_IT_WORKS = [
  "Register your farm digitally.",
  "Your farm is profiled and GPS-mapped.",
  "Select an appropriate insurance plan.",
  "Receive continuous farm monitoring and climate advisory throughout the season.",
  "Eligible claims are verified using digital and satellite intelligence for faster processing.",
];

const WHO_CAN_APPLY = [
  "Smallholder Farmers",
  "Commercial Farmers",
  "Farmer-Based Organizations (FBOs)",
  "Cooperatives",
  "Agribusinesses",
];

const WHY_CHOOSE = [
  "Satellite-powered farm monitoring",
  "AI-powered risk intelligence",
  "Climate-smart farming advisory",
  "Local-language voice alerts",
  "Faster digital claims processing",
  "Affordable and accessible protection",
];

export default function CropInsurancePage() {
  return (
    <main>
      <PageHeader
        crumb={
          <>
            <Link href="/services" className="transition-colors hover:text-green-600">
              Services
            </Link>
            <span className="opacity-50">/</span>
            <span>Crop Insurance</span>
          </>
        }
        title="Protect Your Farm"
        highlight="Against Climate Risks"
      >
        Agricom Assurance delivers technology-powered crop insurance that helps farmers recover from climate-related losses while strengthening their resilience before disasters occur.
      </PageHeader>

      <section className="section pt-5">
        <Container>
          <Reveal className="glass p-[clamp(30px,5vw,50px)]">
            <h2 className="text-[clamp(21px,2.4vw,31px)] mb-4">Smarter, Faster Agricultural Insurance</h2>
            <p className="text-body mb-4 text-[clamp(15px,1.25vw,18px)]">
              By combining satellite intelligence, geospatial mapping, weather analytics, and AI-powered risk monitoring, we provide smarter, faster, and more accessible agricultural insurance.
            </p>
            <p className="text-body text-[clamp(15px,1.25vw,18px)]">
              Beyond financial protection, farmers receive personalized climate-smart advisory services through SMS, automated voice calls, and local-language notifications, helping them make better farming decisions, reduce risks, and improve productivity throughout the season.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="section pt-0">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal className="glass p-[30px]">
              <FeatureIcon icon={ShieldCheck} className="mb-4" />
              <h3 className="text-xl mb-4">What We Cover</h3>
              <ul className="space-y-3">
                {COVERAGE.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">●</span>
                    <span className="text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100} className="glass p-[30px]">
              <FeatureIcon icon={Users} className="mb-4" />
              <h3 className="text-xl mb-4">Who Can Apply?</h3>
              <ul className="space-y-3">
                {WHO_CAN_APPLY.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">●</span>
                    <span className="text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section pt-0">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Reveal className="rounded-xl border border-mist-200 bg-white p-[30px] shadow-sm">
              <SectionHeading title="How It Works" eyebrow={""} />
              <ul className="space-y-4 mt-6">
                {HOW_IT_WORKS.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="flex-none w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <span className="text-body pt-1">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100} className="rounded-xl border border-mist-200 bg-white p-[30px] shadow-sm">
              <SectionHeading title="Why Choose Agricom?" eyebrow={""} />
              <ul className="space-y-3 mt-6">
                {WHY_CHOOSE.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">●</span>
                    <span className="text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Protect your operation."
        image="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1700&q=80&auto=format&fit=crop"
        imageAlt="Agricultural field"
        primary={{ label: "Protect My Farm", href: "/contact" }}
      />
    </main>
  );
}
