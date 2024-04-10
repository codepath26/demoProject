import React from "react";

function Card({ bgUrl, title, subTitle, digits, change, total }) {
  console.log(bgUrl);
  return (
    <div className="rounded-[10px] min-w-[220px]">
      <div
        className={`bg-center bg-cover bg-no-repeat  rounded-[10px] text-white p-2`}
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <div className=" ps-2 text-xl">{title}</div>
        <div className="text-[10px] mb-3 ps-2">{subTitle}</div>
        <div className="ps-2 text-xl">{digits}</div>
        <div className="ps-2 text-[10px] mb-2">{change}</div>
        <div className="text-[10px]">{total}</div>
      </div>
    </div>
  );
}

export default Card;
