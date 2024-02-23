import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaRegCheckCircle } from "react-icons/fa";
import { PayIconSvg } from "../components/IconsSvg/PayIconSvg";
import { StarIconSvg } from "../components/IconsSvg/StarIconSvg";
import { FaRegCalendar } from "react-icons/fa";
import TestimonialsCard from "../components/TestimonialsCard";
import { MoreOfferings } from "../components/MoreOfferingsCard";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { servicesArray } from "../dummyData";

const CheckOut = () => {
  const navigate = useNavigate();

  let params = useParams();

  let [currentService, setCurrentService] = useState({});

  const handleService = () => {
    try {
      let service = servicesArray[params.id].fullContent;
      setCurrentService(service);
      console.log(service);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    handleService();
  }, []);
  return (
    <>
      {currentService && (
        <div className="w-full h-fit bg-[#F8F7F2] flex justify-center items-center p-8">
          <div className=" w-[30rem] h-full flex flex-col justify-start items-start border border-black rounded-[40px] overflow-hidden bg-white">
            <div className="flex flex-col bg-[#ffd7d5] relative w-full gap-4">
              <div className="w-full h-[2rem]  flex flex-start items-center gap-4 p-8 ">
                <FaArrowLeft
                  className="cursor-pointer"
                  onClick={() => navigate("/")}
                />{" "}
                Anjikya Ojha
              </div>
              <div className="w-[70%] h-[2rem] flex flex-start items-center gap-4 pl-4">
                <h1 className="font-[700] text-[1rem]">
                  EAT™- Energy Healing Session dada ada d qwdfqwdf{" "}
                </h1>
              </div>
              <div className="h-fit w-full p-4 flex justify-start items-center gap-4">
                <PayIconSvg />
                <div className="h-[2.5rem] w-[5rem] flex justify-evenly items-center rounded-[5px] bg-[#f89d9a]">
                  <StarIconSvg />
                  5/5 (5)
                </div>
              </div>
              <img
                className="rounded-[50%] w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem] absolute right-2 md:right-4 top-12 md:top-11"
                alt="ProfileImage"
                src="https://s3-alpha-sig.figma.com/img/8d15/faec/215a80d280187e5c134b00394200bbd9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e~2YT6ObbkvB32KfKRbCwS~~aknlzmR0tCjKn2FF6OAoYZgUhJj-ALRf2GOoahgqCf~ZKTcYgogFUOB6b736CSwlKiWEoAjV7n-85hA4P9gxvCvD3yN~8uSnmEhgotXy4CSK4c0mtcja-vcD-sTBoUt7HDJQ1B-Q7jNcDQRu0WOjzPm4w~FzJDuJBzEscDVSo0ZDiEKPUl0T8JBOWAGN4dqdLOmvFSmAGenDWKrvqWri3y4u5HHuvqazcD~l0v2FfIWaceGORAz-3r7tMgfvCgokR8~GMBIjIhh5PRCBz27zfYygq2aelM9syQWDqzCtGU8JZkaEEXfYsoQ9Cvu9Rg__"
              />
            </div>
            <div className="w-full h-fit border flex flex-col md:flex-row justify-center items-center">
              <div className="h-[2rem] w-full md:w-[50%] flex justify-center items-center border p-8">
                <div className="w-[100%] flex justify-around items-center border rounded-[24px] bg-[#EBEAEB]">
                  <s>Rs 10,000</s> <strong>Rs 8000 + </strong>
                </div>
              </div>
              <div className="h-[2rem] w-full md:w-[50%] flex justify-center items-center border p-8">
                <div className="w-[100%] flex justify-around items-center border rounded-[24px] bg-[#EBEAEB]">
                  <FaRegCalendar /> 60 minutes meeting
                </div>
              </div>
            </div>
            <div className="w-full h-fit p-4">
              <p className="pb-7">I am so happy to see you here!</p>
              <p className="pb-7">
                If you are reading this, I am sure you are eager to take that
                leap of faith that brings abundance in all areas of your life -
                relationships, health, and finance.
              </p>
              <p className="pb-7">
                EAT stands for{" "}
                <strong>Emotional Awakening & Transformation </strong> and is my
                signature modality
              </p>
              <p className="pb-7">
                It is a <strong>metaphysical energy healing tool </strong> in
                which we tap into your subconscious mind to eliminate the
                negative trapped emotions which are holding you back to unleash
                your true potential.
              </p>
              <p className="pb-7">
                I couldn't be more proud and elated to see your transformational
                journey begin with me.
              </p>
              <strong className="pb-4 block">Bonus:</strong>
              <p className="pb-7">
                "Spiritual Detox" assistance (after the session for 7 days.)
              </p>
              <p className="pb-7">
                Affirm your belief with the testimonies of the people who had
                experienced this magic :
              </p>
              <p className="pb-7">
                https://padlet.com/pallavisharmamishra/cbpi3bzrl4la4flm
              </p>
              <p className="pb-7">See you in!</p>
            </div>

            <div className="h-fit w-full p-4">
              <div className="h-auto md:h-[2rem] w-full flex justify-between items-center pb-4">
                <h1 className="font-[700] text-[1.5rem] ">Testimonials</h1>
                <div className="w-[20%] flex justify-around items-center">
                  <FaArrowLeft /> <FaArrowRight />
                </div>{" "}
              </div>
              <div className="flex flex-col h-auto md:flex-row justify-evenly items-center gap-2">
                <TestimonialsCard />
                <TestimonialsCard />
              </div>
            </div>

            <div className="w-full h-[4rem] flex justify-between items-center p-2">
              <h1 className="font-[700] text-[1.3rem] md:text-[1.8rem]">
                More Offerings
              </h1>
              <div className="h-full w-[35%] md:w-[25%] flex justify-between items-center rounded-[40px] bg-[#ffa09b]">
                <FaRegCheckCircle className="w-[30%] text-[1.2rem]" />
                <div className="flex w-[70%] h-full flex-col justify-center items-center">
                  <p>98</p>
                  <p>Sessions</p>
                </div>
              </div>
            </div>

            <div className="flex p-4 h-[15rem] bg-[#F7F7F7] w-full gap-4 flex-col md:flex-row">
              <MoreOfferings />
              <MoreOfferings />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckOut;
