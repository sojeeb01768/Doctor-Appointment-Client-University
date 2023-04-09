import React from "react";
import Cards from "./Cards/Cards";
// import Content from "./Content";
import Intro from "./Intro";
import "./StickyCards.css";
const StickyCards = () => {
  return (
    <div className="bg-sticky">
      <div className="mx-auto max-w-4xl pb-10 pt-20 px-5">
        <Intro />
        <Cards />
        {/* <Content /> */}
      </div>
      <div className="border-bottom mt-10"></div>
    </div>
  );
};

export default StickyCards;
