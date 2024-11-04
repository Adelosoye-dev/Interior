import React from "react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="flex flex-col lg:flex-row p-5 md:p-10 lg:m-10 relative">
      {/* Image Section */}
      <div className="relative w-full lg:w-[60%] h-[300px] sm:h-[400px] md:h-[500px] lg:h-auto rounded-[20px] overflow-hidden">
        <Image
          src="/image7.jpg"
          alt="First image"
          layout="fill"
          objectFit="cover"
          className="rounded-[20px]"
        />
      </div>

      {/* Testimonial Text Section */}
      <div className="bg-white p-5 md:p-8 lg:m-5 space-y-5 rounded-xl flex-1">
        <h3 className="font-semibold text-[16px] md:text-[18px]">TESTIMONIAL</h3>
        <h2 className="font-bold text-[24px] md:text-[28px] lg:text-[40px] leading-tight text-[#3d3531] font-serif">
          Curating Personalized Interiors That Inspire
        </h2>
        <p className="text-gray-500 text-[14px] md:text-[16px]">
          Established with a passion for creativity, we believe that every space
          tells a story. Our mission is to transform your home or office into a
          reflection of your personality, style, and dreams. With a passion for
          design and a keen eye for detail, we create interiors that not only
          look stunning but feel like home. Whether you&apos;re seeking a
          modern, minimalist look or a warm, classic aesthetic, we work closely
          with you to bring your vision to life. Let us help you design a space
          that inspires, comforts, and truly represents who you are.
        </p>

        {/* Profile and Navigation Buttons */}
        {/* <div className="pt-8 md:pt-10 flex gap-5 w-full justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/pft.jpg"
              alt="First image"
              width={50}
              height={50}
              className="rounded-full w-[50px] h-[50px]"
            />
            <div className="text-sm md:text-base">
              <h2 className="font-semibold">Sarah & John</h2>
              <p className="text-gray-500">Business Owners</p>
            </div>
          </div>


          <div className="flex gap-2">
            <button className="rounded-full w-[35px] h-[35px] flex items-center justify-center border-2 border-gray-200 hover:bg-[#3d3531] hover:text-white active:scale-90 transition-all">
              <GrPrevious />
            </button>
            <button className="rounded-full w-[35px] h-[35px] flex items-center justify-center border-2 border-gray-200 hover:bg-[#3d3531] hover:text-white active:scale-90 transition-all">
              <GrNext />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Testimonial;
