import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

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

export default function About() {
  const phrase = `Innovative Front-End Developer and UI/UX Designer with a passion for creating engaging digital experiences. Equipped with a keen eye for detail and a deep understanding of user-centered design principles, I bring creativity and technical expertise to every project.`;
  const description = useRef(null);
  const isInView = useInView(description);
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[1200px] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <div ref={description}>
        <div className="relative flex flex-col items-center gap-12 mt-12 lg:items-start lg:flex-row">
          <p className="gap-2 m-0 text-xl leading-10 sm:text-2xl md:text-3xl">
            {phrase.split(" ").map((word, index) => {
              return (
                <span
                  className="relative inline-flex overflow-hidden"
                  key={index}
                >
                  <motion.span
                    variants={slideUp}
                    custom={index}
                    animate={isInView ? "open" : "closed"}
                    key={index}
                    className="mr-1"
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
            animate={isInView ? "open" : "closed"}
          >
            When I'm not coding, I enjoy playing video games. I also enjoy
            learning new things.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}
