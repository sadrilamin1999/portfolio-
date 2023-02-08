import React, { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEffect";
import { useProjectLeftRightReveal } from "../hooks/gsap";

const Project = ({ project }) => {
  const projectLeftRef = useRef(null);
  const projectRightRef = useRef(null);

  const projectsRefs = [projectRightRef, projectLeftRef];

  useHoverEffect(projectRightRef, project.img1, project.img2);
  useProjectLeftRightReveal(projectsRefs);
  return (
    <div className="project grid grid-cols-5 overflow-hidden">
      <div
        className="project-left col-span-3 flex flex-col gap-10"
        ref={projectLeftRef}
      >
        <span className="text-9xl text-white/20">
          {String(project.id).padStart(2, 0)}
        </span>
        <h3 className="text-5xl uppercase leading-relaxed text-cyan-400">
          {project.title}
        </h3>
        <p className="text-white/75">{project.description}</p>
        <span className="text-cyan-400 flex gap-5 flex-wrap">
          {project.tools.map((tool, i) => (
            <sapn key={i}>{tool}</sapn>
          ))}
        </span>
        <div className="flex gap-10 flex-wrap">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="upercase py-8 px-14 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
          >
            Live Site
          </a>
          <a
            href={project.frontEndLink}
            target="_blank"
            rel="noreferrer"
            className="upercase py-8 px-14 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
          >
            Front-end Code
          </a>
          {project.backEndLink && (
            <a
              href={project.backEndLink}
              target="_blank"
              rel="noreferrer"
              className="upercase py-8 px-14 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
            >
              Back-end Code
            </a>
          )}
        </div>
      </div>
      <div
        className="project-right col-span-2 justify-self-end"
        ref={projectRightRef}
      ></div>
    </div>
  );
};

export default Project;
