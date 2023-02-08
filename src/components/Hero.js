import React, { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import { useHeadlineReveal, useImageReveal } from "../hooks/gsap";

const data = {
  img1: "https://res.cloudinary.com/dmuohnr8q/image/upload/v1675854663/portfolio/Passport_size_pic-removebg-preview_ges4ni.png",
  img2: "https://res.cloudinary.com/dmuohnr8q/image/upload/v1675854663/portfolio/3-removebg-preview_qxlva5.png",
};

const Hero = () => {
  const heroImgRef = useRef(null);
  const heroHeadline1Ref = useRef(null);
  const heroHeadline2Ref = useRef(null);

  const headlines = [heroHeadline1Ref, heroHeadline2Ref];

  useHoverEffect(heroImgRef, data.img1, data.img2);
  useImageReveal(heroImgRef, 0.5);
  useHeadlineReveal(headlines, 1.5);
  return (
    <div className="hero container mx-auto mt-20 flex justify-center items-center overflow-hidden">
      <div className="hero-img" ref={heroImgRef}></div>
      <div className="shutter shutter-left overflow-hidden">
        <h1 ref={heroHeadline1Ref}>Front-End</h1>
      </div>
      <div className="shutter shutter-right overflow-hidden">
        <h1 ref={heroHeadline2Ref}>Developer</h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
