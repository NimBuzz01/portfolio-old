import { useProjectStore } from "@/hooks/useStore";
import { ProjectTypes } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const ProjectCard = ({ project }: { project: ProjectTypes }) => {
  const inViewProject = useProjectStore((state) => state.inViewProject);
  return (
    <div
      className={cn(
        `absolute inset-0 p-4 h-full flex flex-col justify-center w-full space-y-4 bg-gradient-to-r rounded-xl transition-all`,
        inViewProject === project.title ? "opacity-100" : "opacity-0"
      )}
    >
      <Image
        src={project.imageUrl}
        alt={project.title}
        fill
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default ProjectCard;
