import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion , AnimatePresence} from 'framer-motion';

const images = [
  "/image9.jpg",
  "/image02.jpg",
  
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const slideIn = {
    hidden: { opacity: 0, x: 1000 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    exit: { opacity: 1, x: -1000, transition: { duration: 1  } }
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <div className='absolute w-full h-full bg-black/30 z-[2]' />
      <AnimatePresence>
      <motion.div
        key={currentImage}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={slideIn}
        className="absolute w-full h-full"
      >
        <Image
          src={images[currentImage]}
          alt="Sliding Image"
          layout="fill"
          objectFit="cover"
          className="object-cover w-full h-full"
        />
      </motion.div>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        {/* Animate the Text */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          className="text-white relative z-[10] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center px-6 md:px-10 leading-snug md:leading-tight"
        >
          Discover The Art Of Interior<br/> Design
        </motion.h1>
        
      </div>
      </AnimatePresence>
    </div>
  );
};

export default Hero;
