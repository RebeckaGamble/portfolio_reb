import React from "react";
import chas from "../../../public/projects/chas.png";
import ProjectsCard from "@/app/components/ProjectsCard";


function landingPage() {
  return (
    <div className="w-full">
       <ProjectsCard
        projectName={"Chas academy - Landing page"}
        src={chas}
        techStack={"Vite / Tailwind"}
        alt={"Chas Academy"}
        codeLink={"https://github.com/RebeckaGamble/chas_landing_page"}
        demoLink={"https://chas-landing-page.vercel.app/"}
        text={
          "I made some parts of the Chas Academy landing page."
        }
        techs={["HTML", "JavaScript", "Tailwind", "Github"]}
      />
     
    </div>
  );
}

export default landingPage;
