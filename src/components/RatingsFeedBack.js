import React, { useState } from "react";
import { BalloonsIcon } from "./IconsSvg/BalloonsIcon";
import { ReviewCard } from "./ReviewCard";

const RatingsFeedBack = ({ ratingData, commentData }) => {
  console.log(commentData.length);
// eslint-disable-next-line
  let [firstFourComments, setFirstFourComments] = useState(
    commentData.slice(0, 4)
  );
// eslint-disable-next-line
  let [remainingComments, setRemainingComments] = useState(commentData);

  let { rating, totalRatings, testimonials, maxRating } = ratingData;
  console.log(totalRatings);

  let [showMore, setShowMore] = useState(false);

  console.log(commentData, "=====", firstFourComments);

  return (
    <>
      <div className="grid grid-cols-auto lg:grid-cols-2 w-fit md:w-[56rem] gap-4">
        <div className="w-[27rem] h-[11rem] border border-black rounded-[32px] relative bg-[#FDFBF9]">
          <BalloonsIcon
            className="absolute left-[50%]"
          />
        </div>
        <div className="w-[27rem] h-[11rem] flex justify-between items-center">
          <div className="w-[12rem] h-[11rem] border border-black rounded-[32px] flex flex-col justify-center items-center">
            <p className="text-[32px] font-[700]">
              {rating}/{maxRating}
            </p>
            <p>{totalRatings} Ratings</p>
          </div>
          <div className="w-[12rem] h-[11rem] border border-black rounded-[32px] flex flex-col justify-center items-center">
            <p className="text-[32px] font-[700]">{testimonials}</p>
            <p>Testimonials</p>
          </div>
        </div>

        {firstFourComments.map((obj, i) => {
          let { name, comment } = obj;
          return <ReviewCard key={i} name={name} comment={comment} />;
        })}

        {showMore &&
          remainingComments.map((obj, i) => {
            let { name, comment } = obj;
            return <ReviewCard key={i} name={name} comment={comment} />;
          })}
      </div>
      <button
        className="h-[48px] w-[196px] border rounded-[6px] self-start lg:self-center mt-4"
        onClick={() => setShowMore(!showMore)}
      >
        {!showMore ? `Show All ${commentData.length} Reviews` : "Show Less"}
      </button>
    </>
  );
};

export default RatingsFeedBack;
