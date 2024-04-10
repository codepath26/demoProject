import React from "react";

function Searchbox() {
  return (
    <div className="w-[50%] border border-black py-1">
      <form>
        <div className="ps-2">
          <span>
            <i className="fa-solid text-[#539abb] fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            className="outline-none ps-4 font-lighter text-sm w-[90%]  text-black"
            placeholder="Search by profile, setting, artifact etc..."
          />
          <span>
            <i className="fa-regular fa-circle-xmark text-[#539abb]"></i>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Searchbox;
