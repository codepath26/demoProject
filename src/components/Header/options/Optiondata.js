import React from "react";
import Badge from "../../UI/Badge";
import Profile from "../../UI/Profile";

function Optiondata() {
  return (
    <div className="w-[50%] flex justify-end">
      <Badge data="fa-bell" />
      <Badge data="fa-message" />
      <Badge data="fa-gear" />
      <Profile imgUrl="https://tse4.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gAAAA&pid=Api&P=0&h=180" />
    </div>
  );
}

export default Optiondata;
