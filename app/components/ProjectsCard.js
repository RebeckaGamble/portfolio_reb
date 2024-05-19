import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function ProjectsCard({
  projectName,
  src,
  alt,
  text,
  techStack,
  techs,
  demoLink,
  codeLink,
}) {
  return (
    <>
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        {/**overlay */}
        <div className="absolute top-0 left-0 w-screen h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          alt={alt}
          src={src}
          className="absolute z-1 object-fill w-screen h-full "
        />
        <div className="absolute top-[70%] w-full xl:max-w-[90rem] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{projectName}</h2>
          <h3>{techStack}</h3>
        </div>
      </div>
      <div className="xl:max-w-[90rem] w-full h-auto mx-auto p-2 gap-8 py-8">
        <div className="">
          <p className="">Project</p>
          <h2 className="py-2">Overwiew</h2>
          <p
            className="max-w-[800px]"
            dangerouslySetInnerHTML={{ __html: text }}
          ></p>
          <div className="flex gap-6">
            <Link
              href={`${demoLink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-2 mt-4">Demo</button>
            </Link>
            <Link
              href={`${codeLink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-2 mt-4">Code</button>
            </Link>
          </div>
        </div>
        <div className="my-4 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="font-bold uppercase pb-2">Technologies</p>
            <div className="flex flex-wrap gap-6 ">
              {techs.map((tech, i) => {
                return (
                  <p key={i} className="text-gray-600 flex items-center">
                    <RiRadioButtonFill className="pr-1" /> {tech}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full pt-10">
          <Link href="/#projects">
            <p className="cursor-pointer flex w-fit items-center rounded-xl uppercase hover:font-semibold bg-[#FC3A79] text-white hover:bg-[#9E2DA8] px-8 py-2 ">
              <IoMdArrowRoundBack size={20} />
              <span className="pl-2">Go Back</span>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
