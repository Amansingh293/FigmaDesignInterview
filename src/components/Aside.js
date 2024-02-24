import React from "react";
import SeeIconSvg from "./IconsSvg/SeeIconSvg";
import myImage from './IconsSvg/ProfileImage.jpg';
import { RiVerifiedBadgeLine } from "react-icons/ri";


export const Aside = () => {
  return (
    <div className="flex flex-col items-start gap-4 bg-[#1B363F] w-full lg:w-[40vw] text-white pb-4 p-8">
      <div className=" h-[251px] rounded-[100%] object-cover flex justify-center items-center relative">
        <img
          className="rounded-[50%] w-[195px] h-[187px]"
          alt="ProfileImage"
          src={myImage}
        />
        <RiVerifiedBadgeLine className="absolute right-2 bottom-3 text-[2rem]"/>
      </div>

      <div className="w-full">
        <h1 className="font-[700] text-[35px] pb-4">Aman Singh</h1>
        <p className="font-[400] text-[18px]">
          I help mid-career professionals become LIMITLESS in their business,
          relationships & health using my signature MINDeMOTION Framework |
          Metaphysical Healer - EAT™ | NLP & EFT Master | Psychotherapist |
          Corporate Trainer
        </p>
      </div>
      
      <div className="flex items-center gap-4 opacity-[0.3]">
        <div className="h-[80px] w-[80px] bg-white flex flex-col justify-center items-center text-black rounded-[12px]">
          <div className="">TOP</div>
          <div className="font-[700] text-[25px]">1%</div>
        </div>

        <div className="h-[80px] w-[80px] bg-white flex flex-col justify-center items-center text-black rounded-[12px]">
          <div className="">Bookings</div>
          <div className="font-[700] text-[25px]">98</div>
        </div>
      </div>

      <div className=" h-[64px] bg-[#FFFFFF] text-black flex justify-evenly items-center rounded-[12px]">
        <SeeIconSvg />
        <strong className="text-[24px]">See</strong>
        <p className="text-[24px] font-[300]">year recap</p>
      </div>
    </div>
  );
};
