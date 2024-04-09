import React, { useState } from "react";
import Link from "next/link";

export default function NavLinks({ onClick, className, isMainNav, activeSection }) {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <>
      <li
        onClick={onClick}
        onMouseEnter={() => setHoveredLink(isMainNav ? "home" : null)}
        onMouseLeave={() => setHoveredLink(null)}
        className={`${className} ${activeSection === "home" ? "active" : ""}`}      
        >
        <Link href="/" className={`${activeSection === "home" && isMainNav ? "text-[#9E2DA8]" : ""}`}>
          Home
          {hoveredLink === "home" && isMainNav === "true" && (
            <span className="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] bg-pink-100 opacity-40 rounded-full w-16 h-16 items-center justify-center " />
          )}
        </Link>
      </li>
      <li
        onClick={onClick}
        onMouseEnter={() => setHoveredLink(isMainNav ? "about" : null)}
        onMouseLeave={() => setHoveredLink(null)}
        className={`${className} ${activeSection === "about" ? "active" : ""}`}      
      >
        <Link href="/#about" className={`${activeSection === "about" && isMainNav ? "text-[#9E2DA8]" : ""}`}>
          About
          {hoveredLink === "about" && isMainNav === "true" && (
            <span className="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] bg-pink-100 opacity-40 rounded-full w-16 h-16 items-center justify-center " />
          )}
        </Link>
      </li>
      <li
        onClick={onClick}
        onMouseEnter={() => setHoveredLink(isMainNav ? "skills" : null)}
        onMouseLeave={() => setHoveredLink(null)}
        className={className}
      >
        <Link href="/#skills" className={`${activeSection === "skills" && isMainNav ? "text-[#9E2DA8]" : ""}`}>
          Skills
          {hoveredLink === "skills" && isMainNav === "true" && (
            <span className="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] bg-pink-100 opacity-40 rounded-full w-16 h-16 items-center justify-center " />
          )}
        </Link>
      </li>
      <li
        onClick={onClick}
        onMouseEnter={() => setHoveredLink(isMainNav ? "projects" : null)}
        onMouseLeave={() => setHoveredLink(null)}
        className={className}
      >
        <Link href="/#projects" className={`${activeSection === "projects" && isMainNav ? "text-[#9E2DA8]" : ""}`}>
          Projects
          {hoveredLink === "projects" && isMainNav === "true" && (
            <span className="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] bg-pink-100 opacity-40 rounded-full w-16 h-16  items-center justify-center " />
          )}
        </Link>
      </li>
      <li
        onClick={onClick}
        onMouseEnter={() => setHoveredLink(isMainNav ? "contact" : null)}
        onMouseLeave={() => setHoveredLink(null)}
        className={className}
      >
        <Link href="/#contact" className={`${activeSection === "contact" && isMainNav ? "text-[#9E2DA8]" : ""}`}>
          Contact
          {hoveredLink === "contact" && isMainNav === "true" && (
            <span className="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] bg-pink-100 opacity-40 rounded-full w-16 h-16 items-center justify-center " />
          )}
        </Link>
      </li>
    </>
  );
}