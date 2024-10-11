import React from "react";
import ProjectItem from "./ProjectItem";
import zoom from "/public/projects/zoom.png";
import clock from "/public/projects/clock.png";
import quiz from "/public/projects/quiz.png";
import chas from "/public/projects/chas.png";
import chefMate from "/public/projects/chefMate.png";
import ecom from "/public/projects/e-com.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="h-auto px-2 sm:px-4 xl:max-w-[90rem] mx-auto "
    >
      <div className="mx-auto py-16">
        <p className="text-xl tracking-widest uppercase text-[#9E2DA8]">
          Projects
        </p>
        <h2 className="py-4">Some school projects</h2>
        <div className="grid md:grid-cols-2 gap-8 b">
          <ProjectItem
            title="ChefMate"
            backgroundImg={chefMate}
            projectURL="/chefMate"
            imgText={"ChefMate"}
            projectTech="Next.js, Tailwind, Express, MySQL, OpenAI"
          />
          <ProjectItem
            title="E-commerce"
            backgroundImg={ecom}
            projectURL="/e-com"
            imgText={"E-com"}
            projectTech="Next.js, Tailwind"
          />
          <ProjectItem
            title="Landing Page"
            backgroundImg={chas}
            projectURL="/chasAcademy"
            imgText={"Chas Academy"}
            projectTech="HTML, Vite, Tailwind"
          />

          <ProjectItem
            title="Clock / Timer"
            backgroundImg={clock}
            projectURL="/clock"
            imgText={"Clock / Timer"}
            projectTech="HTML, CSS, JS"
          />
          <ProjectItem
            title="Zoom simplifie"
            backgroundImg={zoom}
            projectURL="/zoom"
            imgText={"Zoom"}
            projectTech="HTML, Vite, Tailwind"
          />
          <ProjectItem
            title="Group project - Quiz"
            backgroundImg={quiz}
            projectURL="/quiz"
            imgText={"Quiz"}
            projectTech="Next.js, Tailwind"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
