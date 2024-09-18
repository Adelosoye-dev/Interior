import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  // Use Intersection Observer to trigger animations on scroll
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger animation when 20% of the section is visible
  });

  return (
    <div className="relative">
      <div className="relative p-5 md:p-5 flex m-5 md:m-5 w-full flex-wrap md:gap-20 gap-10">
        {/* Section with scroll animation */}
        <motion.div
          className="w-full md:w-[35vw] p-10 md:p-5"
          ref={sectionRef}
          initial={{ opacity: 0, y: 100 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h3 className="font-semibold">ABOUT US</h3>
          <h2 className="font-bold text-[28px] md:text-[40px] text-[#3d3531] font-serif">
            Curating Personalized Interiors That Inspire
          </h2>
          <p className="text-gray-500 text-[14px] md:text-[16px]">
            Established with a passion for creativity, we believe that every space
            tells a story. Our mission is to transform your home or office into a
            reflection of your personality, style, and dreams. With a passion for
            design and a keen eye for detail, we create interiors that not only
            look stunning but feel like home. Whether you&apos;re seeking a modern,
            minimalist look or a warm, classic aesthetic, we work closely with
            you to bring your vision to life. Let us help you design a space that
            inspires, comforts, and truly represents who you are.
          </p>
          <motion.button
            className="mt-5 md:mt-10 py-2 px-6 rounded-[20px] bg-[#3d3531] text-white font-medium"
            whileHover={{ scale: 1.1 }}
          >
            Read More
          </motion.button>
        </motion.div>

        {/* Image Grid with new hover effects */}
        <div className="grid grid-cols-2 gap-3 md:gap-5 p-5 w-full md:w-[50vw] relative pr-10">
          {/* First Large Image */}
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="relative col-span-2 md:col-span-1 row-span-2 md:row-span-3 w-full h-[300px] md:h-full overflow-hidden"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                borderColor: "#3d3531",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative w-full h-full rounded-[20px] border-2 border-transparent overflow-hidden"
            >
              <Image
                src="/image4.jpeg"
                alt="First image"
                layout="fill"
                objectFit="cover"
                className="rounded-[20px]"
              />
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-[#3d3531] opacity-0"
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Second Image */}
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="relative w-full h-[150px] md:row-span-2 md:h-full overflow-hidden"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                rotateY: -5,
                rotateX: 5,
                borderColor: "#3d3531",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative w-full h-full rounded-[20px] border-2 border-transparent overflow-hidden"
            >
              <Image
                src="/image8.jpg"
                alt="Second image"
                layout="fill"
                objectFit="cover"
                className="rounded-[20px] absolute w-full h-full bottom-0"
              />
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-[#3d3531] opacity-0"
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Third Image */}
          <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="relative w-full h-[150px] md:h-full overflow-hidden"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: -5,
                borderColor: "#3d3531",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative w-full h-full rounded-[20px] border-2 border-transparent overflow-hidden"
            >
              <Image
                src="/image2.jpg"
                alt="Third image"
                layout="fill"
                objectFit="cover"
                className="rounded-[20px] absolute w-full h-full bottom-0"
              />
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-[#3d3531] opacity-0"
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
