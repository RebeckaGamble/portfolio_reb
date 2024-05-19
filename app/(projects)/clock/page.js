import React from "react";
import clock from "../../../public/projects/clock.png";
import ProjectsCard from "@/app/components/ProjectsCard";


function clockPage() {
  return (
    <div className="w-full">
      <ProjectsCard
        projectName={"Clock / Timer"}
        src={clock}
        alt={"Clock / Timer"}
        demoLink={"https://clock-timer-iota.vercel.app/"}
        codeLink={"https://github.com/RebeckaGamble/clock_timer"}
        text={
          "Assignment: <br> Practice using state in React building a clock/timer."
        }
        techStack={"React / Tailwind "}
        techs={["React", "Tailwind"]}
      />
    </div>
  );
}

export default clockPage;
