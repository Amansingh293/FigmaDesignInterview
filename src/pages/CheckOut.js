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
import { ConfirmDetail } from "../components/ConfirmDetail";
import myImage from '../components/IconsSvg/ProfileImage.jpg';

const CheckOut = () => {
  const navigate = useNavigate();

  let params = useParams();

  let [currentService, setCurrentService] = useState([]);

  const handleService = () => {
    try {
      let service = servicesArray[params.id].fullContent;
      setCurrentService(service);
      console.log(service.content1);
    } catch (err) {
      console.log(err.message);
    }
  };
  console.log(currentService);
  useEffect(() => {
    handleService();
  }, []);

  return (
    <>
      <div className=" h-fit bg-[#F8F7F2] flex flex-col xl:flex-row justify-center items-center xl:items-start p-8 gap-4">
        <div className="md:max-w-[30rem] w-fit h-full flex flex-col justify-start items-start border border-black rounded-[40px] overflow-hidden bg-white">
          <div className="flex flex-col bg-[#ffd7d5] relative w-full gap-4">
            <div className="w-full h-[2rem]  flex flex-start items-center gap-4 p-8 ">
              <FaArrowLeft
                className="cursor-pointer"
                onClick={() => navigate("/")}
              />{" "}
              {currentService.profile}
            </div>
            <div className="w-[70%] h-[2rem] flex flex-start items-center gap-4 pl-4">
              <h1 className="font-[700] text-[1rem]">
                {currentService.content1}
              </h1>
            </div>
            <div className="h-fit w-full p-4 flex justify-start items-center gap-4">
              <PayIconSvg />
              <div className="h-[2.5rem] w-[5rem] flex justify-evenly items-center rounded-[5px] bg-[#f89d9a]">
                <StarIconSvg />
                {currentService.rating}/{currentService.maxRating} ({currentService.maxRating})
              </div>
            </div>
            <img
              className="rounded-[50%] w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem] absolute right-2 md:right-4 top-12 md:top-11"
              alt="ProfileImage"
              src={myImage}
            />
          </div>
          <div className="w-full h-fit border flex flex-col md:flex-row justify-center items-center">
            <div className="h-[2rem] w-full md:w-[50%] flex justify-center items-center border p-8">
              <div className="w-[100%] flex justify-around items-center border rounded-[24px] bg-[#EBEAEB]">
                <s>₹ {currentService.beforeDiscount}</s> <strong>₹ {currentService.afterDiscount} + </strong>
              </div>
            </div>
            <div className="h-[2rem] w-full md:w-[50%] flex justify-center items-center border p-8">
              <div className="w-[100%] flex justify-around items-center border rounded-[24px] bg-[#EBEAEB]">
                <FaRegCalendar /> {currentService.meetingDuration} minutes meeting
              </div>
            </div>
          </div>
          <div className="w-full h-fit p-4">
            <p className="pb-7">{currentService.content1}</p>
            <p className="pb-7">
            {currentService.content2}
            </p>
            <p className="pb-7">
              {currentService.content3}
            </p>
            <p className="pb-7">
             {currentService.content4}
            </p>
            <p className="pb-7">
              {currentService.content5}
            </p>
            <strong className="pb-4 block">Bonus:</strong>
            <p className="pb-7">
              {currentService.content6}
            </p>
            <p className="pb-7">
            {currentService.content7}
            </p>
            <p className="pb-7">
            {currentService.contentLink}
            </p>
            <p className="pb-7">{currentService.seeYou}</p>
          </div>

          <div className="h-fit w-full p-4">
            <div className="h-auto md:h-[2rem] w-full flex justify-between items-center pb-4">
              <h1 className="font-[700] text-[1.5rem] ">Testimonials</h1>
              <div className="w-[20%] flex justify-around items-center">
              </div>{" "}
            </div>
            <div className="flex flex-col h-auto md:flex-row justify-evenly items-center gap-2">
            {currentService?.testimonials?.map((obj)=>{
              return <TestimonialsCard data = {obj}/>
            })}
            </div>
          </div>

          <div className="w-full h-[4rem] flex justify-between items-center p-2">
            <h1 className="font-[700] text-[1.3rem] md:text-[1.8rem]">
              More Offerings
            </h1>
            <div className="h-full w-[35%] md:w-[25%] flex justify-between items-center rounded-[40px] bg-[#ffa09b]">
              <FaRegCheckCircle className="w-[30%] text-[1.2rem]" />
              <div className="flex w-[70%] h-full flex-col justify-center items-center">
                <p>{currentService.sessions}</p>
                <p>Sessions</p>
              </div>
            </div>
          </div>

          <div className="flex p-4 h-[15rem] bg-[#F7F7F7] w-full gap-4 flex-col md:flex-row">
            <MoreOfferings />
            <MoreOfferings />
          </div>
        </div>
        <ConfirmDetail />
      </div>
    </>
  );
};

export default CheckOut;
