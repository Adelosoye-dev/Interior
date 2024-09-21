import React from "react";
import Image from "next/image";
import { GrNext, GrPrevious } from "react-icons/gr";
const Testimonial = () => {
  return (
    <div className="flex p-10 m-10 relative">
      <div className="relative min-w-[60%] min-h-full rounded-[20px]">
        <Image
          src="/image7.jpg"
          alt="First image"
          layout="fill"
          objectFit="cover"
          className="rounded-[20px] "
        />
      </div>
      <div className="rounded-xl bg-white p-5 space-y-5 m-5">
        <h3 className="font-semibold">TESTIMONIAL</h3>
        <h2 className="font-bold text-[28px] leading-[100%] md:text-[40px] text-[#3d3531] font-serif">
          Curating Personalized Interiors That Inspire
        </h2>
        <p className="text-gray-500 text-[14px]  md:text-[16px]">
          Established with a passion for creativity, we believe that every space
          tells a story. Our mission is to transform your home or office into a
          reflection of your personality, style, and dreams. With a passion for
          design and a keen eye for detail, we create interiors that not only
          look stunning but feel like home. Whether you&apos;re seeking a
          modern, minimalist look or a warm, classic aesthetic, we work closely
          with you to bring your vision to life. Let us help you design a space
          that inspires, comforts, and truly represents who you are.
        </p>
        <div className="pt-10 flex gap-5 w-full justify-between items-center">
           <div className="flex items-center gap-2">
            <Image
              src="/pft.jpg"
              alt="First image"
              width={500}
              height={300}
              objectFit="contain"
              className="rounded-full w-[50px] h-[50px]"
            />
          
          <div className="">
            <h2>sarah & John</h2>
            <p>Business Owners</p>
          </div>
          </div>
          <div className="w-fit gap-2 relative flex">
            <button className="rounded-full w-[35px] active:scale-90 hover:text-white hover:bg-[#3d3531] h-[35px] flex items-center justify-center  border-2 border-grey-200"><GrPrevious /></button>
            <button className="rounded-full w-[35px] active:scale-90 hover:text-white hover:bg-[#3d3531] h-[35px] flex items-center justify-center border-2 border-grey-200"><GrNext /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
