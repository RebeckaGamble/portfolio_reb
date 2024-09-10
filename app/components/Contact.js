import React from "react";
import Image from "next/image";
import Link from "next/link";
import stockholm from "../../public/projects/stockholm.jpg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneIphone } from "react-icons/md";

function Contact() {
  return (
    <div id="contact" className="w-full px-2 sm:px-4 xl:max-w-[90rem] mx-auto py-16 h-auto">
      <div className="">
        <p className="text-xl tracking-widest uppercase text-[#9E2DA8]">
          Contact
        </p>
        <h2 className="py-4">Get in toutch</h2>

        <div className="mx-auto w-full grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-5 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl object-cover w-full"
                  src={stockholm}
                  alt="Liverpool"
                />
              </div>
              <div className="pt-4">
                <h2 className="py-2">Rebecka Gamble</h2>
                <div className="py-4">
                  <p>I am available for vacancies from autumn 2024.</p>
                  <p>Contact me and lets talk.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="flex flex-row items-center">
                    <span className="text-[#9E2DA8] pr-2">
                      <FaLocationDot size={20} />
                    </span>
                    Stockholm
                  </p>
                  <p className="flex flex-row items-center">
                    <span className="text-[#9E2DA8] pr-2">
                      <AiOutlineMail size={20} />
                    </span>{" "}
                    rebeckagamble@hotmail.com
                  </p>
                  <p className="flex flex-row items-center">
                    <span className="text-[#9E2DA8] pr-2">
                      <MdOutlinePhoneIphone size={20} />
                    </span>
                    073 984 11 87
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4 gap-2 ">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duraton-300">
                    <Link
                      href={
                        "https://www.linkedin.com/in/rebecka-gamble-395803198"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn size={20} className="fill-[#9E2DA8]" />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duraton-300">
                    <Link
                      href={"https://www.github.com/RebeckaGamble"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={20} className="fill-[#9E2DA8]" />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duraton-300">
                    <Link href={'mailto:"rebeckagamble@hotmail.com"'}>
                      <AiOutlineMail size={20} className="fill-[#9E2DA8]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
