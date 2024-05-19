"use client";
import React, { useState } from "react";
import HTML from "../../public/skills/html.png";
import CSS from "../../public/skills/css.png";
import JS from "../../public/skills/javascript.png";
import REACT from "../../public/skills/react.png";
import AWS from "../../public/skills/aws.png";
import Node from "../../public/skills/node.png";
import Tailwind from "../../public/skills/tailwind.png";
import Github from "../../public/skills/github1.png";
import Vite from "../../public/skills/vite.svg";
import Next from "../../public/skills/nextjs.png";
import MySQL from "../../public/skills/mysql.webp";
import Express from "../../public/skills/express-js.svg";
import Firebase from "../../public/skills/firebase.png";
import SkillsCard from "./SkillsCard";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const skillsData = [
    { id: "Front-End", src: HTML, alt: "HTML" },
    { id: "Front-End", src: CSS, alt: "CSS" },
    { id: "Front-End", src: JS, alt: "JavaScript" },
    { id: "Front-End", src: REACT, alt: "React" },
    { id: "Front-End", src: Next, alt: "Next.js" },
    { id: "Front-End", src: Tailwind, alt: "Tailwind" },
    { id: "Front-End", src: Vite, alt: "Vite" },
    { id: "DevOps", src: Github, alt: "Github" },
    { id: "DevOps", src: AWS, alt: "AWS" },
    { id: "Backend", src: Express, alt: "Express" },
    { id: "Backend", src: Node, alt: "Node.js" },
    { id: "Database", src: MySQL, alt: "MySQL" },
    { id: "Database", src: Firebase, alt: "Firebase" },
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.id === activeCategory);

  return (
    <div id="skills" className="w-full px-2 sm:px-4 xl:max-w-[90rem] mx-auto h-auto min-h-[800px] justify-center py-16">
      <div className="mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#9E2DA8]">
          Skills
        </p>
        <h2 className="py-4">{/*I have worked with*/}I have experience in</h2>
        <div className="w-full py-6 shadow-md bg-slate-50 mb-10">
          <ul className="flex flex-wrap flex-row w-full font-semibold gap-4 justify-center">
            {["All", "Front-End", "DevOps", "Database", "Backend"].map(
              (category) => (
                <li
                  key={category}
                  className={`px-6 py-1.5 rounded-lg cursor-pointer tracking-wider hover:opacity-70 hover:text-white hover:bg-[#FC3A79] ${
                    activeCategory === category ? "bg-[#9E2DA8] text-white" : ""
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </li>
              )
            )}
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
