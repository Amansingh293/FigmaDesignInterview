import React from "react";

export const ReviewCard = ({ name , comment}) => {
  return (
    <div className="flex flex-col h-[16rem] w-[27rem] border border-black rounded-[32px] p-4 bg-[#FDFBF9]">
      <div className="h-[10%] w-full mb-2">
        <svg
          width="35"
          height="24"
          viewBox="0 0 35 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.25153 8.875C12.3592 8.875 15.689 12.2049 15.689 16.3125C15.689 20.4201 12.3592 23.75 8.25153 23.75C4.1439 23.75 0.814029 20.4201 0.814029 16.3125L0.780029 15.25C0.780029 7.03475 7.43978 0.375 15.655 0.375V4.625C12.816 4.625 10.1492 5.73 8.14103 7.736C7.75428 8.12275 7.40153 8.53288 7.0849 8.96425C7.46528 8.90475 7.85415 8.87288 8.2494 8.87288L8.25153 8.875ZM27.3765 8.875C31.4842 8.875 34.814 12.2049 34.814 16.3125C34.814 20.4201 31.4842 23.75 27.3765 23.75C23.2689 23.75 19.939 20.4201 19.939 16.3125L19.905 15.25C19.905 7.03475 26.5648 0.375 34.78 0.375V4.625C31.941 4.625 29.2742 5.73 27.266 7.736C26.8793 8.12275 26.5265 8.53288 26.2099 8.96425C26.5903 8.90475 26.9792 8.875 27.3765 8.875Z"
            fill="#EFE3D2"
          />
        </svg>
      </div>
      <div className="h-[80%] w-full">
       {comment}
      </div>
      <div className="h-[10%] font-[700]">{name}</div>
    </div>
  );
};