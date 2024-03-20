"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const words1 = ["Hi", "There,", "I'm"];
const words2 = ["Niamat", "Marjan."];
const description: string = `A passionate frontend developer & web designer propelling
visions to reality`;

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05 + 2.8,
        duration: 0.3,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 3.5,
        duration: 2,
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
  };

  const renderText = (words: string[], startDelay: number = 0) =>
    words.map((word, i) => (
      <React.Fragment key={i}>
        {word.split("").map((char, j) => (
          <motion.span
            key={j}
            custom={startDelay + i + j * 0.05}
            variants={letterVariants}
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
      className="mb-28 lg:mt-24 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="p-6 sm:flex z-10 sm:flex-col sm:items-center mt-auto sm:mt-0 w-full sm:text-center">
        <motion.h1
          className="flex text-4xl sm:text-5xl md:text-6xl lg-text-7xl xl:text-8xl 2xl:text-9xl uppercase font-extrabold sm:-translate-x-24 md:-translate-x-28 lg:-translate-x-32 xl:-translate-x-36"
          initial="hidden"
          animate="visible"
        >
          {renderText(words1)}
        </motion.h1>
        <motion.h1
          className="flex text-4xl sm:text-5xl md:text-6xl lg-text-7xl xl:text-8xl 2xl:text-9xl uppercase font-extrabold sm:translate-x-6 md:translate-x-8 lg:translate-x-10 xl:translate-x-12"
          initial="hidden"
          animate="visible"
        >
          {renderText(words2)}
        </motion.h1>
        <motion.p
          className=" text-start sm:text-center text-lg sm:text-xl md:text-2xl w-full leading-tight mt-3 sm:mt-10 sm:max-w-96 md:max-w-[34rem]"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          {description}
        </motion.p>
      </div>

      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 3.6,
        }}
      >
        <Link
          href="#contact"
          className="flex min-w-[11rem] justify-center items-center gap-2 py-3 text-white text-sm sm:text-base transition bg-gray-900 rounded-full outline-none group px-7 focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-105"
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
          href="/niamatmarjan-cv.pdf"
          download
        >
          Download CV <HiDownload className="transition opacity-60" />
        </a>
        <div className="flex gap-2 items-center justify-center">
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/niamatm/"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white justify-center p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-105 hover:scale-105 hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
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
