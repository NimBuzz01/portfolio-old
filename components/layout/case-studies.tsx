"use client";
import React from "react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "../section-heading";
import ParallaxCard from "../ui/parallax-card";
import { caseStudies, caseStudiesTemp } from "@/lib/data/case-studies";

export function CaseStudies() {
  const { ref } = useSectionInView("Case Studies", 0.2);

  return (
    <section
      id="case-studies"
      ref={ref}
      className="w-full mb-28 scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>My Case Studies</SectionHeading>
      <div>
        {caseStudiesTemp.map((item, i) => {
          return <ParallaxCard key={`p_${i}`} {...item} i={i} />;
        })}
      </div>
    </section>
  );
}
