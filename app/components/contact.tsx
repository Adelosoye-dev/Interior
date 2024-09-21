import Image from "next/image";

const Contact = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden mb-10">
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
        <h1 className="text-white relative z-[10] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center px-6 md:px-10 leading-snug md:leading-tight">
         Create Your Dream Space With Our 
          <br /> Interior Design Experts
        </h1>
        <button className="my-6 md:my-10 mx-auto block py-2 px-6 rounded-[20px] bg-[#3d3531] text-white font-medium hover:bg-[#5a514b] transition-colors duration-300">
        Contact us
      </button>
      </div>
    </div>
  );
};

export default Contact;
