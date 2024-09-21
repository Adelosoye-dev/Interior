import React from "react";
import Image from "next/image";

const Category = () => {
  return (
    <div className="p-5 m-5 gap-2">
      {/* Title Section */}
      <div className="text-center p-5 m-5">
        <h3 className="font-bold text-[18px]">CATEGORY</h3>
        <h2 className="font-bold text-[28px] md:text-[40px] text-[#3d3531] font-serif py-5 md:py-10">
          Discover Your Signature Style
        </h2>
        <p className="text-gray-500 text-[14px] md:text-[16px]">
          At Tias&apos; Interior, we pride ourselves on our ability to design
          homes <br className="hidden md:block" />
          that reflect your soul by bringing your vision to life, <br className="hidden md:block" />
          one room at a time.
        </p>
      </div>

      {/* First Row of Images */}
      <div className="flex flex-col md:flex-row justify-between items-center p-5 m-5 space-y-5 md:space-y-0 md:space-x-5">
        {/* First Image Container */}
        <div className="relative h-[300px] md:h-[500px] w-full md:w-[400px] overflow-hidden rounded-lg">
          <Image
            src="/image8.jpg"
            alt="Minimalist Style"
            layout="fill"
            objectFit="cover"
            className="transition-all duration-300 ease-in-out transform hover:scale-125"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 p-5">
            <h2 className="font-bold text-[20px] md:text-[30px] text-white mb-2">
              Minimalist Style
            </h2>
            <p className="text-gray-300 text-[12px] md:text-[14px]">
              Experience the beauty of Minimalism, Clean Lines, Natural Tones,
              and Functional Designs. Bringing Calm and Clarity to Your Space.
            </p>
          </div>
        </div>

        {/* Second Image Container */}
        <div className="relative h-[300px] md:h-[500px] w-full md:w-[750px] overflow-hidden rounded-xl">
          <Image
            src="/image9.jpg"
            alt="Scandinavian Style"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 p-5">
            <h2 className="font-bold text-[20px] md:text-[30px] text-white mb-2">
              Scandinavian Style
            </h2>
            <p className="text-gray-300 text-[12px] md:text-[14px]">
              Embrace functionality, simplicity, and understated elegance with 
              Scandinavian design.
            </p>
          </div>
        </div>
      </div>

      {/* Second Row of Images */}
      <div className="flex flex-col md:flex-row justify-between items-center p-5 m-5 space-y-5 md:space-y-0 md:space-x-5">
        {/* Third Image Container */}
        <div className="relative h-[300px] md:h-[500px] w-full md:w-[750px] overflow-hidden rounded-xl">
          <Image
            src="/hero1.jpg"
            alt="Modern Style"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 p-5">
            <h2 className="font-bold text-[20px] md:text-[30px] text-white mb-2">
              Modern Style
            </h2>
            <p className="text-gray-300 text-[12px] md:text-[14px]">
              Bold, sleek, and contemporary designs, where form meets function
              to create stunning living spaces.
            </p>
          </div>
        </div>

        {/* Fourth Image Container */}
        <div className="relative h-[300px] md:h-[500px] w-full md:w-[400px] overflow-hidden rounded-lg">
          <Image
            src="/image07.jpeg"
            alt="Bohemian Style"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out transform hover:scale-125"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 p-5">
            <h2 className="font-bold text-[20px] md:text-[30px] text-white mb-2">
              Bohemian Style
            </h2>
            <p className="text-gray-300 text-[12px] md:text-[14px]">
              Free-spirited, artistic, and unconventional. Discover your inner
              bohemian with this eclectic mix of textures and patterns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
