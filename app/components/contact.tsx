import Image from "next/image";

const Contact = () => {
  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden mb-10">
      <div className="absolute w-full h-full bg-black/30 z-[2]" />

      <div className="absolute w-full h-full">
        <Image
          src="/image00.jpeg"
          alt="Sliding Image"
          layout="fill"
          objectFit="cover"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-white relative z-[10] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center px-4 sm:px-6 md:px-10 leading-snug md:leading-tight">
          Create Your Dream Space With Our <br /> Interior Design Experts
        </h1>
        <a href='https://wa.me/message/SIY7ALRM6JE2E1' className="z-20 cursor-pointer">
        <button className="my-6 md:my-8 lg:my-10 py-2 px-6 sm:px-8 lg:px-10 rounded-[20px] bg-[#3d3531] text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium hover:bg-[#5a514b] transition-colors duration-300">
          Contact Us
        </button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
 