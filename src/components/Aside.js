import React from "react";
import SeeIconSvg from "./IconsSvg/SeeIconSvg";
import { VerifiedIconSvg } from "./IconsSvg/VerifiedIconSvg";

export const Aside = () => {
  return (
    <div className="flex flex-col items-start gap-4 bg-[#1B363F] w-full md:w-[40vw] h-fit md:h-[187rem] text-white p-8">
      <div className="w-[200px] h-[251px] rounded-[100%] object-cover flex justify-center items-center relative">
        <img
          className="rounded-[50%] w-max h-[187px]"
          alt="ProfileImage"
          src="https://s3-alpha-sig.figma.com/img/8d15/faec/215a80d280187e5c134b00394200bbd9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e~2YT6ObbkvB32KfKRbCwS~~aknlzmR0tCjKn2FF6OAoYZgUhJj-ALRf2GOoahgqCf~ZKTcYgogFUOB6b736CSwlKiWEoAjV7n-85hA4P9gxvCvD3yN~8uSnmEhgotXy4CSK4c0mtcja-vcD-sTBoUt7HDJQ1B-Q7jNcDQRu0WOjzPm4w~FzJDuJBzEscDVSo0ZDiEKPUl0T8JBOWAGN4dqdLOmvFSmAGenDWKrvqWri3y4u5HHuvqazcD~l0v2FfIWaceGORAz-3r7tMgfvCgokR8~GMBIjIhh5PRCBz27zfYygq2aelM9syQWDqzCtGU8JZkaEEXfYsoQ9Cvu9Rg__"
        />
        {/* <VerifiedIconSvg/> */}
      </div>

      <div className="w-[532px] h-[196px]">
        <h1 className="font-[700] text-[35px] pb-4">Ajinkya Ojha</h1>
        <p className="font-[400] text-[18px]">
          I help mid-career professionals become LIMITLESS in their business,
          relationships & health using my signature MINDeMOTION Framework |
          Metaphysical Healer - EAT™ | NLP & EFT Master | Psychotherapist |
          Corporate Trainer
        </p>
      </div>
      
      <div className="flex items-center w-[532px] gap-4 opacity-[0.3]">
        <div className="h-[80px] w-[80px] bg-white flex flex-col justify-center items-center text-black rounded-[12px]">
          <div className="">TOP</div>
          <div className="font-[700] text-[25px]">1%</div>
        </div>

        <div className="h-[80px] w-[80px] bg-white flex flex-col justify-center items-center text-black rounded-[12px]">
          <div className="">Bookings</div>
          <div className="font-[700] text-[25px]">98</div>
        </div>
      </div>

      <div className="w-[277px] h-[64px] bg-[#FFFFFF] text-black flex justify-evenly items-center rounded-[12px]">
        <SeeIconSvg />
        <strong className="text-[24px]">See</strong>
        <p className="text-[24px] font-[300]">year recap</p>
      </div>
    </div>
  );
};
