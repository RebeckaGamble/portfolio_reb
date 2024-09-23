import React from "react";
import quiz from "/public/projects/quiz.png";
import ProjectsCard from "@/app/components/ProjectsCard";

function quizPage() {
  return (
    <div className="w-full">
      <ProjectsCard
        projectName={"Quiz"}
        src={quiz}
        codeLink={"https://github.com/RebeckaGamble/quiz"}
        alt={"Quiz"}
        text={
          "Quiz using Next.js and Context for global state management."
        }
        techStack={"Next.js / Tailwind"}
        techs={["Next.js", "Tailwind", "Github"]}
      />
    </div>
  );
}

export default quizPage;
