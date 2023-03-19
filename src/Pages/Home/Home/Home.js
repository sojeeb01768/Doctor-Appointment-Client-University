import React from "react";
import Banner from "../Banner/Banner";
import HomeCarousel from "../Carousel/HomeCarousel";
import StickyCards from "../StickyCards/StickyCards";

// import Cards from "../Cards/Cards";

const Home = () => {
  return (
    //This is home
    <div>
      <Banner></Banner>
      {/* <Cards></Cards> */}
      <StickyCards></StickyCards>
      <HomeCarousel></HomeCarousel>
    </div>
    
  );
};

export default Home;
