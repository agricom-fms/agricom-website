"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";
import { ArrowRight, Check } from "@/components/icons";

const INTERESTS = [
  "Crop Insurance",
  "Livestock Cover",
  "Weather-Index Insurance",
  "Equipment & Asset",
  "Agribusiness Cover",
  "Mobile Microcover",
];

const SIZES = [
  "Smallholder (under 2 ha)",
  "2 – 20 ha",
  "20 – 100 ha",
  "Cooperative / 100 ha+",
];

export default function ContactForm() {
  const [sent, setSent] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 4500);
  };

  return (
    <div className="glass p-[clamp(28px,4vw,46px)]">
      <h2 className="text-[clamp(22px,2.4vw,30px)]">Request a quote</h2>
      <p className="mt-2 text-[15px] text-muted">
        Fields marked with an asterisk (*) are required.
      </p>

      <form onSubmit={handleSubmit} className="mt-[26px] grid gap-[18px]">
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
          <Field label="Full name *">
            <input type="text" required placeholder="e.g. Amina Bello" className="field-input" />
          </Field>
          <Field label="Phone *">
            <input type="tel" required placeholder="+234 800 000 0000" className="field-input" />
          </Field>
        </div>

        <Field label="Email">
          <input type="email" placeholder="you@example.com" className="field-input" />
        </Field>

        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
          <Field label="I'm interested in *">
            <select required defaultValue="" className="field-input">
              <option value="" disabled>
                Select cover…
              </option>
              {INTERESTS.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </Field>
          <Field label="Farm / cooperative size">
            <select defaultValue="" className="field-input">
              <option value="" disabled>
                Select size…
              </option>
              {SIZES.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </Field>
        </div>

        <Field label="Tell us about your operation">
          <textarea
            placeholder="Crops or livestock, location, what you'd like to protect…"
            className="field-input min-h-[130px] resize-y"
          />
        </Field>

        <Button type="submit" size="lg" className="w-full">
          Send request
          <ArrowRight />
        </Button>

        {sent && (
          <div className="flex items-center gap-2.5 rounded-md border border-green-500/35 bg-green-500/[.12] px-[18px] py-3.5 font-display text-[14.5px] font-semibold text-green-700">
            <Check className="h-[18px] w-[18px]" />
            Thanks — we&apos;ve received your request and an advisor will be in
            touch shortly.
          </div>
        )}
      </form>
    </div>
  );
}

interface FieldProps {
  label: string;
  children: React.ReactNode;
}

function Field({ label, children }: FieldProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-display text-[13.5px] font-semibold text-ink-soft">
        {label}
      </span>
      {children}
    </label>
  );
}
