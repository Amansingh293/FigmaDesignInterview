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
        {/* <TypeOfService /> */}
        <ServicesCard array={array} />
        <h1 className="pt-4 pb-4 font-[700] text-[31px] md:self-start ml-8">
          Services and FeedBack
        </h1>
        <RatingsFeedBack ratingData={ratingData} commentData={commentData} />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;

let array = [
  {
    header: {
      icon: (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.2135 3.33331H4.54679C3.62632 3.33331 2.88013 4.07951 2.88013 4.99998V16.6666C2.88013 17.5871 3.62632 18.3333 4.54679 18.3333H16.2135C17.1339 18.3333 17.8801 17.5871 17.8801 16.6666V4.99998C17.8801 4.07951 17.1339 3.33331 16.2135 3.33331Z"
            stroke="#666B60"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.7134 1.66669V5.00002"
            stroke="#666B60"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.04688 1.66669V5.00002"
            stroke="#666B60"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.88013 8.33337H17.8801"
            stroke="#666B60"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      headerTitle: "1:1 Call",
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
      icon: (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.0469 3.33337H3.71354C2.79307 3.33337 2.04688 4.07957 2.04688 5.00004V15C2.04688 15.9205 2.79307 16.6667 3.71354 16.6667H17.0469C17.9673 16.6667 18.7135 15.9205 18.7135 15V5.00004C18.7135 4.07957 17.9673 3.33337 17.0469 3.33337Z"
            stroke="#666B60"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.7135 5.83337L11.2385 10.5834C10.9813 10.7446 10.6838 10.83 10.3802 10.83C10.0766 10.83 9.77915 10.7446 9.52188 10.5834L2.04688 5.83337"
            stroke="#666B60"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      headerTitle: "Priority DM",
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
      icon: (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4467 3.33331H4.11332C3.19285 3.33331 2.44666 4.07951 2.44666 4.99998V5.83331C2.44666 6.75379 3.19285 7.49998 4.11332 7.49998H17.4467C18.3671 7.49998 19.1133 6.75379 19.1133 5.83331V4.99998C19.1133 4.07951 18.3671 3.33331 17.4467 3.33331Z"
            stroke="#666B60"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.1134 7.5V15C4.1134 15.442 4.289 15.8659 4.60156 16.1785C4.91412 16.4911 5.33804 16.6667 5.78007 16.6667H15.7801C16.2221 16.6667 16.646 16.4911 16.9586 16.1785C17.2711 15.8659 17.4467 15.442 17.4467 15V7.5"
            stroke="#666B60"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.1134 10.8333H12.4467"
            stroke="#666B60"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      headerTitle: "Package",
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
      icon: (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.4467 3.33337H4.11332C3.19285 3.33337 2.44666 4.07957 2.44666 5.00004V5.83337C2.44666 6.75385 3.19285 7.50004 4.11332 7.50004H17.4467C18.3671 7.50004 19.1133 6.75385 19.1133 5.83337V5.00004C19.1133 4.07957 18.3671 3.33337 17.4467 3.33337Z"
            stroke="#666B60"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.1134 7.5V15C4.1134 15.442 4.289 15.8659 4.60156 16.1785C4.91412 16.4911 5.33804 16.6667 5.78007 16.6667H15.7801C16.2221 16.6667 16.646 16.4911 16.9586 16.1785C17.2711 15.8659 17.4467 15.442 17.4467 15V7.5"
            stroke="#666B60"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.1134 10.8334H12.4467"
            stroke="#666B60"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      headerTitle: "Package",
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
  totalRatings: 24,
  testimonials: 22,
};

const commentData = [
  {
    name: "John",
    comment:
      "Wow, this product exceeded my expectations! It's truly a game-changer.",
  },
  {
    name: "Alice",
    comment:
      "I can't believe how fast the service was! Efficient and effective.",
  },
  {
    name: "Michael",
    comment:
      "This team is amazing! Their dedication to customer satisfaction is unmatched.",
  },
  {
    name: "Emily",
    comment:
      "I'm impressed by the quality of the product. It's evident that a lot of care went into making it.",
  },
  {
    name: "David",
    comment:
      "Thank you for such a seamless experience. I'll definitely be recommending you to friends and family.",
  },
  {
    name: "Sophia",
    comment:
      "I've never felt so valued as a customer. Your attention to detail is much appreciated.",
  },
  {
    name: "Emma",
    comment:
      "I'm blown away by the level of professionalism displayed by your team. Keep up the great work!",
  },
  {
    name: "William",
    comment:
      "This service has made my life so much easier. I can't imagine going back to the way things were.",
  },
  {
    name: "Olivia",
    comment:
      "I'm thoroughly impressed by the results. It's clear that you're experts in your field.",
  },
  {
    name: "James",
    comment:
      "I'm beyond satisfied with my purchase. You've gained a loyal customer for life!",
  },
];
