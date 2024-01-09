import React from "react";
import Popular from "../Components/Assets/Popular/Popular";
import Hero from "../Components/Hero/Hero";
import Offers from "../Components/Offers/Offers";
import NewCollection from "../Components/NewCollection/NewCollection";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
// import Footer from "../Components/Footer/Footer";
const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLetter />
      {/* <Footer /> */}
    </div>
  );
};

export default Shop;
