import React from "react";
import Cards from "./Cards/Cards";
// import Content from "./Content";
import Intro from "./Intro";

const StickyCards = () => {
  return (
    <div>
      <div className="mx-auto max-w-4xl mb-10 px-5">
        <Intro />
        <Cards />
        {/* <Content /> */}
      </div>
    </div>
  );
};

export default StickyCards;
