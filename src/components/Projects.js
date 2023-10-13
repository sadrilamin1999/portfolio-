import Project from "./Project";
import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    title: "An Online E-commerce Store",
    img1: "https://res.cloudinary.com/dmuohnr8q/image/upload/v1675856205/portfolio/tech-alpha1_bb8spu.png",
    img2: "https://res.cloudinary.com/dmuohnr8q/image/upload/v1675855749/portfolio/tech-alpha2_ltuvq8.png",
    description:
      "This is an e-commerce project built using Redux for state management, React for UI components, and Tailwind CSS for styling. The project features a sleek and responsive design, robust shopping cart functionality, and seamless integration with a backend API for data management.",
    tools: [
      "react",
      "redux",
      "redux-thunk",
      "e-commerce",
      "tailwindcss",
      "redux-toolkit",
    ],
    liveLink: "https://iridescent-melba-0eb50d.netlify.app/",
    frontEndLink: "https://github.com/sadrilamin1999/tech-alpha",
    backEndLink: "",
  },
  {
    id: 2,
    title: "Recipe Application",
    img1: "https://res.cloudinary.com/dmuohnr8q/image/upload/v1697228330/Screenshot_1_q8edqj.png",
    img2: "https://res.cloudinary.com/dmuohnr8q/image/upload/v1697228545/Screenshot_2_gpurk3.png",
    description:
      "Foodverse is a recipe application blends React, Redux, and Tailwind CSS for an exceptional online shopping experience, featuring dynamic UIs, efficient state management, and sleek design. It caters to both users and administrators, offering a seamless, visually stunning platform.",
    tools: ["HTML", "Tailwind-CSS", "React"],
    liveLink: "https://sadrilamin-foodverse.netlify.app/",
    frontEndLink: "https://github.com/sadrilamin1999/foodverse",
    backEndLink: "",
  },
  {
    id: 3,
    title: "90's Kid Memories Application",
    img1: "https://res.cloudinary.com/dmuohnr8q/image/upload/v1697229188/Screenshot_3_td5qx2.png",
    img2: "https://res.cloudinary.com/dmuohnr8q/image/upload/v1697229303/Screenshot_4_btk4vv.png",
    description:
      "Immemorial: An elegant web application built with React, React Router, and Tailwind CSS for a timeless and immersive user experience.",
    tools: ["HTML", "Tailwind-CSS", "React"],
    liveLink: "https://sadrilamin-immemorila.netlify.app/",
    frontEndLink: "https://github.com/sadrilamin1999/immemorial",
    backEndLink: "",
  },
];
const Projects = () => {
  return (
    <div className="projects container mx-auto mt-40" id="projects">
      <SectionTitle title="Projects" />
      <div className="projects-wraper mt-40 flex flex-col gap-40">
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
