import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ projectId, projectName, src, alt, techStack }) => {
  return (
    <div className="relative flex items-center justify-center min-h-[280px] h-auto w-full max-w-[460px] mx-auto shadow-xl bg-white shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#9E2DA8] to-[#FC3A79]">
      <Link href={`/${projectId}`}>
        <Image
          className="rounded-xl group-hover:opacity-10 w-full h-auto"
          width={300}
          height={200}
          src={src}
          alt={alt}
        />
        <div className="hidden group-hover:block absolute w-[60%] sm:w-[85%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-white tracking-wider text-center w-full">
            {projectName}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">{techStack} </p>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectItem;
