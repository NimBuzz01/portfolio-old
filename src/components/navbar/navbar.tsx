"use client";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

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
  const navRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    gsap.set(navRef.current, { autoAlpha: 0, y: "-=10" });
    gsap.to(navRef.current, {
      autoAlpha: 1,
      y: "+=10",
      stagger: 0.05,
      delay: 3.5,
      duration: 0.25,
    });

    navRef.current.forEach((navItem) => {
      gsap.to(navItem, {
        y: "-=10",
        autoAlpha: 0,
        duration: 0.25,
        paused: true,
        reversed: true,
      });

      navItem.addEventListener("mouseenter", () => {
        gsap.to(navItem, { reversed: false });
      });

      navItem.addEventListener("mouseleave", () => {
        gsap.to(navItem, { reversed: true });
      });
    });
  }, []);

  return (
    <div className="absolute flex flex-col left-8 top-8 tracking-wider text-gray-600  space-y-1 md:text-lg lg:text-xl">
      {navItems.map((link, index) => (
        <a
          key={index}
          href={link.href}
          ref={(el) => (navRef.current[index] = el!)}
        >
          {link.title}
        </a>
      ))}
    </div>
  );
};

export default Navbar;
