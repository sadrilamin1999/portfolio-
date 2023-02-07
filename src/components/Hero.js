import React, { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";

const data = {
  img1: "https://res.cloudinary.com/dmuohnr8q/image/upload/v1675787880/portfolio/curious-bearded-male-keeps-hands-together-looks-with-intriguing-expression-has-dark-hair-gestures-indoor-isolated-white-wall-people-facial-expressions-lifestyle-concept_ig9rxr.jpg",
  img2: "https://res.cloudinary.com/dmuohnr8q/image/upload/v1675787880/portfolio/image-hesitant-unshaven-european-man-with-thick-beard-holds-chin-purses-lips-with-clueless-expressions_lhsulr.jpg",
};

const Hero = () => {
  const heroImgRef = useRef(null);
  useHoverEffect(heroImgRef, data.img1, data.img2);
  return (
    <div className="hero container mx-auto mt-20 flex justify-center items-center overflow-hidden">
      <div className="hero-img" ref={heroImgRef}></div>
      <div className="shutter shutter-left overflow-hidden">
        <h1>Front-End</h1>
      </div>
      <div className="shutter shutter-right overflow-hidden">
        <h1>Developer</h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
