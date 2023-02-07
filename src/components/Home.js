import React from "react";
import About from "./About";
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
      <About />
    </div>
  );
};

export default Home;
