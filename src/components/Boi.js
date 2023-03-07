import { useRef } from "react";
import { useBioReveal } from "../hooks/gsap";
const Boi = () => {
  const bioRef = useRef(null);

  useBioReveal(bioRef, 2);
  return (
    <div className="bio container mx-auto mt-20 overflow-hidden">
      <p ref={bioRef}>
        I'm a creative designer and dedicated React developer with expertise in
        Redux, Redux Toolkit, WebGL, GSAP, Tailwind CSS, Bootstrap, and
        responsive web design. As a fast learner, I am committed to delivering
        high-quality web applications that exceed my clients' expectations.
      </p>
    </div>
  );
};

export default Boi;
