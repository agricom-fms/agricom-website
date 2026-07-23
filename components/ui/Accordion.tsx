"use client";

import { useState } from "react";

interface AccordionItem {
  question: string;
  answer: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-3 mt-6">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="rounded-lg border border-mist-200 bg-white overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between p-4 text-left font-medium text-body hover:bg-mist-50 transition-colors focus:outline-none"
            >
              <span>{item.question}</span>
              <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="p-4 pt-0 text-[15px] text-muted">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
