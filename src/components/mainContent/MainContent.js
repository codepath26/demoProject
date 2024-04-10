import React from "react";
import Header from "../Header/Header";
import CategoryList from "./categorylist/CategoryList";
import CardsList from "../cardlist/CardsList";
import PageView from "../pageview/PageView";

function MainContent() {
  return (
    <div className="w-[74%] ms-3">
      <Header />
      <CategoryList />
      <CardsList />
      <PageView />
    </div>
  );
}

export default MainContent;
