"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import NavLinks from "./NavLinks";


const NavBar = ({
  activeSection,
}) => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
     bg-white
      ${shadow ? "shadow-xl" : "shadow-sm"}
      fixed w-full z-[9999]
      transition-all duration-300
      h-16
      `}
    >
      <div className="flex justify-between items-center w-full max-w-[90rem] mx-auto h-full px-2">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={60}
            height={16}
            className="p-2 w-full h-auto"
          />
        </Link>
        <div className="h-full">
          <ul className="relative hidden md:flex h-full w-full">
            <NavLinks
              isMainNav={true}
              activeSection={activeSection}
              className={`relative uppercase ml-6 px-2 h-full flex items-center`}
            />
          </ul>
        </div>
        <div onClick={handleNav} className="md:hidden p-2">
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/*overlay */}
      <div
        className={
          nav
            ? "md:hidden fixed z-10 left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        {/*menu open */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 min-w-[310px] h-screen bg-white ease-in-out duration-300"
              : "fixed left-[-200%] top-0 p-10 ease-in-out duration-300"
          }
        >
          <div className="flex w-full justify-between pr-4">
            <div className="">
              <Link href={"/"}>
                <Image
                  src={"/logo.png"}
                  alt="Logo"
                  width={87}
                  height={25}
                  className="w-full h-auto"
                />
              </Link>
            </div>
            <div
              onClick={handleNav}
              className="rounded-full text-black mt-4 h-fit shadow-lg shadow-gray-400 p-3 cursor-pointer hover:bg-white"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-300 p-4">
            <p className=" text-black w-[85%] md:w-[90%] py-4">
              Let's build something together.{" "}
            </p>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase ">
              <NavLinks
                isMainNav={false}
                className="text-black hover:bg-[#9E2DA8] text-[16px] hover:text-white px-4 py-2"
                onClick={() => setNav(false)}
              />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
