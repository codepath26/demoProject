import React from "react";

function Profile({ imgUrl }) {
  return (
    <div className="rounded-full mx-3 w-[30px]  object-cover">
      <img src={imgUrl} alt="profile" className="rounded-full w-full h-full" />
    </div>
  );
}

export default Profile;
