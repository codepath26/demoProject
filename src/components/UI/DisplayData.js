import React from "react";

function DisplayData({ data }) {
  return (
    <div className="flex border-t border-b border-gray-300 py-2">
      <div className="w-[18%]">{data.col1}</div>
      <div className="w-[83%] flex   justify-between">
        <span>{data.col2}</span>
        <span>{data.col3}</span>
        <span>{data.col4}</span>
        <span>{data.col5}</span>
        <span>{data.col6}</span>
        <span>{data.col7}</span>
      </div>
    </div>
  );
}

export default DisplayData;
