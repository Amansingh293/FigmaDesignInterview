import React from "react";
import { BiRightArrowCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export const Card = ({ data , index }) => {
  const { header, body, footer } = data;

  const navigate = useNavigate();

  return (
    <div className="w-full h-fit rounded-[32px] bg-[#FFFFFF] border border-black">
      <div className="h-[11rem] border-b-[1px] p-4">
        <div className="h-[4rem] flex justify-between">
          <div className="w-[7rem] h-[2.5rem] rounded-lg bg-[#EBEAEB] flex justify-evenly items-center">
            {header.icon}{header.headerTitle}
          </div>
          <BiRightArrowCircle className="w-[33px] h-[33px] cursor-pointer" onClick={()=>navigate(`/${index}`)}/>
        </div>
        <div className="h-[3.5rem] font-[700]">{body.heading}</div>
        <div className="h-[1.25rem] font-[400] font-size-[16px]">
          {body.subHeading}
        </div>
      </div>
      <div className="h-[4.8rem] flex justify-between items-center p-4">
        <div>{footer.info}</div>
        <div className="font-[700] bg-[#F7F7F7] rounded-[24px] p-2">
          {footer.price}
        </div>
      </div>
    </div>
  );
};
