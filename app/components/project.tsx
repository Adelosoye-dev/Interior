import React from "react";
import Image from "next/image";

const Project = () => {
  return (
    <div className="p-10 md:p-10 m-4 md:m-10 relative overflow-hidden">
      <h3 className="font-semibold text-center md:text-left">OUR PROJECTS</h3>
      <div className="flex flex-col md:flex-row justify-between my-6 md:my-10">
        <h2 className="font-bold text-[24px] md:text-[40px] text-[#3d3531] font-serif max-w-full md:max-w-[40%] text-center md:text-left">
          Explore Our Design Showcase
        </h2>
        <p className="text-gray-500 text-[14px] md:text-[16px] max-w-full md:max-w-[40%] text-center md:text-left mt-4 md:mt-0">
          From modern minimalist to timeless elegance, Our portfolio Showcases a
          spectrum of design styles and inspiration. Discover how we turn
          visions into captivating realities.
        </p>
      </div>

      <div className="relative art w-full min-h-[50vh] md:min-h-[100vh] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        <div className="row-span-3 artImg relative w-full h-64 md:h-full rounded-[20px] border-2 border-transparent overflow-hidden group">
          <Image
            src="/image00.jpeg"
            alt="First image"
            layout="fill"
            objectFit="cover"
            className="rounded-[20px] group-hover:scale-110 transition-transform duration-300 ease-in-out"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 p-5 transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
            <h2 className="font-bold text-[20px] md:text-[30px] text-white mb-2">
              Bohemian Style
            </h2>
            <p className="text-gray-300 text-[12px] md:text-[14px]">
              Free-spirited, artistic, and unconventional. Discover your inner
              bohemian with this eclectic mix of textures and patterns.
            </p>
          </div>
        </div>

        <div className="row-span-5 artImg relative w-full h-64 md:h-full rounded-[20px] border-2 border-transparent overflow-hidden group">
          <Image
            src="/image05.jpg"
            alt="Second image"
            layout="fill"
            objectFit="cover"
            className="rounded-[20px] group-hover:scale-110 transition-transform duration-300 ease-in-out"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 p-5 transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
            <h2 className="font-bold text-[20px] md:text-[30px] text-white mb-2">
              Bohemian Style
            </h2>
            <p className="text-gray-300 text-[12px] md:text-[14px]">
              Free-spirited, artistic, and unconventional. Discover your inner
              bohemian with this eclectic mix of textures and patterns.
            </p>
          </div>
        </div>

        <div className="relative artImg w-full h-64 md:h-full rounded-[20px] border-2 border-transparent overflow-hidden row-span-3 group">
          <Image
            src="/image6.jpg"
            alt="Third image"
            layout="fill"
            objectFit="cover"
            className="rounded-[20px] group-hover:scale-110 transition-transform duration-300 ease-in-out"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 p-5 transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
            <h2 className="font-bold text-[20px] md:text-[30px] text-white mb-2">
              Bohemian Style
            </h2>
            <p className="text-gray-300 text-[12px] md:text-[14px]">
              Free-spirited, artistic, and unconventional. Discover your inner
              bohemian with this eclectic mix of textures and patterns.
            </p>
          </div>
        </div>

        <div className="relative artImg w-full h-64 md:h-full rounded-[20px] border-2 border-transparent overflow-hidden row-span-5 group">
          <Image
            src="/image3.jpeg"
            alt="Fourth image"
            layout="fill"
            objectFit="cover"
            className="rounded-[20px] group-hover:scale-110 transition-transform duration-300 ease-in-out"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 p-5 transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
            <h2 className="font-bold text-[20px] md:text-[30px] text-white mb-2">
              Bohemian Style
            </h2>
            <p className="text-gray-300 text-[12px] md:text-[14px]">
              Free-spirited, artistic, and unconventional. Discover your inner
              bohemian with this eclectic mix of textures and patterns.
            </p>
          </div>
        </div>

        <div className="row-span-5 artImg relative w-full h-64 md:h-full rounded-[20px] border-2 border-transparent overflow-hidden group">
          <Image
            src="/image5.jpg"
            alt="Fifth image"
            layout="fill"
            objectFit="cover"
            className="rounded-[20px] group-hover:scale-110 transition-transform duration-300 ease-in-out"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 p-5 transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
            <h2 className="font-bold text-[20px] md:text-[30px] text-white mb-2">
              Bohemian Style
            </h2>
            <p className="text-gray-300 text-[12px] md:text-[14px]">
              Free-spirited, artistic, and unconventional. Discover your inner
              bohemian with this eclectic mix of textures and patterns.
            </p>
          </div>
        </div>

        <div className="relative w-full artImg h-64 md:h-full rounded-[20px] border-2 border-transparent overflow-hidden row-span-3 group">
          <Image
            src="/hero.jpg"
            alt="Sixth image"
            layout="fill"
            objectFit="cover"
            className="rounded-[20px] group-hover:scale-110 transition-transform duration-300 ease-in-out"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 p-5 transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
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

      <button className="my-6 md:my-10 mx-auto block py-2 px-6 rounded-[20px] bg-[#3d3531] text-white font-medium hover:bg-[#5a514b] transition-colors duration-300">
        More Projects
      </button>
    </div>
  );
};

export default Project;
