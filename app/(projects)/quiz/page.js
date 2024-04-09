import React from "react";
import quiz from "../../../public/projects/quiz.png";
import ProjectsCard from "@/app/components/ProjectsCard";

function quizPage() {
  return (
    <div className="w-full">
      <ProjectsCard
        projectName={"Quiz"}
        src={quiz}
        codeLink={"https://github.com/Yael353/Quiz"}
        alt={"Quiz"}
        text={
          "<h3>Mini group project.</h3> <br> In this group project we have created an interactive quiz using Next.js and Context for global state management."
        }
        techStack={"Next.js / Tailwind / Github"}
        techs={["Next.js", "Tailwind", "Github"]}
      />
    </div>
  );
}

export default quizPage;
