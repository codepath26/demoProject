import React from "react";
import NewCard from "../UI/NewCard";

function CardsList() {
  const data = [
    {
      title: "On Time",
      firstData: "Completed Iterations",
      firstValue: 7,
      secondData: "Total Iteration",
      secondValue: 9,
      thirdDate: "% Iterations Done",
      thidValue: "77.8%",
      badgeColor: "green",
    },
    {
      title: "On Scope",
      firstData: "Story Points Done",
      firstValue: 3200,
      secondData: "Total Story Points",
      secondValue: 4230,
      thirdDate: "% Store Done",
      thidValue: "70.9%",
      badgeColor: "green",
    },
    {
      title: "On Velocity",
      firstData: "Average Velocity",
      firstValue: 438.6,
      secondData: "Required Velocity",
      secondValue: 615.0,
      thirdDate: null,
      thidValue: null,
      badgeColor: "orange",
    },
  ];
  return (
    <div className="flex justify-around">
      {data.map((eachCard) => {
        return <NewCard eachCard={eachCard} />;
      })}
    </div>
  );
}

export default CardsList;
