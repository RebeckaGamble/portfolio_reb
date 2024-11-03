"use client";
import React, { useState } from "react";
import SkillsCard from "./SkillsCard";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const skillsData = [
    { id: "Front-End", src: "/skills/html.png", alt: "HTML" },
    { id: "Front-End", src: "/skills/css.png", alt: "CSS" },
    { id: "Front-End", src: "/skills/javascript.png", alt: "JavaScript" },
    { id: "Front-End", src: "/skills/typescript.svg", alt: "TypeScript" },
    { id: "Front-End", src: "/skills/react.png", alt: "React" },
    { id: "Front-End", src: "/skills/nextjs.png", alt: "Next.js" },
    { id: "Front-End", src: "/skills/redux.svg", alt: "Redux" },
    { id: "Front-End", src: "/skills/tailwind.png", alt: "Tailwind" },
    { id: "Front-End", src: "/skills/vite.svg", alt: "Vite" },
    { id: "DevOps", src: "/skills/github1.png", alt: "Github" },
    { id: "DevOps", src: "/skills/aws.png", alt: "AWS" },
    { id: "Back-end", src: "/skills/express-js.svg", alt: "Express" },
    { id: "Back-end", src: "/skills/node.png", alt: "Node.js" },
    { id: "Database", src: "/skills/mysql.webp", alt: "MySQL" },
    { id: "Database", src: "/skills/firebase.png", alt: "Firebase" },
    { id: "Testing", src: "/skills/cypress.svg", alt: "Cypress" },
  ];

  const sortedSkillsData = skillsData.sort((a, b) =>
    a.alt.localeCompare(b.alt)
  );

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const filteredSkills =
    activeCategory === "All"
      ? sortedSkillsData
      : sortedSkillsData.filter((skill) => skill.id === activeCategory);

  return (
    <div
      id="skills"
      className="w-full px-2 sm:px-4 xl:max-w-[90rem] mx-auto h-auto min-h-[800px] justify-center py-16"
    >
      <div className="mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#9E2DA8]">
          Skills
        </p>
        <h2 className="py-4">I have experience in</h2>
        <div className="w-full px-4 py-6 shadow-md bg-slate-50 mb-10">
          <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 w-full font-semibold sm:gap-4 justify-center">
            {[
              "All",
              "Front-End",
              "DevOps",
              "Database",
              "Back-end",
              "Testing",
            ].map((category) => (
              <li
                key={category}
                className={`text-center py-2 rounded-lg cursor-pointer tracking-wider hover:opacity-70 hover:text-white hover:bg-[#FC3A79] ${
                  activeCategory === category ? "bg-[#9E2DA8] text-white" : ""
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap justify-center mx-auto gap-4">
          {filteredSkills.map((skill, index) => (
            <SkillsCard
              key={index}
              src={skill.src}
              alt={skill.alt}
              title={skill.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
