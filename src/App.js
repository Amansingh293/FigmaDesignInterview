import logo from "./logo.svg";
import "./App.css";
import { Card } from "./components/Card";
import { TypeOfService } from "./components/TypeOfService";
import { Aside } from "./components/Aside";
import { ServicesCard } from "./components/ServicesCard";
import { ReviewCard } from "./components/ReviewCard";
import RatingsFeedBack from "./components/RatingsFeedBack";
import { AboutMe } from "./components/AboutMe";

function App() {
  return (
    <div className="flex flex-col md:flex-row w-fit h-fit ">
      <Aside />
      <div className="h-fit w-full flex flex-col items-center p-4 pt-8">
        <TypeOfService />
        <ServicesCard array={array} />
        <h1 className="pt-4 pb-4 font-[700] text-[31px] md:self-start ml-8">Services and FeedBack</h1>
        <RatingsFeedBack ratingData={ratingData} commentData={commentData}/>
      <AboutMe />
      </div>
    </div>
  );
}

export default App;

let array = [
  {
    header: {
      icon: "box",
      headerTitle: "package",
      navigationIcon: "Arrow",
    },
    body: {
      heading: "MASTERING MINDeMOTION WELLNESS PROGRAM",
      subHeading: "Bundle Package of 10 sessions",
    },
    footer: {
      info: "prod",
      price: "Rs 2500",
    },
  },
  {
    header: {
      icon: "box",
      headerTitle: "package",
      navigationIcon: "Arrow",
    },
    body: {
      heading: "MASTERING MINDeMOTION WELLNESS PROGRAM",
      subHeading: "Bundle Package of 10 sessions",
    },
    footer: {
      info: "prod",
      price: "Rs 2500",
    },
  },
  {
    header: {
      icon: "box",
      headerTitle: "package",
      navigationIcon: "Arrow",
    },
    body: {
      heading: "MASTERING MINDeMOTION WELLNESS PROGRAM",
      subHeading: "Bundle Package of 10 sessions",
    },
    footer: {
      info: "prod",
      price: "Rs 2500",
    },
  },
  {
    header: {
      icon: "box",
      headerTitle: "package",
      navigationIcon: "Arrow",
    },
    body: {
      heading: "MASTERING MINDeMOTION WELLNESS PROGRAM",
      subHeading: "Bundle Package of 10 sessions",
    },
    footer: {
      info: "prod",
      price: "Rs 2500",
    },
  },
];


let ratingData = {
  rating: 5,
  maxRating: 5,
  totalRatings:24,
  testimonials: 22
};


const commentData = [
  { name: "John", comment: "Wow, this product exceeded my expectations! It's truly a game-changer." },
  { name: "Alice", comment: "I can't believe how fast the service was! Efficient and effective." },
  { name: "Michael", comment: "This team is amazing! Their dedication to customer satisfaction is unmatched." },
  { name: "Emily", comment: "I'm impressed by the quality of the product. It's evident that a lot of care went into making it." },
  { name: "David", comment: "Thank you for such a seamless experience. I'll definitely be recommending you to friends and family." },
  { name: "Sophia", comment: "I've never felt so valued as a customer. Your attention to detail is much appreciated." },
  { name: "Emma", comment: "I'm blown away by the level of professionalism displayed by your team. Keep up the great work!" },
  { name: "William", comment: "This service has made my life so much easier. I can't imagine going back to the way things were." },
  { name: "Olivia", comment: "I'm thoroughly impressed by the results. It's clear that you're experts in your field." },
  { name: "James", comment: "I'm beyond satisfied with my purchase. You've gained a loyal customer for life!" }
];
