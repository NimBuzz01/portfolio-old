import { links } from "./data/common";

export type SectionName = (typeof links)[number]["name"];

export interface ProjectTypes {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

export interface CaseStudyTypes {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  info: {
    role: string;
    scope: string;
    tools: string;
    process: string;
  };
  description: string;
  content: {
    title: string;
    description: string;
    imageUrl?: string;
  }[];
}
