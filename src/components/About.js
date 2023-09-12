import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import SectionTitle from "./SectionTitle";
import { useProjectLeftRightReveal } from "../hooks/gsap";
const data = {
  img1: "https://res.cloudinary.com/dmuohnr8q/image/upload/v1675854663/portfolio/41663734_299141474203509_907470566091390976_n-removebg-preview_jrjzlt.png",
  img2: "https://res.cloudinary.com/dmuohnr8q/image/upload/v1675854663/portfolio/01762632731-removebg-preview_m8frww.png",
};

const About = () => {
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);

  const abouts = [aboutLeftRef, aboutRightRef];
  useProjectLeftRightReveal(abouts);
  useHoverEffect(aboutLeftRef, data.img1, data.img2);
  return (
    <div className="about container mx-auto mt-40" id="about">
      <SectionTitle title={"About"} />

      <div className="about-wraper mt-40 grid grid-cols-1 lg:grid-cols-2 gap-20 overflow-hidden">
        <div className="about-left" ref={aboutLeftRef}></div>
        <div className="about-right" ref={aboutRightRef}>
          <p>
            I am a React developer with a strong focus on React, Redux, and
            Tailwind CSS. I specialize in building responsive and user-friendly
            web applications that provide a seamless experience for the
            end-user. With my in-depth knowledge of the latest web development
            technologies and frameworks, I am able to create innovative
            solutions that meet the needs of my clients. Whether it's a simple
            website or a complex web application, I am committed to delivering
            high-quality work that exceeds expectations.
          </p>
          <p className="mt-10">
            In addition to my expertise in the React, I also have a strong
            background in UI design and animation. I am skilled in using the
            GreenSock Animation Platform (GSAP) library to create dynamic and
            engaging user interfaces. I have experience in creating smooth
            animations and transitions that enhance the overall user experience.
            I am also well-versed in using other design tools such as Adobe XD
            and Figma to create wireframes and mockups.
          </p>
          <a
            href="https://drive.google.com/file/d/1z1BAJv5xQIMM6akUyCD7QZBminvggauH/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-10 uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
