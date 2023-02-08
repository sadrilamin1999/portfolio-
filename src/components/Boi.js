import { useRef } from "react";
import { useBioReveal } from "../hooks/gsap";
const Boi = () => {
  const bioRef = useRef(null);

  useBioReveal(bioRef, 2);
  return (
    <div className="bio container mx-auto mt-20 overflow-hidden">
      <p ref={bioRef}>
        I am a talented front-end developer with a passion for creating
        beautiful and user-friendly websites. With a strong understanding of
        HTML, CSS, JavaScript, and front-end frameworks such as React and Redux,
        I deliver high-quality and responsive web solutions that enhance the
        user experience. Committed to staying up-to-date with the latest
        front-end technologies, I am always eager to learn and grow as a
        developer. Let's work together to bring your web projects to life!
      </p>
    </div>
  );
};

export default Boi;
