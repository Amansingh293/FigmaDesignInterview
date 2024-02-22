import React from "react";
import { Aside } from "./Aside";
import { Card } from "./Card";

export const ServicesCard = ({ array }) => {
  return (
    
    <div className="grid grid-cols-auto md:grid-cols-2 gap-4 p-4">
      {array.map((obj , i) => {
        return <Card key={i} data={obj} />;
      })}
    </div>
  );
};
