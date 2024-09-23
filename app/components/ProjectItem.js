import React from "react";
import Image from "next/image";
import Link from "next/link";

function ProjectItem({
  title,
  backgroundImg,
  imgText,
  projectTech,
  projectURL,
}) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl bg-white shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#9E2DA8] to-[#FC3A79]">
      <Link href={projectURL}>
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={backgroundImg}
          alt={imgText}
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-white tracking-wider text-center w-full">
            {title}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">{projectTech} </p>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </div>
      </Link>
    </div>
  );
}

export default ProjectItem;
