import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHeader from "@/components/ui/PageHeader";
import CtaBand from "@/components/sections/CtaBand";
import FeatureIcon from "@/components/ui/FeatureIcon";
import { Globe, Users, ShieldCheck, Equipment } from "@/components/icons";

const CAPABILITIES = [
  "Farmer Registration & Profiling",
  "GPS Farm Mapping",
  "Satellite Crop Monitoring",
  "Weather & Climate Intelligence",
  "AI Risk Scoring",
  "Early Warning Systems",
  "Digital Claims Verification",
  "Farmer Communication Infrastructure",
  "Local-Language Voice Notifications",
  "SMS & USSD Integration",
  "Data Analytics & Reporting",
];

const BUILT_FOR = [
  "Insurance Companies",
  "Governments",
  "Development Organizations",
  "NGOs",
  "Agribusinesses",
  "Financial Institutions",
  "Cooperatives",
  "Agricultural Projects",
];

const WHY_PLATFORM = [
  "Reduce operational costs",
  "Improve underwriting accuracy",
  "Monitor farms remotely",
  "Scale agricultural insurance efficiently",
  "Deliver proactive climate advisory",
  "Enable data-driven decision making",
];

export default function PlatformPage() {
  return (
    <main>
      <PageHeader
        crumb={
          <>
            <Link href="/services" className="transition-colors hover:text-green-600">
              Services
            </Link>
            <span className="opacity-50">/</span>
            <span>Agricom Platform</span>
          </>
        }
        title="Climate Intelligence"
        highlight="Platform"
      >
        Digital Infrastructure for Climate Smart Agriculture & Insurance
      </PageHeader>

      <section className="section pt-5">
        <Container>
          <Reveal className="glass p-[clamp(30px,5vw,50px)]">
            <h2 className="text-[clamp(21px,2.4vw,31px)] mb-4">Smarter, Data-Driven Services</h2>
            <p className="text-body mb-4 text-[clamp(15px,1.25vw,18px)]">
              Agricom's Climate Intelligence infrastructure is a digital agricultural infrastructure that enables insurers, governments, agribusinesses, development organizations, financial institutions, and agricultural projects to deliver smarter, data-driven agricultural services at scale.
            </p>
            <p className="text-body text-[clamp(15px,1.25vw,18px)]">
              The platform combines satellite intelligence, AI-powered analytics, geospatial farm mapping, farmer digitization, weather intelligence, and digital communication tools to improve risk management, agricultural productivity, and insurance delivery across the agricultural ecosystem. This digital intelligence layer is designed to reduce operational costs, improve underwriting decisions, and enable scalable agricultural insurance.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="section pt-0">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal className="glass p-[30px]">
              <FeatureIcon icon={Globe} className="mb-4" />
              <h3 className="text-xl mb-4">Platform Capabilities</h3>
              <ul className="space-y-3">
                {CAPABILITIES.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">●</span>
                    <span className="text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100} className="glass p-[30px]">
              <FeatureIcon icon={Users} className="mb-4" />
              <h3 className="text-xl mb-4">Built For</h3>
              <ul className="space-y-3">
                {BUILT_FOR.map((item, i) => (
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
          <Reveal className="rounded-xl border border-mist-200 bg-white p-[30px] shadow-sm">
            <SectionHeading title="Why Our Platform?" eyebrow={""} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {WHY_PLATFORM.map((item, i) => (
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
        title="Power your agricultural services."
        image="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=1700&q=80&auto=format&fit=crop"
        imageAlt="Digital analytics dashboard"
        primary={{ label: "Request a Demo", href: "/contact" }}
      />
    </main>
  );
}
