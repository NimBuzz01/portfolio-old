import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import atmosync from "@/public/atmosync.png";
import zriImg from "@/public/zriadventures.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Developer at ZRI Adventures (Pvt) Ltd",
    location: "Colombo, Sri Lanka",
    description:
      "Designed and developed the company website, and currently is an active maintainer.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
  {
    title: "Software Engineer Intern at WSO2",
    location: "Colombo, Sri Lanka",
    description:
      "Worked on multiple projects ranging from React and Angular webapps to Java microservices. Additionally worked on projects that use WSO2 products.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Bsc (Hons) in Computer Science",
    location: "Colombo, Sri Lanka",
    description:
      "Majoring in Computer Science at Informatics Institute of Technology",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - Present",
  },
  {
    title: "Ordinary Level and Advanced Level",
    location: "Colombo, Sri Lanka",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2016-2020",
  },
] as const;

export const projectsData = [
  {
    title: "ZRI Adventures",
    description: "ZRI Adventures is a Sri Lankan adventure agency.",
    tags: ["Next.js", "Typescript", "Tailwind CSS", "Strapi", "PostgreSQL"],
    imageUrl: zriImg,
    link: "https://zriadventures.com",
  },
  {
    title: "Atmosync",
    description: "Ambiance Classification based Music Recommendation System",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Python",
      "Flask",
      "Pytorch",
    ],
    imageUrl: atmosync,
    link: "https://atmosync.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Git",
  "Prisma",
  "Strapi",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Python",
  "Java",
  "Framer Motion",
  "Angular",
] as const;
