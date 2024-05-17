"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/hooks/useSection";
import { useSection } from "@/hooks/useSection";
import { slideUpDesc, slideUpHeading } from "@/lib/anim";

const words1 = ["Hi", "There,", "I'm"];
const words2 = ["Niamat", "Marjan."];
const description: string = `A passionate frontend developer & web designer propelling
visions to reality`;

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useSection();

  const renderText = (words: string[], startDelay: number = 0) =>
    words.map((word, i) => (
      <React.Fragment key={i}>
        {word.split("").map((char, j) => (
          <motion.span
            key={j}
            custom={startDelay + i + j * 0.05}
            variants={slideUpHeading}
            className="tracking-tighter"
          >
            {char}
          </motion.span>
        ))}
        {i < words.length - 1 && <span>&nbsp;</span>}
      </React.Fragment>
    ));

  return (
    <section
      ref={ref}
      id="home"
      className="h-screen relative flex flex-col justify-center items-center"
    >
      <div className="w-full">
        <motion.h1
          className="flex w-full self-start text-4xl sm:text-5xl md:text-6xl lg-text-7xl xl:text-8xl 2xl:text-9xl uppercase font-bold"
          initial="hidden"
          animate="visible"
        >
          {renderText(words1)}
        </motion.h1>
        <motion.h1
          className="flex text-4xl sm:text-5xl md:text-6xl lg-text-7xl xl:text-8xl 2xl:text-9xl uppercase font-bold"
          initial="hidden"
          animate="visible"
        >
          {renderText(words2)}
        </motion.h1>
      </div>
      <motion.p
        className="sm:text-center mb-8 sm:text-xl md:text-2xl w-full mt-6 sm:mt-10 sm:max-w-96 md:max-w-[34rem]"
        initial="hidden"
        animate="visible"
        variants={slideUpDesc}
        custom={0}
      >
        {description}
      </motion.p>
      <motion.div
        className="flex flex-wrap items-center gap-2 sm:px-4 text-lg font-medium"
        initial="hidden"
        animate="visible"
        variants={slideUpDesc}
        custom={1}
      >
        <Link
          href="#contact"
          className="flex min-w-[11rem] justify-center items-center gap-2 py-3  text-sm sm:text-base transition rounded-full outline-none group px-7 focus:scale-105 hover:scale-105 active:scale-105             bg-cmaccent dark:bg-cmaccent/80 text-cmsecondary  hover:dark:bg-cmaccent  hover:bg-cmaccent/80"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me{" "}
          <BsArrowRight className="transition opacity-70 group-hover:translate-x-1" />
        </Link>

        <a
          className="flex min-w-[11rem] justify-center text-sm sm:text-base items-center gap-2 py-3 transition bg-white rounded-full outline-none cursor-pointer group px-7 focus:scale-105 hover:scale-105 active:scale-105 borderBlack dark:bg-white/10"
          href="/niamatmarjan-resume.pdf"
          download
        >
          Download CV <HiDownload className="transition opacity-60" />
        </a>
        <div className="flex gap-2 items-center justify-center">
          <a
            className="bg-white p-4 text-gray-700 hover:text-cmaccent flex items-center gap-2 rounded-full focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/niamatm/"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white justify-center p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-105 hover:scale-105 hover:text-cmaccent active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/NimBuzz01"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
