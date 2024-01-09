import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/Assets/hand_icon.png";
import arrow from "../Assets/Assets/arrow.png";
import heroimg from "../Assets/Assets/hero_image.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrival Only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Collection</p>
          <p>For Everyone..</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Colection</div>
          <img src={arrow} alt="" />
        </div>
      </div>

      <div className="hero-right">
        <img src={heroimg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
