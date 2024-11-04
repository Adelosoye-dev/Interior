import React, { useState, useEffect } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Handle scroll lock for mobile menu
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      // Clean up to avoid locking scroll unintentionally
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close the menu after navigating
    }
  };

  return (
    <nav className="w-full px-10 py-3 relative flex justify-between items-center">
      <h1 className="font-bold text-[24px] md:text-[30px]">Tias&apos; Interior</h1>

      {/* Hamburger Icon for Mobile and Tablet */}
      <div
        className="lg:hidden cursor-pointer flex flex-col justify-center items-end w-8 h-6 relative z-30"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
        <span className={`block w-full h-[3px] bg-[#3d3531] mb-1 transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`}></span>
        <span className={`block w-full h-[3px] bg-[#3d3531] mb-1 transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
        <span className={`block w-full h-[3px] bg-[#3d3531] transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}></span>
      </div>

      {/* Menu Items for Larger Screens */}
      <ul className="hidden lg:flex justify-between items-center gap-8 font-semibold text-[18px] text-gray-700">
        <li onClick={() => scrollToSection("hero")} className="hover:text-[#3d3531] transition-all duration-300 cursor-pointer">HOME</li>
        <li onClick={() => scrollToSection("about")} className="hover:text-[#3d3531] transition-all duration-300 cursor-pointer">ABOUT US</li>
        <li onClick={() => scrollToSection("category")} className="hover:text-[#3d3531] transition-all duration-300 cursor-pointer">GALLERY</li>
        <li onClick={() => scrollToSection("project")} className="hover:text-[#3d3531] transition-all duration-300 cursor-pointer">SERVICE</li>
      </ul>

      {/* Contact Button */}
      <button onClick={() => scrollToSection("contact")} className="hidden lg:block py-2 px-6 rounded-[20px] bg-[#3d3531] text-white font-medium">
        Contact Us
      </button>

      {/* Slide-in Menu for Mobile and Tablet */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden fixed top-0 right-0 w-[55%] sm:w-[45%] h-full bg-white shadow-lg transition-transform duration-300 z-20`}
      >
        <div className="flex flex-col p-5">
          <ul className="flex flex-col items-start gap-8 mt-5 text-[20px] font-semibold text-gray-700">
            <li onClick={() => scrollToSection("hero")} className="hover:text-[#3d3531] transition-all duration-300 cursor-pointer">HOME</li>
            <li onClick={() => scrollToSection("about")} className="hover:text-[#3d3531] transition-all duration-300 cursor-pointer">ABOUT US</li>
            <li onClick={() => scrollToSection("category")} className="hover:text-[#3d3531] transition-all duration-300 cursor-pointer">GALLERY</li>
            <li onClick={() => scrollToSection("project")} className="hover:text-[#3d3531] transition-all duration-300 cursor-pointer">SERVICE</li>
          </ul>
          <button onClick={() => scrollToSection("contact")} className="mt-5 py-2 px-6 rounded-[20px] bg-[#3d3531] text-white font-medium w-full">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
