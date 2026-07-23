import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHeader from "@/components/ui/PageHeader";
import CtaBand from "@/components/sections/CtaBand";
import FeatureIcon from "@/components/ui/FeatureIcon";
import Accordion from "@/components/ui/Accordion";
import { Users, ShieldCheck } from "@/components/icons";

const BENEFITS = [
  "Flexible retirement savings",
  "Hospital Cash Benefit",
  "Life Protection",
  "Long-term financial security",
  "Easy mobile access",
];

const WHO_IS_IT_FOR = [
  "Farmers",
  "Farmer Cooperatives",
  "Outgrowers",
  "Agro-processors",
  "Agricultural Input Dealers",
  "Agricultural Value Chain Participants",
];

const HOW_IT_WORKS = [
  "Dial *920*78# to register.",
  "Create your FarmerCare account.",
  "Make flexible contributions at your convenience.",
  "Track your savings and benefits digitally.",
  "Build a secure retirement while enjoying additional protection along the way.",
];

const FAQS = [
  {
    question: "How do I register?",
    answer: "You can easily register by dialing *920*78# on your mobile phone and following the prompts to create your FarmerCare account.",
  },
  {
    question: "How often can I contribute?",
    answer: "Contributions are entirely flexible. You can contribute whenever you have funds available, aligning perfectly with seasonal agricultural incomes.",
  },
  {
    question: "Can I save weekly or monthly?",
    answer: "Yes, you can choose to save weekly, monthly, or at your own pace depending on what works best for your cash flow.",
  },
  {
    question: "Is my money secure?",
    answer: "Absolutely. FarmerCare is managed in partnership with regulated financial institutions and trusted partners to ensure your savings are fully protected and secure.",
  },
  {
    question: "How do I access my retirement benefits?",
    answer: "You can track and manage your benefits digitally via USSD or the Agricom app. When eligible, you can initiate a withdrawal request which will be securely processed to your mobile money wallet or bank account.",
  },
];

export default function FarmerCarePage() {
  return (
    <main>
      <PageHeader
        crumb={
          <>
            <Link href="/products" className="transition-colors hover:text-green-600">
              Products
            </Link>
            <span className="opacity-50">/</span>
            <span>FarmerCare</span>
          </>
        }
        title="Save Today."
        highlight="Retire with Dignity."
      >
        Flexible micro-pension solution designed for farmers and participants across the agricultural value chain.
      </PageHeader>

      <section className="section pt-5">
        <Container>
          <Reveal className="glass p-[clamp(30px,5vw,50px)]">
            <h2 className="text-[clamp(21px,2.4vw,31px)] mb-4">Why FarmerCare?</h2>
            <p className="text-body mb-4 text-[clamp(15px,1.25vw,18px)]">
              Millions of people working within agriculture reach old age without a structured retirement plan. FarmerCare empowers them to build financial security for tomorrow without disrupting today's livelihood.
            </p>
            <p className="text-body text-[clamp(15px,1.25vw,18px)]">
              Built around the realities of seasonal agricultural incomes, FarmerCare makes retirement planning simple, accessible, and sustainable. It enables individuals to build long-term retirement savings through affordable, flexible contributions while enjoying additional protection benefits that provide peace of mind throughout their working years.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="section pt-0">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal className="glass p-[30px]">
              <FeatureIcon icon={ShieldCheck} className="mb-4" />
              <h3 className="text-xl mb-4">Benefits</h3>
              <ul className="space-y-3">
                {BENEFITS.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">●</span>
                    <span className="text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100} className="glass p-[30px]">
              <FeatureIcon icon={Users} className="mb-4" />
              <h3 className="text-xl mb-4">Who Is It For?</h3>
              <ul className="space-y-3">
                {WHO_IS_IT_FOR.map((item, i) => (
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
            <SectionHeading title="Frequently Asked Questions" eyebrow={""} />
            <Accordion items={FAQS} />
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Secure your future."
        image="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1700&q=80&auto=format&fit=crop"
        imageAlt="FarmerCare MicroPensions"
        primary={{ label: "Start Saving Today", href: "/contact" }}
      />
    </main>
  );
}
