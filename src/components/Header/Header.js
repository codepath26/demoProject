import React from "react";
import Searchbox from "./searchBox/Searchbox";
import Optiondata from "./options/Optiondata";

function Header() {
  return (
    <div className="flex justify-between mt-3 ps-10">
      <Searchbox />
      <Optiondata />
    </div>
  );
}

export default Header;
