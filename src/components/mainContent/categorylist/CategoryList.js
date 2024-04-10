import React from "react";
import CategorySec from "../../UI/CategorySec";
import CardList from "../cards/CardList";

function CategoryList() {
  return (
    <>
      <div className="flex justify-between mt-5 me-3">
        <CategorySec text="+ Create Report" />
        <CategorySec text="Share this Dashboard" />
        <CategorySec text="Select Duration" />
        <CategorySec text="Compare with Duration" />
      </div>
      <div>
        <CardList />
      </div>
    </>
  );
}

export default CategoryList;
