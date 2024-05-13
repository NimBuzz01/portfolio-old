import { ProjectTypes } from "../types";

export const projectsData: ProjectTypes[] = [
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
];
