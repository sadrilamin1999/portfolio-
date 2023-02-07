import React from "react";
import About from "./About";
import Boi from "./Boi";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="home" id="home">
      <Hero />
      <Boi />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
