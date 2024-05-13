import { ProjectTypes } from "../types";

export const projectsData: ProjectTypes[] = [
  {
    title: "ZRI Adventures",
    description: "ZRI Adventures is a Sri Lankan adventure agency.",
    tags: ["Next.js", "Typescript", "Tailwind CSS", "Strapi", "PostgreSQL"],
    imageUrl: "/projects/zriadventures.png",
    link: "https://zriadventures.com",
    gradient: "from-yellow-400 to-orange-500",
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
    gradient: "from-pink-300 to-pink-600",
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
    gradient: "from-sky-300 to-orange-500",
  },
];
