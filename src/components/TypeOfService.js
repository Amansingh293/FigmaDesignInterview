import React from "react";

export const TypeOfService = ({  }) => {
  return (
    <div className="flex justify-start items-center gap-4 w-fit md:w-[911px] h-[78px]">
      {typesData.map((title , i) => {
        const { type, backgroundColor } = title;

        return (
          <button
            key={i}
            className="h-[54px] w-[68px] p-1 rounded-[12px]"
            style={{
              backgroundColor: `${backgroundColor}`,
              color: `${backgroundColor === "black" ? "white" : "black"}`,
            }}
          >
            {type}
          </button>
        );
      })}
    </div>
  );
};

let typesData = [
  { type: "All", backgroundColor: "black" },
  { type: "1:1 Call", backgroundColor: "#F7F7F7" },
  { type: "Priority DM", backgroundColor: "#F7F7F7" },
  { type: "Package", backgroundColor: "#F7F7F7" },
];
