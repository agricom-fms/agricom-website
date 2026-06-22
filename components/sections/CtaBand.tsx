import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Band from "@/components/ui/Band";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";

interface CtaBandProps {
  eyebrow?: string;
  title: string;
  text?: string;
  image: string;
  imageAlt?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  titleClassName?: string;
}

/**
 * Reusable closing call-to-action band (image background + centered copy).
 */
export default function CtaBand({
  eyebrow,
  title,
  text,
  image,
  imageAlt = "",
  primary = { label: "Get a free quote", href: "/contact" },
  secondary,
  titleClassName = "text-[clamp(30px,4.5vw,58px)]",
}: CtaBandProps) {
  return (
    <section className="section pt-0">
      <Container>
        <Reveal>
          <Band
            image={image}
            alt={imageAlt}
            innerClassName="p-[clamp(44px,7vw,90px)] text-center"
          >
            {eyebrow && (
              <Eyebrow center className="!text-lime-300">
                {eyebrow}
              </Eyebrow>
            )}
            <h2
              className={`mx-auto mt-4 max-w-[18ch] text-white ${titleClassName}`}
            >
              {title}
            </h2>
            {text && (
              <p className="mx-auto mt-[18px] max-w-[58ch] text-[clamp(17px,1.4vw,20px)] text-white/[.85]">
                {text}
              </p>
            )}
            <div className="mt-[34px] flex flex-wrap justify-center gap-3.5">
              <Button href={primary.href} size="lg">
                {primary.label}
              </Button>
              {secondary && (
                <Button href={secondary.href} size="lg" variant="ghost-light">
                  {secondary.label}
                </Button>
              )}
            </div>
          </Band>
        </Reveal>
      </Container>
    </section>
  );
}
