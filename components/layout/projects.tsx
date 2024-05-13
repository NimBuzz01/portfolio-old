"use client";
import React from "react";
import SectionHeading from "../section-heading";
import { useSectionInView } from "@/lib/hooks";
import { projectsData } from "@/lib/data/projects";
import ProjectCard from "../project-card";
import ProjectInfo from "../project-info";

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 w-full">
      <SectionHeading>My Projects</SectionHeading>
      <div className="flex w-full gap-8 items-start">
        <div className="w-full mb-12 md:py-[30dvh]">
          <ul>
            {projectsData.map((project, index) => (
              <li key={index}>
                <ProjectInfo project={project} />
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex sticky top-0 h-screen w-full items-center">
          <div className="relative w-full aspect-square">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
