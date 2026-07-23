"use client";

import { useRef } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { Linkedin, Twitter, ArrowRight } from "@/components/icons";

export default function TeamCarousel({ team }: { team: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative mt-[22px]">
      {/* Navigation Buttons */}
      <div className="absolute right-0 -top-[70px] flex items-center gap-2">
        <button
          onClick={() => scroll("left")}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-mist-200 bg-white text-mist-600 transition-[border-color,color,background-color] hover:border-green-600 hover:text-green-600"
          aria-label="Previous team members"
        >
          <ArrowRight className="h-5 w-5 rotate-180" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-mist-200 bg-white text-mist-600 transition-[border-color,color,background-color] hover:border-green-600 hover:text-green-600"
          aria-label="Next team members"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-[22px] overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {team.map((member, index) => (
          <div
            key={member.name}
            className="w-[85vw] flex-none snap-start sm:w-[calc(50%-11px)] lg:w-[calc(25%-16.5px)]"
          >
            <Reveal
              delay={(index % 4) * 80}
              className="flex h-full flex-col overflow-hidden rounded-lg border border-mist-200 bg-white shadow-sm transition-[transform,box-shadow] duration-300 ease-smooth hover:-translate-y-1.5 hover:shadow-md"
            >
              <div className="aspect-square w-full shrink-0 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h3 className="text-[16px]">{member.name}</h3>
                  <p className="font-display text-[12.5px] font-semibold text-green-600">
                    {member.role}
                  </p>
                </div>
                {(member.socials?.linkedin || member.socials?.twitter) && (
                  <div className="mt-3.5 flex items-center gap-3">
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted transition-colors hover:text-green-600"
                      >
                        <Linkedin className="h-[18px] w-[18px]" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted transition-colors hover:text-green-600"
                      >
                        <Twitter className="h-[18px] w-[18px]" />
                        <span className="sr-only">Twitter</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  );
}
