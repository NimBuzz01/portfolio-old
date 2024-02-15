import React from "react";
import { motion } from "framer-motion";

const heading1: string = `Hi  There, I'm`;
const heading2: string = `Niamat  Marjan.`;
const description: string = `A passionate frontend developer & web designer propelling
visions to reality`;

export default function Landing() {
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03 + 2.8,
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
        delay: 3.3 + Math.max(heading1.length, heading2.length) * 0.02,
        duration: 2,
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
  };

  const renderText = (text: string, startDelay: number = 0) =>
    text.split("").map((char, i) => (
      <motion.span key={i} custom={startDelay + i} variants={letterVariants}>
        {char}
      </motion.span>
    ));

  return (
    <div className="flex h-screen sm:justify-center sm:items-center ">
      <div className="p-6 max-w-[25rem] sm:flex sm:flex-col sm:items-center mt-auto mb-10 sm:mt-0 sm:max-w-[70%] w-full sm:text-center">
        <motion.h1
          className="flex gap-2 flex-col text-gray-800 tracking-tight text-4xl sm:text-5xl md:text-6xl lg-text-7xl xl:text-8xl 2xl:text-9xl uppercase font-extrabold"
          initial="hidden"
          animate="visible"
        >
          <span className="sm:-translate-x-36">{renderText(heading1)}</span>
          <span className="sm:translate-x-16">{renderText(heading2)}</span>
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
