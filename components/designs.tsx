"use client";
import React from "react";
import { ParallaxGallery } from "./ui/parallax-gallery";
import { useSectionInView } from "@/lib/hooks";
import { galleryItems } from "@/lib/data";
import SectionHeading from "./section-heading";

export function Designs() {
  const { ref } = useSectionInView("Designs");

  return (
    <section
      id="designs"
      ref={ref}
      className="w-full mb-28 max-w-[66rem] scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>My Designs</SectionHeading>
      <ParallaxGallery items={galleryItems} />
    </section>
  );
}
