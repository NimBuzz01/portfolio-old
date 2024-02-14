"use client";

import React, { useEffect } from "react";
import styles from "./style.module.scss";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Nav from "./nav/nav";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);
  return (
    <>
      <div className="p-[30px] fixed right-0 z-[1]">
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="w-16 h-16 rounded-[50%] bg-blue-600 flex items-center justify-center cursor-pointer"
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
