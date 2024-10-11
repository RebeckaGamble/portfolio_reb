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
        text={`
          <b>Assignment:</b> <br> 
          Creating a group project with the design from two of the UX students.<br><br> 
          Our team developed <b>ChefMate</b>, an AI-powered application that helps users find personalized recipes based on their daily preferences and mood. Working with classmates from my frontend class and two UX students, we focused on delivering a user-centric and interactive experience. 
          <br><br> 
          With ChefMate, users can input details such as their mood, available cooking time, food preferences, budget, and allergies. Using this information, OpenAI generates a matching recipe along with an image. If the recipe isn't suitable, users can generate a new one or opt for a surprise suggestion. 
          <br><br> 
          A key feature of ChefMate is the ability for users to log in and save their favorite recipes. This is where our MySQL database came into play, allowing users to securely store and access their recipes at any time.
          <br><br>
          <b>Technologies Used:</b><br>
          - OpenAI: For generating personalized recipe suggestions and images.<br>
          - Express: The backend framework for handling user authentication, API requests, and recipe management.<br>
          - MySQL: Used to store user data, preferences, and saved recipes.<br>
          - Radix UI: Provided accessible and customizable UI components for a smooth user experience.<br>
          - Next.js: Enabled server-side rendering and fast, seamless application performance.<br>
          - Tailwind CSS: Used to design a modern and responsive user interface.<br><br>
          <b>My Role:</b><br>
          As a frontend developer, I worked closely with the UX team to design and implement a user-friendly interface. I was responsible for integrating OpenAI's API for recipe generation, creating the recipe storage functionality with MySQL, and ensuring a smooth and responsive layout using Tailwind CSS. Additionally, I contributed to both frontend and backend integration to support user login and recipe management.`}
        techStack={"Next.js / Tailwind / Express / MySQL / OpenAI"}
        techs={[
          "Next.js",
          "Tailwind CSS",
          "OpenAI API",
          "Express",
          "MySQL",
          "Radix UI",
          "bcrypt",
          "dotenv",
          "cors",
          "Framer Motion",
          "Swiper",
          "React Icons",
          "Body-Parser",
        ]}
        // videoSrc={"/videos/chefMate.mp4"}
      />
    </div>
  );
}

export default chefMatePage;
