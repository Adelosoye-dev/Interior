import React from "react";
import Image from "next/image";

const Category = () => {
  return (
    <div className="md:p-5 md:m-5 gap-2">
      {/* Title Section */}
      <div className="text-center p-5 my-5">
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
      <div className="flex flex-col w-full md:flex-row justify-between items-center mt-5 space-y-5 md:space-y-0 md:space-x-5 p-5">
        {/* Minimalist Style */}
        <div className="relative h-[300px] md:h-[500px] w-full md:w-[450px] overflow-hidden rounded-lg">
          <Image
            src="/image8.jpg"
            alt="Minimalist Style"
            layout="fill"
            objectFit="cover"
            className="transition-all w-full duration-300 ease-in-out transform hover:scale-125"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 p-5">
            <h2 className="font-bold text-[20px] md:text-[30px] text-white mb-2">
              Minimalist Style
            </h2>
            <p className="text-gray-300 text-[12px] md:text-[14px]">
              Serenity in simplicity. Discover clean lines and uncluttered
              spaces that bring a sense of calm to your home.
            </p>
          </div>
        </div>

        {/* Scandinavian Style */}
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
              Warm, natural, and minimalist. Embrace Scandinavian design that
              balances functionality with beauty.
            </p>
          </div>
        </div>
      </div>

      {/* Second Row of Images */}
      <div className="flex flex-col md:flex-row w-full justify-between items-center p-5 space-y-5 md:space-y-0 md:space-x-5">
        {/* Modern Style */}
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
              Sleek and stylish with clean forms. Modern design merges
              functionality with artistic flair.
            </p>
          </div>
        </div>

        {/* Bohemian Style */}
        <div className="relative h-[300px] w-full md:h-[500px] md:w-[400px] overflow-hidden rounded-lg">
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
              Artistic and eclectic. Celebrate your creativity with bold colors,
              patterns, and a free-spirited vibe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
