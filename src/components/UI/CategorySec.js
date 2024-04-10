import React from "react";

function CategorySec({ text }) {
  return (
    <div className="">
      <div className="border border-gray-700 rounded-[20px] text-black px-5 py-1 hover:bg-[#2a7192] hover:text-white">
        {text}
      </div>
    </div>
  );
}

export default CategorySec;
