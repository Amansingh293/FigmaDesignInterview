import React from "react";
import { Aside } from "../components/Aside";
import { ServicesCard } from "../components/ServicesCard";
import RatingsFeedBack from "../components/RatingsFeedBack";
import { AboutMe } from "../components/AboutMe";

export const Home = ({ servicesArray, ratingData, commentData }) => {
  return (
    <div className="flex flex-col lg:flex-row w-[100vw] h-fit ">
      <Aside />
      <div className="h-fit w-full flex flex-col justify-center items-center p-4 pt-8">
        <ServicesCard array={servicesArray} />
        <h1 className="pt-4 pb-4 font-[700] text-[31px] md:self-start ml-8">
          Services and FeedBack
        </h1>
        <RatingsFeedBack ratingData={ratingData} commentData={commentData} />
        <AboutMe />
      </div>
    </div>
  );
};
