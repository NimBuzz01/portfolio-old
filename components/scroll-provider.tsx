"use client";
import React, { useEffect } from "react";

const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return <div>{children}</div>;
};

export default ScrollProvider;
