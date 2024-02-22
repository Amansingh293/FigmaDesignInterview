import React from "react";
import { BiRightArrowCircle } from "react-icons/bi";

export const Card = ({ data }) => {
  const { header, body, footer } = data;

  return (
    <div className="w-[27rem] h-fit rounded-[32px] bg-[#FFFFFF] border border-black">
      <div className="h-[186px] border-b-[1px] p-4">
        <div className="h-[64px] flex justify-between">
          <div className="w-[118px] h-[40px] rounded-lg bg-[#EBEAEB] flex justify-center items-center">
            {header.icon} {header.headerTitle}
          </div>
          <BiRightArrowCircle className="w-[33px] h-[33px]"/>
        </div>
        <div className="h-[56px] font-[700]">{body.heading}</div>
        <div className="h-[20px] font-[400] font-size-[16px]">
          {body.subHeading}
        </div>
      </div>
      <div className="h-[77px] flex justify-between items-center p-4">
        <div>{footer.info}</div>
        <div className="font-[700] bg-[#F7F7F7] rounded-[24px] p-2">
          {footer.price}
        </div>
      </div>
    </div>
  );
};
