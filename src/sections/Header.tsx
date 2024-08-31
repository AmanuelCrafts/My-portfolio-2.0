"use client";

import { useState } from "react";

export const Header: React.FC = () => {
  // Define the type of activeLink as a string
  const [activeLink, setActiveLink] = useState<string>("Home");

  // Define the type of the link parameter as a string
  const handleClick = (link: string): void => {
    setActiveLink(link);
  };

  return (
    <div className="flex justify-center items-center fixed top-3 left-0 right-0 z-50">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          className={`nav-item ${
            activeLink === "Home"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
          href="#home"
          onClick={() => handleClick("Home")}
        >
          Home
        </a>
        <a
          className={`nav-item ${
            activeLink === "Projects"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
          href="#projects"
          onClick={() => handleClick("Projects")}
        >
          Projects
        </a>
        <a
          className={`nav-item ${
            activeLink === "About"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
          href="#about"
          onClick={() => handleClick("About")}
        >
          About
        </a>
        <a
          className={`nav-item ${
            activeLink === "Contact"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
          href="#contact"
          onClick={() => handleClick("Contact")}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
