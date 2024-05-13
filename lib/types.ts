import { links } from "./data/common";

export type SectionName = (typeof links)[number]["name"];

export interface ProjectTypes {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  gradient: string;
}
