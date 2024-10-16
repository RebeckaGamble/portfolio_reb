import React from "react";
import zoom from "/public/projects/zoom.png"
import ProjectsCard from "@/app/components/ProjectsCard";

export const metadata = {
  title: "Zoom Project"
}

function zoomPage() {
  return (
    <div className="w-full">
      <ProjectsCard
        projectName={"Simplifie Zoom"}
        src={zoom}
        alt={"Zoom"}
        codeLink={"https://github.com/RebeckaGamble/zoom"}
        text={
          "Assignment: <br>Create a simplified version of Zoom's homepage, Choose 2 sections in addition to navigation and the hero section."
        }
        techStack={"Vite / Tailwind / Github"}
        techs={["Vite", "JavaScript", "Tailwind",  "Github"]}
      />
    </div>
  );
}

export default zoomPage;
