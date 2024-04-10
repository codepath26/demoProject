import React from "react";

function TableTitle({ text, value }) {
  return (
    <span className="flex flex-col ">
      <div>{text}</div>
      <div className="font-bold text-end">{value}</div>
      {/* <span></span>  */} {/* this is for the graph */}
    </span>
  );
}

export default TableTitle;
