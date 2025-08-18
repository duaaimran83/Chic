import React from 'react';
import "./Main.css";
import Slider from "../Main/Slider/Slider"; 
import Highlight from "../Main/Highlight/Highlight"; 
import Products from "./Products/Products";
import Partners from "./Partners/Partners";
import Prices from "./Prices/Prices";
import Instagram from "./Instagram/Instagram";


const Main = () => {
  return (
    <div className="main">
      <Slider />
      <Highlight />
      <Products />
      <Partners />
      <Prices />
      <Instagram />
    </div>
  );
};

export default Main;
