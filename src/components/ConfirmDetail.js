import React, { useEffect, useState } from "react";
import { DateItem } from "./DateItem";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { TimeItem } from "./TimeItem";
import {
  IoArrowBackCircleSharp,
  IoArrowForwardCircleSharp,
} from "react-icons/io5";
import { IoDiamondOutline } from "react-icons/io5";

// user confirmation     component

export const ConfirmDetail = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [activeTimeIndex , setActiveTimeIndex] = useState(0);

  const [offSet, setOffset] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
    setTimeout(()=>setIsOpen(false) , 500);
  };
  const dateGenerator = (offsetDay) => {
    // Function to get the name of the day
    function getDayName(dayIndex) {
      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return days[dayIndex];
    }

    // Function to get the name of the month
    function getMonthName(monthIndex) {
      let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      return months[monthIndex];
    }

    // Create an array to store the objects
    let datesArray = [];

    // Get the current date
    let currentDate = new Date();

    currentDate.setDate(currentDate.getDate() + offsetDay);

    // Loop to get the current date and the next 5 dates
    for (let i = 0; i < 5; i++) {
      let dateObject = {};

      // Get the date
      dateObject.date = currentDate.getDate();

      // Get the day
      dateObject.day = getDayName(currentDate.getDay());

      // Get the month
      dateObject.month = getMonthName(currentDate.getMonth());

      // Add the object to the array
      datesArray.push(dateObject);

      // Move to the next day
      currentDate.setDate(currentDate.getDate() + 1);
    }
    // Output the array of objects
    return datesArray;
  };

  const timeGenerator = () => {
    var timesArray = [];

    // Get the current date
    var currentDate = new Date();

    // Loop to get the current time and the next 5 hours
    for (var i = 0; i < 3; i++) {
      var timeObject = {};

      // Get the hour
      timeObject.hour = currentDate.getHours();

      // Add the object to the array
      timesArray.push(timeObject);

      // Move to the next hour
      currentDate.setHours(currentDate.getHours() + 1);
    }

    // Output the array of objects
    console.log(timesArray);
    return timesArray;
  };

  const [dateList, setDateList] = useState(() => dateGenerator(0));
  const [timeList, setTimeList] = useState(() => timeGenerator());

  const handleLeftClick = () => {
    if (activeIndex === 0) {
      console.log("Update Date List");
      setOffset((prev) => prev - 1);
      setDateList(dateGenerator(offSet));
    } else {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const handleRightClick = () => {
    if (activeIndex === 4) {
      console.log("Update Date List");
      setOffset((prev) => prev + 1);
      setDateList(dateGenerator(offSet));
    } else {
      setActiveIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="md:max-w-[30rem] w-fit min-h-[42rem] h-auto border border-black rounded-[40px] p-4 bg-[#FFFFFF] flex flex-col items-start gap-2">
      <div className="font-[700] text-[1rem] p-2">Pick a date</div>

      <div className="flex flex-col md:flex-row justify-around items-center w-full flex-wrap">
        <IoArrowBackCircleSharp
          onClick={handleLeftClick}
          className="text-[1.5rem] cursor-pointer "
        />
        {dateList &&
          dateList.map((date, i) => {
            return (
              <DateItem key={i} date={date} activeIndex={activeIndex == i} />
            );
          })}
        <IoArrowForwardCircleSharp
          onClick={handleRightClick}
          className="text-[1.5rem] cursor-pointer"
        />
      </div>

      <div className="font-[700] text-[1rem] p-2">Pick a Time</div>
      <div className="flex flex-col md:flex-row justify-start items-center gap-4 p-2 pl-8 pr-8 w-full">
        {timeList &&
          timeList.map((time, i) => {
            return <TimeItem key={i} time={time} isActive={activeTimeIndex == i} setActiveTimeIndex={setActiveTimeIndex} index={i}/>;
          })}
      </div>

      <div className="h-[4rem] flex flex-col justify-evenly items-start gap-2 w-full pl-4 pr-4">
        <h1 className="font-[1rem] pb-2">TimeZone</h1>
        <select className="w-full h-[2rem] border-none">
          <option hidden value="" aria-required>
            Select...
          </option>
          <option value="Pacific/Midway">(GMT-11:00) Midway Island</option>
          <option value="Pacific/Honolulu">(GMT-10:00) Hawaii</option>
          <option value="America/Los_Angeles">
            (GMT-08:00) Pacific Time (US & Canada)
          </option>
          <option value="America/Denver">
            (GMT-07:00) Mountain Time (US & Canada)
          </option>
          <option value="America/Chicago">
            (GMT-06:00) Central Time (US & Canada)
          </option>
          <option value="America/New_York">
            (GMT-05:00) Eastern Time (US & Canada)
          </option>
          <option value="America/Argentina/Buenos_Aires">
            (GMT-03:00) Buenos Aires
          </option>
          <option value="Europe/London">(GMT+00:00) London</option>
          <option value="Europe/Paris">(GMT+01:00) Paris</option>
          <option value="Asia/Tokyo">(GMT+09:00) Tokyo</option>
        </select>
      </div>
      <div className="h-[3rem] w-[90%] bg-black text-white flex justify-center items-center self-center rounded mt-4 cursor-pointer" onClick={openPopup}>
        Confirm Details
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-lg">
            <p>Confirmed !</p>
          </div>
        </div>
      )}

      <div className="min-h-[5rem] h-auto w-[90%] border flex justify-around items-center p-4 self-center mt-2 rounded">
        <p className="w-[60%]">
          This is a Rare findstrong
          <strong>Aman's time on topmate is usually booked.</strong>
        </p>
        <IoDiamondOutline className="w-[40%] text-[3rem]" />
      </div>
    </div>
  );
};
