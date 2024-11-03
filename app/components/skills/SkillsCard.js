import React from "react";
import Image from "next/image";

export default function SkillsCard({ src, alt, title }) {
  return (
    <div className="p-4 flex shadow-xl w-[160px] sm:w-[180px] rounded-xl hover:scale-105 ease-in duration-300">
      <div className="flex flex-row gap-4 justify-center items-center">
        <div className="m-auto w-[34px] h-[34px]">
          <Image
            src={src}
            width={34}
            height={34}
            alt={alt}
            className="object-cover w-auto h-full"
          />
        </div>
        <div className="flex items-center justify-center">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}
