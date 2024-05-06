import { useInView, motion, delay } from "framer-motion";
import { useRef } from "react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { aboutMe } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Card } from "./ui/card";
import ColorCard from "./color-card";

const slideUp = {
  initial: {
    y: "100%",
  },
  open: (i: number) => ({
    y: "0%",
    transition: { duration: 0.5, delay: 0.01 * i },
  }),
  closed: {
    y: "100%",
    transition: { duration: 0.5 },
  },
};

const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const slideLeft = {
  initial: {
    x: "30%",
    opacity: 0,
  },
  open: (i: number) => ({
    x: "0%",
    transition: { duration: 0.8, delay: 0.01 * i },
  }),
  closed: {
    x: "30%",
    opacity: 0,
    transition: { duration: 0.8 },
  },
};

export default function About() {
  const phrase = aboutMe.longDesc;
  const description = useRef(null);
  const isInViewDesc = useInView(description);

  const aboutUI = useRef(null);
  const isInViewUI = useInView(aboutUI);

  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <div ref={description}>
        <div className="relative flex flex-col items-center gap-12 mt-12 lg:items-start lg:flex-row">
          <p className="gap-2 m-0 leading-10 text-lg sm:text-2xl md:text-3xl">
            {phrase.split(" ").map((word, index) => {
              return (
                <span
                  className="relative inline-flex overflow-hidden"
                  key={index}
                >
                  <motion.span
                    variants={slideUp}
                    custom={index}
                    animate={isInViewDesc ? "open" : "closed"}
                    key={index}
                    className="mr-1 sm:mb-2"
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </p>
          <motion.p
            variants={opacity}
            className="w-4/5 m-0 font-light sm:text-lg"
            animate={isInViewDesc ? "open" : "closed"}
          >
            {aboutMe.shortDesc}
          </motion.p>
        </div>
      </div>
      <div
        className="flex flex-col lg:flex-row gap-16 lg:gap-20 justify-center items-center mt-20"
        ref={aboutUI}
      >
        <motion.div
          className="text-start"
          variants={slideLeft}
          custom={0}
          animate={isInViewUI ? "open" : "closed"}
        >
          <p className="text-lg">Font</p>
          <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl">
            {aboutMe.favFont}
          </h1>
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          variants={slideLeft}
          custom={1}
          animate={isInViewUI ? "open" : "closed"}
        >
          <ColorCard color={aboutMe.primaryColor} />
          <ColorCard color={aboutMe.secondaryColor} />
          <ColorCard color={aboutMe.accentColor} />
        </motion.div>
      </div>
    </motion.section>
  );
}
