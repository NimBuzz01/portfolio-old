"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Innovative Front-End Developer and UI/UX Designer with a passion for
        creating engaging digital experiences. Equipped with a keen eye for
        detail and a deep understanding of user-centered design principles, I
        bring creativity and technical expertise to every project.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games. I also enjoy learning new things.
      </p>
    </motion.section>
  );
}
