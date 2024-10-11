import React from "react";
import chas from "/public/projects/chas.png";
import ProjectsCard from "@/app/components/ProjectsCard";

function landingPage() {
  return (
    <div className="w-full">
      <ProjectsCard
        projectName={"Chas academy - Landing page"}
        src={chas}
        techStack={"HTML / CSS / JavaScript / Tailwind CSS / Vite"}
        alt={"Chas Academy"}
        codeLink={"https://github.com/RebeckaGamble/chas_landing_page"}
        demoLink={"https://chas-landing-page.vercel.app/"}
        text={`<b>Assignment:</b> <br>
          Creating an individual project to develop our school's landing page. 
          <br><br> 
          The project involved designing a user-friendly interface that showcases important information about our school, such as programs offered, events, and contact details. 
          <br><br> 
          I initially implemented the landing page using HTML, CSS, and JavaScript. This version featured a responsive navigation menu with a smooth opening and closing hamburger menu, as well as a dynamic navigation bar that changes its appearance on scroll.
          <br><br>
          Later, we upgraded the landing page using modern tools, incorporating <b>Tailwind CSS</b> for styling and <b>Vite</b> for faster development. The new version utilized features such as line clamping to improve readability and overall user experience.
          <br><br>
          The focus throughout was on creating a visually appealing design while ensuring functionality and responsiveness across various devices.
          <br><br> 
          <b>Technologies Used (Version 1):</b><br>
          - HTML: For structuring the content of the landing page.<br>
          - CSS: For styling the layout and making it visually appealing.<br>
          - JavaScript: For implementing interactivity, including the hamburger menu and scroll effects.<br><br>
          <b>Technologies Used (Version 2):</b><br>
          - Tailwind CSS: For designing a modern, responsive interface with utility classes.<br>
          - Vite: For a faster and more efficient development experience.<br><br>
          <b>My Role:</b><br>
          As the sole developer on this project, I was responsible for the complete design and implementation of both versions of the landing page. I focused on ensuring a responsive design, smooth navigation, and an engaging user experience.`}
        techs={[
          "HTML",
          "CSS",
          "JavaScript",
          "Tailwind CSS",
          "Vite",
        ]}
      />
    </div>
  );
}

export default landingPage;
