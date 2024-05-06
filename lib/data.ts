import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

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
    name: "Designs",
    hash: "#designs",
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
    imageUrl: "/projects/zriadventures.png",
    link: "https://zriadventures.com",
  },
  {
    title: "Dunes Cart - Website",
    description: "Dunes Cart Ecommerce Website",
    tags: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Zustand",
      "Shadcn/ui",
      "PostgreSQL",
    ],
    imageUrl: "/projects/dunescart.png",
    link: "https://dunescart-store.vercel.app/",
  },
  {
    title: "Dunes Cart - Admin Dashboard",
    description: "Dunes Cart Admin Dashboard",
    tags: [
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Prisma",
      "Zod",
      "Shadcn/ui",
      "PostgreSQL",
    ],
    imageUrl: "/projects/dunescart-admin.png",
    link: "https://dunescart-admin.vercel.app/",
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

export const galleryItems = [
  {
    title: "Coming Soon",
    thumbnail: "/designs/coming-soon.png",
  },
  {
    title: "Coming Soon",
    thumbnail: "/designs/coming-soon.png",
  },
  {
    title: "Coming Soon",
    thumbnail: "/designs/coming-soon.png",
  },
  {
    title: "Coming Soon",
    thumbnail: "/designs/coming-soon.png",
  },
  {
    title: "Coming Soon",
    thumbnail: "/designs/coming-soon.png",
  },
  {
    title: "Coming Soon",
    thumbnail: "/designs/coming-soon.png",
  },
  {
    title: "Coming Soon",
    thumbnail: "/designs/coming-soon.png",
  },
  {
    title: "Coming Soon",
    thumbnail: "/designs/coming-soon.png",
  },
  {
    title: "Coming Soon",
    thumbnail: "/designs/coming-soon.png",
  },
  {
    title: "Coming Soon",
    thumbnail: "/designs/coming-soon.png",
  },
  {
    title: "Coming Soon",
    thumbnail: "/designs/coming-soon.png",
  },
  {
    title: "Coming Soon",
    thumbnail: "/designs/coming-soon.png",
  },
  {
    title: "Coming Soon",
    thumbnail: "/designs/coming-soon.png",
  },
  {
    title: "Coming Soon",
    thumbnail: "/designs/coming-soon.png",
  },
  {
    title: "Coming Soon",
    thumbnail: "/designs/coming-soon.png",
  },
];

export const aboutMe = {
  longDesc:
    "Innovative Front-End Developer and UI/UX Designer with a passion for creating engaging digital experiences. Equipped with a keen eye for detail and a deep understanding of user-centered design principles, I bring creativity and technical expertise to every project.",
  shortDesc:
    "When I'm not coding, I enjoy playing video games. I also enjoy learning new things.",
  favFont: "Archivo",
  primaryColor: "#0F172A",
  secondaryColor: "#F8FAFC",
  accentColor: "#5755FE",
} as const;
