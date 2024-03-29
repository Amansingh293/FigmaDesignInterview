import React from "react";
import { HappyIconSvg } from "./IconsSvg/HappyIconSvg";

const TestimonialsCard = ({data}) => {
  return (
    <div className="w-full md:w-[50%] h-[12rem] flex flex-col justify-around border bg-[#F1F1F1] rounded-[12px] p-4">
      <div className="w-full md:w-[80%]  h-[2.5rem] flex justify-start items-center gap-2"><HappyIconSvg/> <h1>{data?.name}</h1></div>
      <p className="w-full pb-2">
        {data?.comment}
      </p>
    </div>
  );
};

export default TestimonialsCard;
