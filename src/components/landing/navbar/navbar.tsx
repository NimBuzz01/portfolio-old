import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const navItems = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const Navbar: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05 + 3.5, duration: 0.25 },
    }));
  }, [controls]);

  return (
    <div className="absolute flex flex-col left-8 top-8 tracking-wider text-gray-600  space-y-1 md:text-lg lg:text-xl">
      {navItems.map((link, index) => (
        <motion.a
          key={index}
          href={link.href}
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          custom={index}
          whileHover={{ fontWeight: "bold" }}
        >
          {link.title}
        </motion.a>
      ))}
    </div>
  );
};

export default Navbar;
