import React from 'react';
import { BsSnapchat } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  // Function to scroll to sections based on id
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="p-5 md:p-8 lg:p-10 m-5">
      <h1 className="font-bold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] text-center md:text-left">
        Tias&apos; Interior
      </h1>

      <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start space-y-5 md:space-y-0 mt-5">
        <p className="text-gray-500 text-[14px] sm:text-[14px] text-center md:text-left">
          Elevate Your Space With Our Interior Design Service
        </p>

        {/* Navigation links for sections */}
        <ul className="hidden md:flex justify-between items-center gap-6 lg:gap-8 font-semibold text-[14px] sm:text-[12px] lg:text-[18px] text-gray-700">
          <li onClick={() => scrollToSection("hero")} className="hover:text-[#3d3531] transition-all duration-300 cursor-pointer">HOME</li>
          <li onClick={() => scrollToSection("about")} className="hover:text-[#3d3531] transition-all duration-300 cursor-pointer">ABOUT US</li>
          <li onClick={() => scrollToSection("category")} className="hover:text-[#3d3531] transition-all duration-300 cursor-pointer">GALLERY</li>
          <li onClick={() => scrollToSection("project")} className="hover:text-[#3d3531] transition-all duration-300 cursor-pointer">SERVICE</li>
        </ul>
      </div>

      {/* Social media icons */}
      <div className="flex justify-center md:justify-start gap-3 md:gap-5 my-5">
        <a href='https://snapchat.com/t/iuBHr5Rd' target="_blank" rel="noopener noreferrer">
          <button className="hover:scale-105 transition-all duration-300 active:scale-100 rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-[#3d3531] flex items-center justify-center">
            <BsSnapchat size={20} color="white" />
          </button>
        </a>
        <a href='https://www.instagram.com/tiaa__interiors/profilecard/?igsh=MWozYW1vdGdxc2dxcg==' target='_blank' rel="noopener noreferrer">
          <button className="hover:scale-105 transition-all duration-300 active:scale-100 rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-[#3d3531] flex items-center justify-center">
            <FaInstagram size={20} color="white" />
          </button>
        </a>
        <a href='tel:2347086176142'>
          <button className="hover:scale-105 transition-all duration-300 active:scale-100 rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-[#3d3531] flex items-center justify-center">
            <FaPhoneAlt size={20} color="white" />
          </button>
        </a>
        <a href='https://wa.me/message/SIY7ALRM6JE2E1'>
          <button className="hover:scale-105 transition-all duration-300 active:scale-100 rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-[#3d3531] flex items-center justify-center">
            <FaWhatsapp size={20} color="white" />
          </button>
        </a>
      </div>

      <hr className="w-full border-black mt-10 md:mt-20" />

      {/* Footer bottom section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-5">
        <p className="text-gray-500 text-[12px] sm:text-[14px] md:text-[16px] text-center md:text-left">
          Tias&apos; Interior @2024 All Rights Reserved
        </p>

        {/* Footer links */}
        <ul className="hidden md:flex justify-between items-center gap-4 lg:gap-6 font-semibold text-[10px] sm:text-[12px] md:text-[14px] text-gray-700">
          <li className="hover:text-[#3d3531] transition-all duration-300 cursor-pointer">Terms & Condition</li>
          <li className="hover:text-[#3d3531] transition-all duration-300 cursor-pointer">Privacy Policy</li>
          <li className="hover:text-[#3d3531] transition-all duration-300 cursor-pointer">Cookies</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
