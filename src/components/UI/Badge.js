import React from "react";

function Badge({ data }) {
  return (
    <div className=" relative shadow-md px-2 py-1 rounded-[10px] mx-3">
      <i className={`fa-solid ${data}`}></i>
      <span className=" absolute  rounded-full -top-3 right-1">
        <i className="fa-solid text-[#539abb] text-[7px] fa-circle"></i>
      </span>
    </div>
  );
}

export default Badge;
