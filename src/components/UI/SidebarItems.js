import React from "react";

function SidebarItems({ data, icon }) {
  return (
    <li className="ps-5 my-5">
      <div className="w-[70%] rounded p-2 hover:bg-[#539abb]">
        <i className={`me-3 fa-solid ${icon}`}></i>
        <span>{data}</span>
      </div>
    </li>
  );
}

export default SidebarItems;
