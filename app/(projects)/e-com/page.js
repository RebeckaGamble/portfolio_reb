import React from "react";
import ecom from "/public/projects/e-com.png";
import ProjectsCard from "@/app/components/ProjectsCard";

const images = [
  {
    src: "/projects/e-com2.png",
    alt: "E-com: Search products in store",
    imgDesc: "Displays the search bar for product search"
  },
  {
    src: "/projects/e-com-fav.png",
    alt: "E-com: Favourite page",
    imgDesc: "Shows the favourite products page with saved item"
  },
  {
    src: "/projects/e-com-single-prod-page.png",
    alt: "E-com: Single product page",
    imgDesc: "Single product page. Can also see that 2 items are added to the cart"
  }
]
function ecomPage() {
  return (
    <div className="w-full">
      <ProjectsCard
        projectName={"E-commerce"}
        src={ecom}
        alt={"E-com"}
        codeLink={"https://github.com/RebeckaGamble/E-handel-1"}
        text={`
        <b>Assignment:</b> <br>
        E-commerce platform <br><br>
        GroupOne is an e-commerce application developed as a collaborative group project. Our team aimed to create a seamless online shopping experience where users can browse and purchase products. With a focus on user engagement, the application fetches product data from a public API, allowing users to add items to their cart or mark them as favorites. <br><br>
        <b>Key Features:</b><br>
        - Product Catalog: Users can explore a wide range of products with images, descriptions, and prices.<br>
        - Shopping Cart Functionality: Users can easily add products to their cart, with a dynamic counter that updates in real-time.<br>
        - Favorites Page: A dedicated space for users to save products for later viewing without immediate commitment.<br>
        - Responsive Design: The application is designed to be mobile-friendly, ensuring a smooth shopping experience across devices.<br><br>
        <b>Technologies Used:</b><br>
        - Next.js: For building a fast and interactive user interface.<br>
        - React: To manage the dynamic components of the application.<br>
        - React DOM: For rendering the React components effectively.<br>
        - React Icons: To enhance the user interface with icons.<br>
        - Tailwind CSS: For designing a modern and responsive layout.<br><br>
        <b>My Role:</b><br>
        As a frontend developer, I collaborated with my team to create an intuitive user interface. I was responsible for integrating the product API, implementing the shopping cart and favorites functionalities, and ensuring a responsive layout using Tailwind CSS. My focus was on delivering an engaging user experience while managing state efficiently across the application.
        `
       }
        techStack={"Next.js / Tailwind "}
        techs={["Next.js", "React", "React DOM", "React Icons"]}
        images={images}
      />
    </div>
  );
}

export default ecomPage;
