'use client';
import React, { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <nav className="w-full px-10 py-3 relative flex justify-between items-center">
      <h1 className="font-bold text-[24px] md:text-[30px]">Tias&apos; Interior</h1>

      {/* Hamburger Icon for Mobile */}
      <div
        className="md:hidden cursor-pointer text-[30px]"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
        <span className="block w-8 h-[3px] bg-[#3d3531] mb-2"></span>
        <span className="block w-8 h-[3px] bg-[#3d3531] mb-2"></span>
        <span className="block w-8 h-[3px] bg-[#3d3531]"></span>
      </div>

      {/* Menu Items for Larger Screens */}
      <ul className="hidden md:flex justify-between items-center gap-8 font-semibold text-[18px] text-gray-700">
        <li className="hover:text-[#3d3531] transition-all duration-300 cursor-pointer">HOME</li>
        <li className="hover:text-[#3d3531] transition-all duration-300 cursor-pointer">ABOUT US</li>
        <li className="hover:text-[#3d3531] transition-all duration-300 cursor-pointer">GALLERY</li>
        <li className="hover:text-[#3d3531] transition-all duration-300 cursor-pointer">SERVICE</li>
      </ul>

      {/* Contact Button */}
      <button className="hidden md:block py-2 px-6 rounded-[20px] bg-[#3d3531] text-white font-medium">
        Contact Us
      </button>

      {/* Slide-in Menu for Mobile */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden fixed top-0 right-0 w-[55%] sm:w-[45%] h-full bg-white shadow-lg transition-transform duration-300 z-20`}
      >
        <div className="flex flex-col p-5">
          <button
            className="self-end text-[30px] font-bold text-[#3d3531]"
            onClick={toggleMenu}
          >
            &times;
          </button>
          <ul className="flex flex-col items-start gap-8 mt-5 text-[20px] font-semibold text-gray-700">
            <li
              onClick={toggleMenu}
              className="hover:text-[#3d3531] transition-all duration-300 cursor-pointer"
            >
              HOME
            </li>
            <li
              onClick={toggleMenu}
              className="hover:text-[#3d3531] transition-all duration-300 cursor-pointer"
            >
              ABOUT US
            </li>
            <li
              onClick={toggleMenu}
              className="hover:text-[#3d3531] transition-all duration-300 cursor-pointer"
            >
              GALLERY
            </li>
            <li
              onClick={toggleMenu}
              className="hover:text-[#3d3531] transition-all duration-300 cursor-pointer"
            >
              SERVICE
            </li>
          </ul>
          <button className="mt-5 py-2 px-6 rounded-[20px] bg-[#3d3531] text-white font-medium w-full">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
