import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

export const MoreOfferings = ({offering}) => {
  return (
    <div className="h-[9rem] md:h-full w-full md:w-[50%] border bg-white relative p-4 font-[700]">
      {offering?.content}
      <BsArrowUpRightCircleFill className="absolute right-2 bottom-2 text-[1.4rem]" />
    </div>
  );
};
