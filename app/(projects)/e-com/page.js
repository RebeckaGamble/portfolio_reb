import React from "react";
import ecom from "/public/projects/e-com.png";
import ProjectsCard from "@/app/components/ProjectsCard";


function ecomPage() {
  return (
    <div className="w-full">
      <ProjectsCard
        projectName={"E-commerce"}
        src={ecom}
        alt={"E-com"}
        codeLink={"https://github.com/RebeckaGamble/E-handel-1"}
        text={
          "Assignment: <br> E-commerce platform"
        }
        techStack={"Next.js / Tailwind "}
        techs={["Next.js", "Tailwind"]}
      />
    </div>
  );
}

export default ecomPage;
