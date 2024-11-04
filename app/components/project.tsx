import React, { useState } from "react";
import Image from "next/image";
import Modal from "./modal";
import { motion } from "framer-motion";


const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="p-5 md:p-10 my-4 md:my-10 relative overflow-hidden">
      <h3 className="font-semibold text-center md:text-left">OUR PROJECTS</h3>
      <div className="flex flex-col md:flex-row justify-between my-6 md:my-10">
        <h2 className="font-bold text-[24px] md:text-[40px] text-[#3d3531] font-serif max-w-full md:max-w-[40%] text-center md:text-left">
          Explore Our Design Showcase
        </h2>
        <p className="text-gray-500 text-[14px] md:text-[16px] max-w-full md:max-w-[40%] text-center md:text-left mt-4 md:mt-0">
          From modern minimalist to timeless elegance, Our portfolio showcases a
          spectrum of design styles and inspiration. Discover how we turn
          visions into captivating realities.
        </p>
      </div>

      <div className="relative art w-full min-h-[50vh] md:min-h-[100vh] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {/* Project 1 */}
        <div className="row-span-3 artImg relative w-full h-64 md:h-full rounded-[20px] border-2 border-transparent overflow-hidden group">
          <Image
            src="/image00.jpeg"
            alt="Modern Minimalism"
            layout="fill"
            objectFit="cover"
            className="rounded-[20px] group-hover:scale-110 transition-transform duration-300 ease-in-out"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 p-5 transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
            <h2 className="font-bold text-[20px] md:text-[30px] text-white mb-2">
              Modern Minimalism
            </h2>
            <p className="text-gray-300 text-[12px] md:text-[14px]">
              Embrace simplicity and functionality. Our minimalist designs focus
              on clean lines and open spaces to create a serene, balanced
              environment.
            </p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="row-span-5 artImg relative w-full h-64 md:h-full rounded-[20px] border-2 border-transparent overflow-hidden group">
          <Image
            src="/image05.jpg"
            alt="Rustic Charm"
            layout="fill"
            objectFit="cover"
            className="rounded-[20px] group-hover:scale-110 transition-transform duration-300 ease-in-out"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 p-5 transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
            <h2 className="font-bold text-[20px] md:text-[30px] text-white mb-2">
              Rustic Charm
            </h2>
            <p className="text-gray-300 text-[12px] md:text-[14px]">
              Inspired by nature, this design brings warmth and character to any
              space with natural textures, reclaimed wood, and earthy tones.
            </p>
          </div>
        </div>

        {/* Project 3 */}
        <div className="relative artImg w-full h-64 md:h-full rounded-[20px] border-2 border-transparent overflow-hidden row-span-3 group">
          <Image
            src="/image6.jpg"
            alt="Classic Elegance"
            layout="fill"
            objectFit="cover"
            className="rounded-[20px] group-hover:scale-110 transition-transform duration-300 ease-in-out"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 p-5 transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
            <h2 className="font-bold text-[20px] md:text-[30px] text-white mb-2">
              Classic Elegance
            </h2>
            <p className="text-gray-300 text-[12px] md:text-[14px]">
              Timeless and sophisticated, this style combines elegance with
              comfort, featuring ornate details, rich fabrics, and a warm color
              palette.
            </p>
          </div>
        </div>

        {/* Project 4 */}
        <div className="relative artImg w-full h-64 md:h-full rounded-[20px] border-2 border-transparent overflow-hidden row-span-5 group">
          <Image
            src="/image3.jpeg"
            alt="Coastal Retreat"
            layout="fill"
            objectFit="cover"
            className="rounded-[20px] group-hover:scale-110 transition-transform duration-300 ease-in-out"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 p-5 transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
            <h2 className="font-bold text-[20px] md:text-[30px] text-white mb-2">
              Coastal Retreat
            </h2>
            <p className="text-gray-300 text-[12px] md:text-[14px]">
              Inspired by the ocean, this style uses soft hues, light textures,
              and natural materials to bring a calming beach vibe to any space.
            </p>
          </div>
        </div>

        {/* Project 5 */}
        <div className="row-span-5 artImg relative w-full h-64 md:h-full rounded-[20px] border-2 border-transparent overflow-hidden group">
          <Image
            src="/image5.JPG"
            alt="Industrial Chic"
            layout="fill"
            objectFit="cover"
            className="rounded-[20px] group-hover:scale-110 transition-transform duration-300 ease-in-out"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 p-5 transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
            <h2 className="font-bold text-[20px] md:text-[30px] text-white mb-2">
              Industrial Chic
            </h2>
            <p className="text-gray-300 text-[12px] md:text-[14px]">
              This style combines raw, unfinished materials with modern touches
              to create a stylish, edgy aesthetic full of character.
            </p>
          </div>
        </div>

        {/* Project 6 */}
        <div className="relative w-full artImg h-64 md:h-full rounded-[20px] border-2 border-transparent overflow-hidden row-span-3 group">
          <Image
            src="/hero.JPG"
            alt="Urban Loft"
            layout="fill"
            objectFit="cover"
            className="rounded-[20px] group-hover:scale-110 transition-transform duration-300 ease-in-out"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 p-5 transition-transform duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
            <h2 className="font-bold text-[20px] md:text-[30px] text-white mb-2">
              Urban Loft
            </h2>
            <p className="text-gray-300 text-[12px] md:text-[14px]">
              A contemporary style that blends open spaces with stylish accents,
              perfect for creating a modern, cosmopolitan ambiance.
            </p>
          </div>
        </div>
      </div>

      <div className="flex lg:gap-2 justify-center">
      <motion.button
            className="mt-5 md:mt-10 py-2 px-6 rounded-[20px] bg-[#3d3531] text-white font-medium mx-auto"
            whileHover={{ scale: 1.1 }}
            onClick={handleOpenModal} // Open modal on click
          >
            More Projects
          </motion.button>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Project;
