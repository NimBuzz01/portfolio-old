import React, { useRef } from "react";
import Description from "./description/description";
import { motion, useInView } from "framer-motion";

const phrases = ["About Me"];

const about = () => {
  return (
    <main className="bg-gray-800 rounded-2xl">
      <MaskText />
      <Description />
    </main>
  );
};

export default about;

export function MaskText() {
  const body = useRef(null);

  const isInView = useInView(body, { once: true, margin: "-75%" });

  const animation = {
    initial: { y: "100%" },

    enter: (i: number) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  return (
    <div ref={body} className="text-6xl font-bold text-gray-200">
      {phrases.map((phrase, index) => {
        return (
          <div key={index}>
            <motion.p
              custom={index}
              variants={animation}
              initial="initial"
              animate={isInView ? "enter" : ""}
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}
