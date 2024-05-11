"use client";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import Link from "next/link";

const ParallaxCard = ({
  title,
  description,
  image,
  link,
  i,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
  i: number;
}) => {
  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <div style={{ top: `calc(-5vh + ${i * 25}px)` }}>
        <CardContainer className="inter-var bg-cmsecondary dark:bg-cmprimary rounded-xl">
          <CardBody className="bg-cmaccent/5 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-950 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[45rem] h-auto rounded-xl p-6 border origin-top">
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
                href={link}
                target="__blank"
                className="py-2 rounded-xl text-sm sm:text-base text-cmaccent font-normal dark:text-cmaccent"
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
