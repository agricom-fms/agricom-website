import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you’re looking for has moved or no longer exists. Find your way back to Agricom Assurance.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center pt-40 pb-24">
      <Container>
        <Reveal className="mx-auto max-w-[760px] text-center">
          <span
            aria-hidden="true"
            className="text-grad block font-display font-extrabold leading-none tracking-[-0.04em] text-[clamp(52px,11.3vw,97px)]"
          >
            404
          </span>

          <Eyebrow center className="mt-2">
            Page not found
          </Eyebrow>

          <h1 className="mx-auto mt-4 max-w-[18ch] text-[clamp(18px,2.4vw,28px)]">
            This field hasn’t been planted yet.
          </h1>

          <p className="mx-auto mt-[18px] max-w-[52ch] text-[clamp(13px,1.1vw,14px)] text-body">
            The page you’re looking for may have moved, been renamed, or never
            existed. Let’s get you back to solid ground.
          </p>

          <div className="mt-[34px] flex flex-wrap justify-center gap-3.5">
            <Button href="/" size="lg">
              Back to home
            </Button>
            <Button href="/contact" size="lg" variant="glass">
              Contact support
            </Button>
          </div>
        </Reveal>
      </Container>
    </main>
  );
}
