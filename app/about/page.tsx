import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHeader from "@/components/ui/PageHeader";
import Band from "@/components/ui/Band";
import Button from "@/components/ui/Button";
import FeatureIcon from "@/components/ui/FeatureIcon";
import { ABOUT_STATS, TEAM } from "@/lib/content";
import {
  Crop,
  Globe,
  Clock,
  ShieldCheck,
  Agribusiness,
  Input,
} from "@/components/icons";

const WHY_CHOOSE_US = [
  {
    icon: Crop,
    title: "Tailored Solutions",
    desc: "Designed for the agricultural sector.",
  },
  {
    icon: Globe,
    title: "Technology-Driven",
    desc: "Leveraging satellite data and digital platforms for efficiency.",
  },
  {
    icon: Clock,
    title: "Fast & Transparent Process",
    desc: "From onboarding to claims payouts.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Pricing",
    desc: "No hidden fees. Clear, honest quotes for all services.",
  },
];

const CORE_VALUES = [
  {
    icon: Input,
    title: "Innovation",
    desc: "Leveraging technology to deliver smart solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    desc: "Building trust through consistent service delivery.",
  },
  {
    icon: Crop,
    title: "Sustainability",
    desc: "Promoting long-term financial and agricultural stability.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <PageHeader crumb="About" title="About" highlight="Agricom Assurance.">
        We are a leading AgriTech insurance provider empowering farmers,
        agribusinesses and rural communities with transparent, technology-driven
        cover.
      </PageHeader>

      {/* Story */}
      <section className="section pt-5">
        <Container className="grid grid-cols-1 items-center gap-[50px] lg:grid-cols-2">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-xl border border-lime-400/40 shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1100&q=80&auto=format&fit=crop"
              alt="Farmers in field"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={80}>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-3.5 text-[clamp(21px,2.4vw,32px)]">
              Protection made simple, fast and affordable.
            </h2>
            <p className="mt-[26px] text-[clamp(15px,1.25vw,18px)] text-body">
              Started with a passion for helping smallholder farmers, we blend
              insurance expertise with data and satellite insights to make
              protection simple, fast and affordable.
            </p>
            <p className="mt-3.5 text-[clamp(15px,1.25vw,18px)] text-body">
              We rebuilt agricultural insurance from the ground up: transparent
              terms, satellite-verified claims, and payouts that arrive in time
              to replant protecting tens of thousands of farmers across crops
              and agribusiness.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Why choose us */}
      <section className="section pt-0">
        <Container>
          <SectionHeading eyebrow="Why Agricom" title="Why choose us?">
            Whether you need quick support, a season-long cover, or regular risk
            advisory, we bring honest pricing, reliable service and a
            customer-first mindset.
          </SectionHeading>
          <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2">
            {WHY_CHOOSE_US.map((item, index) => (
              <Reveal
                key={item.title}
                delay={(index % 2) * 80}
                className="group flex items-start gap-5 rounded-lg border border-mist-200 bg-white p-[26px] shadow-sm transition-[transform,box-shadow] duration-300 ease-smooth hover:-translate-y-1 hover:border-green-500/40 hover:shadow-md"
              >
                <FeatureIcon icon={item.icon} className="flex-none" />
                <div className="min-w-0">
                  <h3 className="text-[17px]">{item.title}</h3>
                  <p className="mt-1.5 text-[13.5px] text-muted">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Core values */}
      <section className="section pt-0">
        <Container>
          <SectionHeading center eyebrow="What drives us" title="Core values." />
          <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-3">
            {CORE_VALUES.map((value, index) => (
              <Reveal
                key={value.title}
                delay={(index % 3) * 80}
                className="group rounded-lg border border-mist-200 bg-white p-[30px] text-center shadow-sm transition-[transform,box-shadow] duration-300 ease-smooth hover:-translate-y-1.5 hover:border-green-500/40 hover:shadow-md"
              >
                <FeatureIcon icon={value.icon} className="mx-auto mb-5" />
                <h3 className="text-[17px]">{value.title}</h3>
                <p className="mt-2 text-[13.5px] text-muted">{value.desc}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="section pt-0">
        <Container>
          <SectionHeading
            center
            eyebrow="Where we're headed"
            title="Our mission & vision."
          />
          <div className="grid grid-cols-1 gap-[22px] md:grid-cols-2">
            <Reveal className="rounded-xl border border-mist-200 bg-white p-[clamp(28px,4vw,40px)] shadow-sm">
              <FeatureIcon icon={Globe} className="mb-5" />
              <h3 className="text-[clamp(18px,1.8vw,22px)]">Our vision</h3>
              <p className="mt-2.5 text-[clamp(15px,1.25vw,18px)] text-body">
                To be the leading provider of agricultural financial solutions
                in Africa.
              </p>
            </Reveal>
            <Reveal
              delay={80}
              className="rounded-xl border border-mist-200 bg-white p-[clamp(28px,4vw,40px)] shadow-sm"
            >
              <FeatureIcon icon={Agribusiness} className="mb-5" />
              <h3 className="text-[clamp(18px,1.8vw,22px)]">Our mission</h3>
              <p className="mt-2.5 text-[clamp(15px,1.25vw,18px)] text-body">
                To ensure financial stability for farmers through innovative,
                inclusive and reliable services.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Stats band */}
      <section className="section pt-0">
        <Container>
          <Reveal>
            <Band
              image="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1700&q=80&auto=format&fit=crop"
              alt="Fields"
              innerClassName="p-[clamp(40px,5vw,64px)]"
            >
              <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
                {ABOUT_STATS.map((stat) => (
                  <div key={stat.label}>
                    <b className="block font-display text-[clamp(26px,3.2vw,39px)] font-bold text-white">
                      {stat.value}
                    </b>
                    <span className="text-[#EAF6EA]/[.82]">{stat.label}</span>
                  </div>
                ))}
              </div>
            </Band>
          </Reveal>
        </Container>
      </section>

      {/* Team */}
      <section className="section pt-0">
        <Container>
          <SectionHeading
            center
            eyebrow="The people"
            title="Agronomists, actuaries & engineers."
          />
          <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member, index) => (
              <Reveal
                key={member.name}
                delay={(index % 4) * 80}
                className="overflow-hidden rounded-lg border border-mist-200 bg-white shadow-sm transition-[transform,box-shadow] duration-300 ease-smooth hover:-translate-y-1.5 hover:shadow-md"
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-[16px]">{member.name}</h3>
                  <p className="font-display text-[12.5px] font-semibold text-green-600">
                    {member.role}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Partner CTA */}
      <section className="section pt-0">
        <Container>
          <Reveal className="glass p-[clamp(40px,5vw,64px)] text-center">
            <h2 className="text-[clamp(21px,2.8vw,36px)]">
              Want to partner with us?
            </h2>
            <p className="mx-auto mt-3.5 max-w-[62ch] text-[clamp(15px,1.25vw,18px)] text-body">
              We work with cooperatives, lenders and development partners to
              extend cover where it&apos;s needed most.
            </p>
            <Button href="/contact" size="lg" className="mt-11">
              Start a conversation
            </Button>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
