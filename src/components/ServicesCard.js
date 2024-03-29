import React, { useState } from "react";
import { Card } from "./Card";

// this will render all services available with types selection

export const ServicesCard = ({ array }) => {
  let [selectedService, setSelectedService] = useState("All");

  let [filteredArray, setFilteredArray] = useState(
    selectedService === "All" ? [...array] : []
  );

  // Below code will handle filtering of services based on service selected by user
  const handleFilterService = (e) => {
    const currentValue = e.target.textContent;

    setSelectedService(currentValue);

    if (currentValue === "All") {
      setFilteredArray([...array]);
      return;
    }

    let copyFilter = array.filter(
      (obj) => obj.header.headerTitle === currentValue
    );

    setFilteredArray((filteredArray) => (filteredArray = copyFilter));
  };

  return (
    <div className="lg:w-[60vw]">
      {/*Below code's first part will generate dynamic buttons with services available */}

      <div className="flex justify-start items-center gap-4 w-full h-[78px]">
        {typesData.map((title, i) => {
          const { type } = title;

          return (
            <button
              key={i}
              className="h-[54px] w-[68px] p-1 rounded-[12px] border"
              style={
                type === selectedService
                  ? {
                      backgroundColor: `black`,
                      color: `white`,
                    }
                  : {
                      backgroundColor: `white`,
                      color: `black`,
                    }
              }
              onClick={handleFilterService}
            >
              {type}
            </button>
          );
        })}
      </div>

      {/* below code will show cards based on the selected or all services available*/}

      <div className="grid grid-cols-auto md:grid-cols-2 2xl:grid-flow-col-3 gap-4 w-full">
        {filteredArray.map((obj, i) => {
          return <Card key={i} data={obj} index={i} />;
        })}
      </div>
    </div>
  );
};

let typesData = [
  { type: "All" },
  { type: "1:1 Call" },
  { type: "Priority DM" },
  { type: "Package" },
];
