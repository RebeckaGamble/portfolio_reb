import React from "react";
import chefMate from "/public/projects/chefMate.png";
import ProjectsCard from "@/app/components/ProjectsCard";


function chefMatePage() {
  return (
    <div className="w-full">
      <ProjectsCard
        projectName={"ChefMate"}
        src={chefMate}
        alt={"ChefMate"}
        
        codeLink={"https://github.com/RebeckaGamble/open_ai_13"}
        text={
          "Assignment: <br> Creating a group project with the design from two of the UX students."
        }
        techStack={"Next.js / Tailwind "}
        techs={["Next.js", "OpenAI"]}
      />
    </div>
  );
}

export default chefMatePage;
