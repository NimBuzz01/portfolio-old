"use client";
import Contact from "@/components/layout/contact";
import Experience from "@/components/layout/experience";
import Intro from "@/components/layout/intro";
import Preloader from "@/components/preloader";
import Projects from "@/components/layout/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/layout/skills";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import About from "@/components/layout/about";
import { CaseStudies } from "@/components/layout/case-studies";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Header from "@/components/header";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <main
      data-scroll-section
      className="container flex flex-col items-center px-4"
    >
      <Header />
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Intro />
      <SectionDivider />
      <TracingBeam>
        <About />
        <Projects />
        <CaseStudies />
        <Skills />
        <Experience />
      </TracingBeam>
      <Contact />
    </main>
  );
}
