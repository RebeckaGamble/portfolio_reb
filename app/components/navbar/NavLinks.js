import React, { useState } from "react";
import Link from "next/link";

const links = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/#about" },
  { id: "skills", label: "Skills", href: "/#skills" },
  { id: "projects", label: "Projects", href: "/#projects" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

export default function NavLinks({
  onClick,
  className,
  isMainNav,
  activeSection,
}) {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <>
      {links.map(({ id, label, href }) => (
        <li
          key={id}
          onClick={onClick}
          onMouseEnter={() => setHoveredLink(id)}
          onMouseLeave={() => setHoveredLink(null)}
          className={`${className} ${activeSection === id ? "active" : ""}`}
        >
          <Link
            href={href}
            className={`relative ${
              activeSection === id && isMainNav ? "text-[#9E2DA8]" : ""
            }`}
          >
            {label}
            {isMainNav && hoveredLink === id && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#9E2DA8]"></span>
            )}

            {!isMainNav && hoveredLink === id && (
              <span className="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] bg-pink-100 opacity-40 rounded-full text-white w-16 h-16 items-center justify-center " />
            )}
          </Link>
        </li>
      ))}
    </>
  );
}
