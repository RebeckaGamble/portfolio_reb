"use client";
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

export default function Home() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            //console.log("section: ", section)
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavBar
        activeSection={activeSection}
        setNavBg={"white"}
        color="black"
        textHover={"[#9E2DA8]"}
        onHover={"border-b-2 border-[#9E2DA8] "}
      />
      <main className="max-w-screen">
        <div
          id="home"
          className="w-full xl:max-w-[90rem] mx-auto h-screen text-center"
        >
          <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center">
            <p className="uppercase tracking-widest text-gray-600">
              LET's build something together
            </p>
            <h1 className="py-4 text-gray-700">
              Hi, I'm <span className="text-[#9E2DA8]">Rebecka</span>
            </h1>
            <h1 className="py-2 text-gray-700">
              A Junior Front-End Web Developer
            </h1>
            <p className="py-4 text-gray-600 max-w-[70%] mx-auto">
              During my studies I have acquired knowledge in front-end and
              back-end development. I have experience working with different
              frameworks and technologies such as HTML, CSS, JavaScript, React,
              Node.js and MySQL. I also have practical experience of responsive
              web design.
            </p>
          </div>
        </div>
        <div className="bg-slate-50">
          <About />
        </div>
        <div className="">
          <Skills />
        </div>
        <div className="bg-slate-50">
          <Projects />
        </div>
        <Contact />
        <div className="flex justify-center pb-16">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duraton-300">
              <HiOutlineChevronDoubleUp size={30} className="text-[#9E2DA8]" />
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}
