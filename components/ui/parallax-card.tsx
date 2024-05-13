"use client";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import Link from "next/link";
import Handwritten from "../handwritten";

const sideNotes = [
  {
    className:
      "absolute -top-10 left-0 lg:-left-[10%] lg:-rotate-12 text-lg sm:text-xl md:text-2xl",
    text: "Hover Over Them!",
  },
  {
    className:
      "absolute -top-10 right-0 lg:-right-[10%] lg:rotate-12 text-lg sm:text-xl md:text-2xl",
    text: "Pretty Cool Right?",
  },
  {
    className: "absolute -bottom-[10%] text-lg sm:text-xl md:text-2xl",
    text: "I Like Cool Stuff",
  },
];

const ParallaxCard = ({
  title,
  description,
  image,
  id,
  i,
}: {
  title: string;
  description: string;
  image: string;
  id: string;
  i: number;
}) => {
  const config = sideNotes[i] || {};
  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <div style={{ top: `calc(-5vh + ${i * 25}px)` }}>
        <CardContainer className="inter-var shadow-xl bg-cmsecondary dark:bg-cmprimary rounded-xl relative">
          <Handwritten className={config.className}>{config.text}</Handwritten>
          <CardBody className="bg-cmaccent/5 dark:text-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-950 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[45rem] h-auto rounded-xl p-6 border origin-top">
            <CardItem translateZ="50" className="sm:text-xl text-lg font-bold">
              {title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-sm sm:text-base mt-2 "
            >
              {description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={image}
                height="1000"
                width="1000"
                className="aspect-video w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-end items-center mt-8">
              <CardItem
                translateZ={20}
                as={Link}
                href={`/`}
                // href={`/case-studies/${id}`}
                // target="__blank"
                className="py-2 hover:font-semibold hover:text-base sm:hover:text-lg transition-all rounded-xl text-sm sm:text-base font-normal text-cmaccent"
              >
                Explore Case Study →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};

export default ParallaxCard;
