"use client";
import React from "react";
import { ParallaxGallery } from "../ui/parallax-gallery";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "../section-heading";
import { galleryItems } from "@/lib/data/gallery";

export function Designs() {
  const { ref } = useSectionInView("Designs");

  return (
    <section
      id="designs"
      ref={ref}
      className="w-full mb-28 scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>My Designs</SectionHeading>
      <ParallaxGallery items={galleryItems} />
    </section>
  );
}
