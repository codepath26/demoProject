import React from "react";

function NewCard({ eachCard }) {
  const {
    title,
    firstData,
    firstValue,
    secondData,
    secondValue,
    thirdDate,
    thidValue,
    badgeColor,
  } = eachCard;
  return (
    <div className="flex flex-col min-w-[300px] relative shadow-lg mt-3 p-4">
      <span className="absolute top-3 right-6">
        <i className={`fa-solid fa-circle text-${badgeColor}-500`}></i>
      </span>
      <h1 className="font-bold mb-2">{title}</h1>
      <div className="flex justify-between mt-3">
        <span>{firstData}</span> <span className="font-bold">{firstValue}</span>
      </div>
      <div className="flex justify-between mt-2">
        <span>{secondData}</span>{" "}
        <span className="font-bold">{secondValue}</span>
      </div>
      <div className="flex justify-between mt-2">
        <span>{thirdDate}</span> <span className="font-bold">{thidValue}</span>
      </div>
    </div>
  );
}

export default NewCard;
