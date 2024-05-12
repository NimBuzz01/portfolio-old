import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const experiencesData = [
  {
    title: "Web Developer at ZRI Adventures (Pvt) Ltd",
    location: "Colombo, Sri Lanka",
    description:
      "Built a frontend with Next.js, Tailwind CSS, and TypeScript for a responsive interface. Used Strapi and PostgreSQL for efficient backend development and API functionality. Integrated PayHere, Koko, and MintPay for secure transactions. Optimized website performance with Google Analytics and SEO. Designed a user-friendly and engaging UI prioritizing accessibility.",
    icon: React.createElement(CgWorkAlt),
    date: "Sept 2023 - Nov 2023",
  },
  {
    title: "Software Engineer Intern at WSO2",
    location: "Colombo, Sri Lanka",
    description:
      "Created client demo web applications showcasing product features, designed the Open Healthcare Sandbox v3 to highlight WSO2 tools, and implemented microservices and APIs for scalable backend solutions using Choreo and WSO2 API Manager. I also conducted code reviews and issue resolution for quality assurance.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Bsc (Hons) in Computer Science",
    location: "Colombo, Sri Lanka",
    description:
      "Majoring in Computer Science at Informatics Institute of Technology",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2024",
  },
  {
    title: "Ordinary Level and Advanced Level",
    location: "Colombo, Sri Lanka",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2016-2020",
  },
] as const;
