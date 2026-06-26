import Link from "next/link";
import Container from "@/components/ui/Container";
import NewsletterForm from "./NewsletterForm";
import { Logo } from "@/components/icons";
import { CONTACT, FOOTER_COLUMNS } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-forest-900 pb-[34px] pt-20 text-[#CFE6D5]">
      <div className="pointer-events-none absolute -right-20 -top-[140px] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(21,160,69,.35),transparent_70%)]" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr]">
          <div>
            <div className="mb-4 flex items-center gap-3 font-display text-[16px] font-bold text-white">
              <Logo className="h-[38px] w-[38px] flex-none object-contain" />
              Agricom Assurance
            </div>
            <p className="max-w-[34ch] text-[13px] text-[#9FC2A9]">
              Empowering farmers, agribusinesses and rural communities with
              transparent, technology-driven cover.
            </p>
            <NewsletterForm />
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading}>
              <h4 className="mb-[18px] text-[12.5px] font-semibold uppercase tracking-[0.1em] text-white">
                {column.heading}
              </h4>
              {column.links.map((link) => (
                <Link
                  key={`${column.heading}-${link.label}`}
                  href={link.href}
                  className="block py-1.5 text-[13.5px] text-[#9FC2A9] transition-colors hover:text-lime-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}

          <div>
            <h4 className="mb-[18px] text-[12.5px] font-semibold uppercase tracking-[0.1em] text-white">
              Get in touch
            </h4>
            <Link
              href="/contact"
              className="block py-1.5 text-[13.5px] text-[#9FC2A9] transition-colors hover:text-lime-300"
            >
              {CONTACT.addressShort}
            </Link>
            <a
              href={CONTACT.phoneHref}
              className="block py-1.5 text-[13.5px] text-[#9FC2A9] transition-colors hover:text-lime-300"
            >
              {CONTACT.phone}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="block py-1.5 text-[13.5px] text-[#9FC2A9] transition-colors hover:text-lime-300"
            >
              {CONTACT.email}
            </a>
          </div>
        </div>

        <div className="mt-[54px] flex flex-wrap justify-between gap-4 border-t border-white/10 pt-6 text-[12px] text-[#86A892]">
          <span>© {year} Agricom Assurance. All rights reserved.</span>
          <span>Privacy · Terms · Licensed agricultural insurer</span>
        </div>
      </Container>
    </footer>
  );
}
