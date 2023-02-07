import React from "react";
import Boi from "./Boi";
import Hero from "./Hero";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="home" id="Home">
      <Hero />
      <Boi />
      <Projects />
    </div>
  );
};

export default Home;
