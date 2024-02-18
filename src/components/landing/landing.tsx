import React from "react";
import { motion } from "framer-motion";
import Navbar from "./navbar/navbar";

const words1 = ["Hi", "There,", "I'm"];
const words2 = ["Niamat", "Marjan."];
const description: string = `A passionate frontend developer & web designer propelling
visions to reality`;

export default function Landing() {
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
    <div className="flex h-screen sm:justify-center sm:items-center ">
      <Navbar />
      <div className="p-6  sm:flex sm:flex-col sm:items-center mt-auto mb-10 sm:mt-0 w-full sm:text-center">
        <motion.h1
          className="flex text-gray-800 text-4xl sm:text-6xl md:text-7xl lg-text-8xl xl:text-9xl 2xl:text-10xl uppercase font-extrabold sm:-translate-x-24 md:-translate-x-28 lg:-translate-x-32 xl:-translate-x-36"
          initial="hidden"
          animate="visible"
        >
          {renderText(words1)}
        </motion.h1>
        <motion.h1
          className="flex text-gray-800 text-4xl sm:text-6xl md:text-7xl lg-text-8xl xl:text-9xl 2xl:text-10xl uppercase font-extrabold sm:translate-x-6 md:translate-x-8 lg:translate-x-10 xl:translate-x-12"
          initial="hidden"
          animate="visible"
        >
          {renderText(words2)}
        </motion.h1>
        <motion.p
          className="text-gray-500 sm:text-center text-lg sm:text-xl md:text-2xl w-full leading-tight mt-3 sm:mt-10 sm:max-w-96 md:max-w-[34rem]"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
}
