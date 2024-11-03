import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import projectsArr from "../../components/projects/data/projectsData.json";
import Image from "next/image";
import parse from "html-react-parser";

async function ProjectPage({ params }) {
  const { id } = await params;

  const project = projectsArr.projectsData.find((p) => p.id === id);

  if (!project)
    return (
      <div className="pt-[60px] px-4">
        <p className="pt-4">Project not found</p>
        <Link className="underline text-blue-700" href={"/"}>
          Go back
        </Link>
      </div>
    );

  const {
    projectName,
    src,
    alt,
    techStack,
    assignment,
    keyFeatures,
    technologiesUsed,
    myRole,
    demoLink,
    codeLink,
    images,
    videoSrc,
  } = project;

  return (
    <>
      <div className="w-screen h-[30vh] lg:h-[50vh] relative">
        {/**overlay */}
        <div className="absolute top-0 left-0 w-screen h-[30vh] lg:h-[50vh] bg-black/80 z-[5]" />
        <div className="relative h-[30vh] lg:h-[50vh] w-full xl:max-w-[90rem] mx-auto ">
          <Image
            alt={alt}
            src={src}
            width={300}
            height={200}
            className="absolute z-1 object-fill w-full h-full "
          />
        </div>
        <div className="absolute bottom-[5%] w-full xl:max-w-[90rem] left-[50%] right-[50%] translate-x-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{projectName}</h2>
          <h3 className="overflow-hidden">{techStack}</h3>
        </div>
      </div>
      <div className="xl:max-w-[90rem] w-full h-auto mx-auto p-2 py-8">
        <h2 className="pb-4">Project Overwiew</h2>
        <div className="space-y-4 max-w-[90rem]">
          {assignment && (
            <div>
              <h3>Assignemnt</h3>
              <p className="">{parse(assignment)}</p>
            </div>
          )}
          {keyFeatures && (
            <div>
              <h3>Key Features</h3>
              <ul>
                {keyFeatures &&
                  keyFeatures.map((feature, index) => (
                    <li className="" key={index}>
                      {feature}
                    </li>
                  ))}
              </ul>
            </div>
          )}
          {technologiesUsed && (
            <div>
              <h3>Technologies Used</h3>
              <ul>
                {technologiesUsed &&
                  technologiesUsed.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
              </ul>
            </div>
          )}
          {myRole && (
            <div>
              <h3>My Role</h3>
              <p>{parse(myRole)}</p>
            </div>
          )}
          <div className="flex gap-6">
            {demoLink && (
              <Link
                href={`${demoLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-2 mt-4">Demo</button>
              </Link>
            )}
            <Link
              href={`${codeLink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-2 mt-4">Code</button>
            </Link>
          </div>
        </div>
        <div>
          {Array.isArray(images) && images.length > 0 ? (
            <div className="py-10 flex flex-col">
              <p className="py-6 text-xl xl:text-[36px]">
                Snapshots from the Project
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                {images.map((image, index) => (
                  <li
                    key={index}
                    className="shadow-lg rounded-2xl px-4 py-6 w-full flex flex-col items-cente bg-slate-50"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={380}
                      height={300}
                      className="w-full h-auto"
                    />
                    <p className="pt-4 mt-4 border-t-2 text-[#9E2DA8] font-semibold">
                      {image.imgDesc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {videoSrc && (
            <div className="py-6 w-full h-[400px] xl:h-[600px] xl:max-w-[90rem] items-center justify-center mx-auto flex">
              <div className="relative w-full pb-10 overflow-hidden h-full">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  muted
                  autoPlay
                  loop
                  controls
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}
        </div>
        <div className="w-full pt-6">
          <Link href="/#projects">
            <p className="cursor-pointer flex w-fit items-center hover:font-semibold rounded-xl uppercase">
              <IoMdArrowRoundBack size={20} />
              <span className="pl-2">Go Back</span>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProjectPage;
