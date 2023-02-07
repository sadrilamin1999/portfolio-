import React from "react";
import Boi from "./Boi";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="home" id="Home">
      <Hero />
      <Boi />
      <Projects />
      <Skills />
    </div>
  );
};

export default Home;
