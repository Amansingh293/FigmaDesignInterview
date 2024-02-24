import React from "react";
import { Aside } from "../components/Aside";
import { ServicesCard } from "../components/ServicesCard";
import RatingsFeedBack from "../components/RatingsFeedBack";
import { AboutMe } from "../components/AboutMe";

// Home page 

export const Home = ({ servicesArray, ratingData, commentData }) => {
  return (
    <div className="flex flex-col lg:flex-row w-[100vw] lg:w-[98vw] h-fit ">
      <Aside />
      <div className="h-fit w-full flex flex-col justify-center items-center p-4 pt-8">
        <ServicesCard array={servicesArray} />
        <h1 className="pt-4 pb-4 md:pl-[4rem]  font-[700] text-[31px] md:self-start">
          Services and FeedBack
        </h1>
        <RatingsFeedBack ratingData={ratingData} commentData={commentData} />
        <AboutMe />
      </div>
    </div>
  );
};
