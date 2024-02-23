import React from "react";
import { DateItem } from "./DateItem";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { TimeItem } from "./TimeItem";
import { IoArrowBackCircleSharp, IoArrowForwardCircleSharp } from "react-icons/io5";

export const ConfirmDetail = () => {
  return (
    <div className="w-fit h-fit border rounded-[40px] p-4 bg-[#FFFFFF]">
      <div className="font-[700] text-[1rem] p-4">Pick a date</div>

      <div className="flex justify-around items-center w-full gap-4">
        <IoArrowBackCircleSharp />
        <DateItem className="border-[5px]"/>
        <DateItem />
        <DateItem />
        <DateItem />
        <DateItem />
        <IoArrowForwardCircleSharp />
      </div>

      <div className="font-[700] text-[1rem] p-4">Pick a Time</div>
      <div className="flex justify-around items-center w-full gap-4 p-4">
        <TimeItem />
        <TimeItem />
        <TimeItem />
      </div>

      <div className="h-[2rem w-full bg-black text-white flex" > Confirm Details</div>
    </div>
  );
};
