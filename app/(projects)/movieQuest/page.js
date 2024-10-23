import React from "react";
import chas from "/public/projects/movieQuestReviews2.png";
import ProjectsCard from "@/app/components/ProjectsCard";

const images = [
    {
      src: "/projects/movieQuest.png",
      alt: "MovieQuest: Search/Sort movies",
      imgDesc: "Displays the search bar, and sort by dropdown"
    },
    {
      src: "/projects/movieQuest_singlePage.png",
      alt: "MovieQuest: Single product page",
      imgDesc: "Single movie page"
    },
    {
      src: "/projects/movieQuestReviews.png",
      alt: "MovieQuest: Single product page",
      imgDesc: "Single movie page - Reviews modal open"
    },
    {
        src: "/projects/movieQuestFav.png",
        alt: "MovieQuest: Favourite page",
        imgDesc: "Shows the favourite page with saved movies"
      }
  ]

function movieQuest() {
  return (
    <div className="w-full">
      <ProjectsCard
        projectName={"MovieQuest"}
        src={chas}
        techStack={"React / Redux / Tailwind CSS / TheMovieDB API"}
        alt={"MovieQuest"}
        codeLink={"https://github.com/RebeckaGamble/movieQuest"}
        text={`<b>Assignment:</b> <br>
         Develop a single-page application to retrieve and display movie data from TheMovieDB API. 
          <br><br>
          The project features a carousel on the index page showcasing images and titles of selected movies from the database. Users can easily navigate through this carousel to discover popular films. 
          <br><br>
          A search form allows users to find movies by title or genre, with the search term highlighted in the results for easier visibility. Additionally, users can sort the displayed movies either by title or publishing date, enhancing the overall usability.
          <br><br>
          Clicking on a moviecard takes users to the single movie page. Here, users can also read reviews displayed in a modal overlay, ensuring a smooth reading experience without navigating away from the page. 
          <br><br>
          Users have the option to add movies to their favorites list, and they can also remove movies from this list if they change their mind.
          <br><br>
          The application was built with a focus on creating an intuitive user interface and responsive design, providing an engaging user experience across various devices.
          <br><br>
          
          <b>Technologies Used:</b><br>
          - React: For building the user interface of the application.<br>
          - Redux: For managing the global state of the application and making API calls more manageable.<br>
          - Tailwind CSS: For styling the application and ensuring a responsive design.<br>
          - TheMovieDB API: For fetching movie data, including details, reviews, and ratings.<br>
          <b>My Role:</b><br>
          As the sole developer on this project, I was responsible for all aspects of development, from setting up the project structure and making API calls to implementing the user interface and ensuring a smooth user experience. I ensured the application was responsive and functionally robust.`}
        techs={[
            "React",
            "Redux",
            "Tailwind CSS",
            "TheMovieDB API",
        ]}
        images={images}
      />
    </div>
  );
}

export default movieQuest;
