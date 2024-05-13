import { caseStudies } from "@/lib/data/case-studies";
import Image from "next/image";
import React from "react";

interface CaseStudyProps {
  params: {
    caseId: string;
  };
}

const CaseStudy = ({ params }: CaseStudyProps) => {
  const caseStudy = caseStudies.find((c) => c.id === params.caseId);
  return (
    <div className="mx-3 sm:mx-auto sm:container mb-28 min-h-screen">
      {caseStudy ? (
        <div>
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-1">
              {caseStudy.title}
            </h1>
            <p className="text-lg sm:text-xl">{caseStudy.subtitle}</p>
          </div>
          <div className="relative aspect-video w-full mb-16">
            <Image
              src={caseStudy.image}
              alt="Main Case Study Image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            A little bit about {caseStudy.title}...
          </h1>
          <div className="mb-16 flex flex-col gap-10 lg:flex-row justify-between">
            <div className="w-full space-y-4 lg:w-1/3 font-semibold text-sm sm:text-base">
              <p>
                Role: <span className="font-medium">Software Developer</span>
              </p>
              <p>
                Scope: <span className="font-medium">2 Weeks</span>
              </p>
              <p>
                Tools:{" "}
                <span className="font-medium">Figma, Adobe Photoshop</span>
              </p>
              <p>
                Process:{" "}
                <span className="font-medium">
                  Branding, Wireframing, Prototyping, User Testing, Mockups
                </span>
              </p>
            </div>
            <div className="w-full lg:w-2/3">
              <p className="text-sm sm:text-base">{caseStudy.description}</p>
            </div>
          </div>
          <div className="space-y-16">
            {caseStudy.content.map((item, i) => (
              <div key={i}>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  {item.title}
                </h1>
                <p className="text-sm sm:text-base mb-4">{item.description}</p>
                {item.imageUrl && (
                  <div className="relative aspect-video w-full max-h-[30rem]">
                    <Image
                      src={item.imageUrl}
                      alt="Main Case Study Image"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Not Found</p>
      )}
    </div>
  );
};

export default CaseStudy;
