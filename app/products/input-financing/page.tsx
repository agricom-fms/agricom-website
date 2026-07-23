import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHeader from "@/components/ui/PageHeader";
import CtaBand from "@/components/sections/CtaBand";
import FeatureIcon from "@/components/ui/FeatureIcon";
import { Users, Equipment } from "@/components/icons";

const AVAILABLE_INPUTS = [
  "Improved Seeds",
  "Fertilizers",
  "Crop Protection Products",
  "Agricultural Equipment",
  "Other Approved Farm Inputs",
];

const WHO_QUALIFIES = [
  "Smallholder Farmers",
  "Farmer Cooperatives",
  "Farmer-Based Organizations",
  "Commercial Farmers",
  "Outgrower Schemes",
];

const HOW_IT_WORKS = [
  "Register with Agricom.",
  "Complete a digital eligibility assessment.",
  "Receive approved farm inputs.",
  "Benefit from ongoing climate advisory throughout the season.",
  "Repay after harvest under an agreed repayment plan.",
];

const BENEFITS = [
  "Access inputs when needed",
  "Repay after harvest",
  "Increase productivity",
  "Reduce financial pressure",
  "Improve resilience through integrated insurance and climate advisory",
];

export default function InputFinancingPage() {
  return (
    <main>
      <PageHeader
        crumb={
          <>
            <Link href="/products" className="transition-colors hover:text-green-600">
              Products
            </Link>
            <span className="opacity-50">/</span>
            <span>Input Financing</span>
          </>
        }
        title="Finance Better Farming."
        highlight="Harvest Greater Opportunities."
      >
        Access quality agricultural inputs without the burden of upfront payment.
      </PageHeader>

      <section className="section pt-5">
        <Container>
          <Reveal className="glass p-[clamp(30px,5vw,50px)]">
            <h2 className="text-[clamp(21px,2.4vw,31px)] mb-4">Support When It Matters Most</h2>
            <p className="text-body mb-4 text-[clamp(15px,1.25vw,18px)]">
              Agricom's Input Financing solution enables farmers to access quality agricultural inputs at the beginning of the farming season without the burden of upfront payment. Through partnerships with financial institutions, agribusinesses, and input suppliers, farmers receive the support they need when it matters most and repay after harvest.
            </p>
            <p className="text-body text-[clamp(15px,1.25vw,18px)]">
              By integrating financing with climate intelligence and crop insurance, we help reduce investment risks while improving productivity and farm profitability.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="section pt-0">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal className="glass p-[30px]">
              <FeatureIcon icon={Equipment} className="mb-4" />
              <h3 className="text-xl mb-4">Available Inputs</h3>
              <ul className="space-y-3">
                {AVAILABLE_INPUTS.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">●</span>
                    <span className="text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100} className="glass p-[30px]">
              <FeatureIcon icon={Users} className="mb-4" />
              <h3 className="text-xl mb-4">Who Qualifies?</h3>
              <ul className="space-y-3">
                {WHO_QUALIFIES.map((item, i) => (
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
          <Reveal className="glass p-[clamp(30px,5vw,50px)] mb-8">
            <SectionHeading title="How It Works" eyebrow={""} />
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-6">
              {HOW_IT_WORKS.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700 font-bold">
                    {i + 1}
                  </div>
                  <span className="text-body text-lg mt-0.5">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section pt-0">
        <Container>
          <Reveal className="rounded-xl border border-mist-200 bg-white p-[30px] shadow-sm">
            <SectionHeading title="Benefits" eyebrow={""} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {BENEFITS.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">●</span>
                  <span className="text-body">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Finance your harvest."
        image="https://images.unsplash.com/photo-1530267981375-f0de937f5f13?w=1700&q=80&auto=format&fit=crop"
        imageAlt="Input Financing"
        primary={{ label: "Apply for Input Financing", href: "/contact" }}
      />
    </main>
  );
}
