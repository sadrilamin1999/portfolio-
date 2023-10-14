import { useRef } from "react";
import { useSectionTitleReveal } from "../hooks/gsap";

const SectionTitle = ({ title }) => {
  const sectionTitleRef = useRef(null);

  useSectionTitleReveal(sectionTitleRef);
  return (
    <div className="overflow-hidden">
      <h2
        className="section-title text-[5rem] md:text-[10rem]"
        ref={sectionTitleRef}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
