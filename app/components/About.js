import React from "react";
import Image from "next/image";
import Link from "next/link";
import jag from "../../public/jag.jpg";
import AboutCode from "./AboutCode";
import AboutCVCard from "./AboutCVCard";
import { useInView } from "react-intersection-observer";

function About({ activeLink }) {
  const { ref: aboutRef, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <div
      id="about"
      className={`active:${activeLink} h-auto w-full px-2 sm:px-4 xl:max-w-[90rem] mx-auto py-16 flex items-center`}
    >
      <div className="grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#9E2DA8] ">
            About
          </p>
          <h2 className="py-4 w-fit">Who I am</h2>
          <div className="w-fit flex flex-col md:flex-row mx-auto items-center justify-center">
            <div className="w-[240px] h-auto flex py-10 md:pb-20 hover:scale-105 ease-in duration-300">
              <Image
                src={jag}
                alt="Me"
                className="rounded-full object-cover flex-1 h-auto border-2 border-[#FC3A79]"
                width={130}
                height={130}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-center w-full gap-6 md:gap-10">
            <div className="md:w-1/2 h-[352px]">
              <AboutCode />
            </div>
            <div className="md:w-1/2 md:h-[352px]">
              <p className="py-2 text-gray-600 md:text-[18px]">
                During my studies, I have completed several projects where I
                have had to apply my knowledge in web development in practice.
                These project has given me the opportunity to work in teams,
                with agile project methods, trello and solve technical
                challenges.
              </p>

              <p className="py-2 text-black underline cursor-pointer">
                <Link
                  href={"https://www.github.com/RebeckaGamble"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check out some of my latest projects
                </Link>
              </p>
            </div>
          </div>
          <div className="py-10">
            <p className="uppercase text-xl tracking-widest w-fi text-[#9E2DA8]">
              CV
            </p>
            {/** 
            <div className="flex flex-col sm:flex-row justify-start gap-6 sm:gap-20 py-6">
              <div>
                <h4 className="pb-2 uppercase tracking-wider">Competencies</h4>
                <ul>
                  <li className="flex flex-row items-center">
                    <p className="rounded-full mr-2 w-2 h-2 bg-[#FC3A79]"></p>
                    Collaboration skills
                  </li>
                  <li className="flex flex-row items-center">
                    <p className="rounded-full mr-2 w-2 h-2 bg-[#FC3A79]"></p>
                    Flexible
                  </li>
                  <li className="flex flex-row items-center">
                    <p className="rounded-full mr-2 w-2 h-2 bg-[#FC3A79]"></p>
                    Detail-oriented
                  </li>
                </ul>
              </div>
              <div className="">
                <h4 className="pb-2 uppercase tracking-wider">Language</h4>
                <ul>
                  <li className="flex flex-row items-center">
                    <p className="rounded-full mr-2 w-2 h-2 bg-[#FC3A79]"></p>
                    Swedish
                  </li>
                  <li className="flex flex-row items-center">
                    <p className="rounded-full mr-2 w-2 h-2 bg-[#FC3A79]"></p>
                    English
                  </li>
                </ul>
              </div>
            </div>
            */}

            <div className="xl:flex xl:justify-between xl:flex-row">
              <div
                ref={aboutRef}
                className="md:grid items-center md:items-start flex flex-col md:grid-cols-4 py-6 xl:flex xl:flex-col"
              >
                <div className="relative w-fit">
                  <h3 className="md:col-span-1 h-fit text-[18px] uppercase tracking-wider w-fit pb-1.5 border-transparent relative overflow-hidden">
                    Education
                  </h3>
                  <div
                    className={`${
                      inView
                        ? "absolute bottom-0 left-0 w-full h-0 border-b-[3px] border-[#9E2DA8] animate-border"
                        : ""
                    }`}
                  ></div>
                </div>
                <div className="pt-6 md:pt-0 xl:pt-6 md:pl-20 xl:pl-0 md:col-span-3 w-full xl:w-[600px]">
                  <AboutCVCard
                    title={"Frontend devloper mob/web"}
                    color="[#9E2DA8]"
                    where={"Chas Academy"}
                    when={"2023 - "}
                    text={
                      "HTML, JavaScript, React, React Native, Tailwind, TypeScript, Docker, MySQL, AWS, Project methodology and agile methods"
                    }
                    borderColor={"[#9E2DA8]"}
                  />
                  <AboutCVCard
                    title={"Web development in e-commerce"}
                    color="[#9E2DA8]"
                    where={"Medieinstitutet"}
                    when={"2021 - 2023"}
                    text={
                      "JavaScript, React, PHP, WordPress, Database technology"
                    }
                    borderColor={"[#9E2DA8]"}
                  />
                  <AboutCVCard
                    title={"Accounting Consultant"}
                    where={"Stockholm School of Business"}
                    when={"2019 - 2021"}
                    borderColor={"[#9E2DA8]"}
                  />
                  <AboutCVCard
                    title={"Certified Payroll Administrator"}
                    where={"Påhlmans handelsinstitut "}
                    when={"2017"}
                    borderColor={"[#9E2DA8]"}
                  />
                </div>
              </div>
              <div
                ref={aboutRef}
                className="md:grid items-center md:items-start flex flex-col md:grid-cols-4 pt-6 xl:flex xl:flex-col"
              >
                <div className="relative w-fit">
                  <h3 className="md:col-span-1 h-fit text-[18px] uppercase tracking-wider w-fit pb-1.5 border-transparent relative overflow-hidden">
                    Work / Internship
                  </h3>
                  <div
                    className={`${
                      inView
                        ? "absolute bottom-0 left-0 w-full h-0 border-b-[3px] border-[#FC3A79] animate-border"
                        : ""
                    }`}
                  ></div>
                </div>
                <div className="pt-6 md:pt-0 xl:pt-6 md:pl-20 md:col-span-3 w-full xl:w-[600px] xl:pl-0">
                  <AboutCVCard
                    title={"Unatitech"}
                    when={"2023 - Internship 15 weeks"}
                    text={
                      "React, Next.js, Tailwind, Firebase, Customer responsibility"
                    }
                    borderColor={"[#FC3A79]"}
                  />
                  {/** 
                  <AboutCVCard
                    title={"Kruso"}
                    when={"2022 - Internship 10 weeks"}
                    text={"React, Next.js, Radix, TypeScript, Stitches"}
                    borderColor={"[#FC3A79]"}
                  />
                  */}
                  <AboutCVCard
                    title={"Taxcro Consulting"}
                    when={"2021 - Internship 10 weeks "}
                    borderColor={"[#FC3A79]"}
                  />
                  <AboutCVCard
                    title={"MBL Redovisning & Konsulting"}
                    when={"2020 - Internship 11 weeks"}
                    borderColor={"[#FC3A79]"}
                  />
                  <AboutCVCard
                    title={"Modern assistans"}
                    when={"2007 - 2018 Personal assistant"}
                    borderColor={"[#FC3A79]"}
                  />
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
