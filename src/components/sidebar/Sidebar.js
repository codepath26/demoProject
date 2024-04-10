import React from "react";
import SidebarItems from "../UI/SidebarItems";

function Sidebar() {
  return (
    <div className="w-[25%] flex justify-center ">
      <div className=" relative rounded-[30px] w-[90%] h-[90%] bg-[#2f667f]">
        <div className=" flex justify-end mb-3 mt-3 ">
          <i className="fa-solid text-white me-2 mt-2 pe-2 fa-circle-chevron-left text-xl"></i>
        </div>
        <div className="text-white ps-5 ">
          <h1 className="text-[24px] font-bold">
            <i className="me-2 fa-solid fa-cube"></i>
            <span> Catailx</span>
          </h1>
        </div>
        <div className="mt-10 ">
          <ul className="w-full  h-full text-white">
            <SidebarItems data="Home" icon="fa-home" />
            <SidebarItems data="Activies" icon="fa-clock" />
            <SidebarItems data="analitics" icon="fa-chart-simple" />
            <SidebarItems data="Transformation" icon="fa-rocket" />
            <SidebarItems data="library" icon="fa-book" />
          </ul>
        </div>
        <hr className="text-white  absolute bottom-10 left-0 right-0 w-[95%] mx-auto" />
      </div>
    </div>
  );
}

export default Sidebar;
