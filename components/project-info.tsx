import { useProjectStore } from "@/context/useStore";
import { ProjectTypes } from "@/lib/types";
import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { Badge } from "./ui/badge";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

const ProjectInfo = ({ project }: { project: ProjectTypes }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  const setInViewProject = useProjectStore((state) => state.setInViewProject);
  const inViewProject = useProjectStore((state) => state.inViewProject);

  useEffect(() => {
    if (isInView) setInViewProject(project.title);
    if (!isInView && inViewProject === project.title) setInViewProject(null);
  }, [isInView, project.title, setInViewProject, inViewProject]);

  return (
    <div ref={ref} className="py-12 md:py-28">
      <p
        className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold transition-all ${
          isInView ? "" : "text-gray-300 dark:text-gray-700"
        }`}
      >
        {project.title}
      </p>
      <div
        className={`transition-all ${isInView ? "opacity-100" : "opacity-0"}`}
      >
        <p
          className={`text-neutral-500 text-sm sm:text-base dark:text-neutral-400 transition-all`}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap my-4 gap-1">
          {project.tags.map((tag, index) => (
            <Badge className="" key={index}>
              {tag}
            </Badge>
          ))}
        </div>
        <div className="md:hidden relative aspect-video">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
        <div>
          <Link
            href={project.link}
            target="_blank"
            className=" mt-12 flex w-32 justify-center items-center gap-2 py-2  text-sm transition rounded-full outline-none group focus:scale-105 hover:scale-105 active:scale-105             bg-cmaccent dark:bg-cmaccent/80 text-cmsecondary  hover:dark:bg-cmaccent  hover:bg-cmaccent/80"
          >
            View Live{" "}
            <BsArrowRight className="transition opacity-70 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
