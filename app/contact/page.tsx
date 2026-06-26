import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHeader from "@/components/ui/PageHeader";
import Band from "@/components/ui/Band";
import ContactForm from "@/components/sections/ContactForm";
import { MapPin, Phone, Mail, Clock } from "@/components/icons";
import { CONTACT } from "@/lib/content";

const DETAILS = [
  { icon: MapPin, title: "Head office", body: CONTACT.address },
  {
    icon: Phone,
    title: "Call us",
    body: CONTACT.phone,
    href: CONTACT.phoneHref,
  },
  {
    icon: Mail,
    title: "Email",
    body: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  { icon: Clock, title: "Hours", body: CONTACT.hours },
];

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        crumb="Contact"
        title="Let's protect"
        highlight="your harvest."
      >
        Tell us about your farm or cooperative and we&apos;ll put together a
        transparent quote usually within one working day.
      </PageHeader>

      <section className="pb-[clamp(32px,4vw,56px)] pt-1">
        <Container className="grid grid-cols-1 items-start gap-[30px] lg:grid-cols-[1.15fr_.85fr]">
          {/* Form */}
          <Reveal>
            <ContactForm />
          </Reveal>

          {/* Details */}
          <div className="flex flex-col gap-[22px]">
            <Reveal delay={80} className="glass p-[clamp(24px,3vw,32px)]">
              {DETAILS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`flex items-start gap-3.5 py-[18px] ${
                      i < DETAILS.length - 1 ? "border-b border-ink/[.08]" : ""
                    }`}
                  >
                    <span className="grid h-[46px] w-[46px] flex-none place-items-center rounded-[13px] bg-[linear-gradient(135deg,rgba(21,160,69,.14),rgba(134,212,79,.2))] text-green-600">
                      <Icon className="h-[22px] w-[22px]" />
                    </span>
                    <div>
                      <h4 className="mb-0.5 font-display text-[13.5px] text-ink">
                        {item.title}
                      </h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-[13px] text-muted transition-colors hover:text-green-600"
                        >
                          {item.body}
                        </a>
                      ) : (
                        <p className="text-[13px] text-muted">{item.body}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </Reveal>

            {/* Map teaser */}
            <Reveal delay={160}>
              <Band
                image="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=1100&q=80&auto=format&fit=crop"
                alt="Map of region"
                className="flex min-h-[220px] items-end rounded-lg"
                innerClassName="p-[26px]"
              >
                <div>
                  <span className="inline-flex items-center rounded-pill border border-white/[.34] bg-white/[.12] px-3.5 py-1.5 font-display text-[11px] font-semibold text-white backdrop-blur-[12px]">
                    24 field offices nationwide
                  </span>
                  <p className="mt-3 font-display text-[15px] font-semibold text-white">
                    An advisor is never far from your farm.
                  </p>
                </div>
              </Band>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Map */}
      <section className="pt-0 mb-10">
        <Container>
          <Reveal className="overflow-hidden rounded-sm border border-mist-200 shadow-sm">
            <iframe
              title="Agricom Assurance office location"
              src="https://www.google.com/maps?q=Accra,Ghana&output=embed"
              className="block h-[clamp(420px,55vw,640px)] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
