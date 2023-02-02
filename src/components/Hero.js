import React, { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";

const data = {
  img1: "https://res.cloudinary.com/dmuohnr8q/image/upload/v1675329950/Passport_size_pic_umiyix.jpg",
  img2: "https://res.cloudinary.com/dmuohnr8q/image/upload/v1675329950/3_kcoiii.png",
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
