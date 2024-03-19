import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../anim";
import NavLink from "./nav-link";
import NavFooter from "./nav-footer";
import NavCurve from "./nav-curve";

const navItems = [
  {
    title: "Home",
    href: "#",
  },
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

export default function Nav() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="h-screen bg-gray-800 w-full sm:w-[26rem] fixed right-0 top-0 text-white z-20"
    >
      <div className="h-full box-border p-12 w-full flex flex-col justify-between">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="flex flex-col text-5xl gap-[12px] mt-16"
        >
          <div className="text-gray-200 border-b border-gray-200 uppercase text-sm mb-8">
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <NavLink
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></NavLink>
            );
          })}
        </div>
        <NavFooter />
      </div>
      <NavCurve />
    </motion.div>
  );
}
