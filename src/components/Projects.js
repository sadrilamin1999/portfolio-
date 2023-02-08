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
    title: "Web Security website",
    img1: "https://res.cloudinary.com/dmuohnr8q/image/upload/v1675856607/portfolio/tera-gurd_snktla.png",
    img2: "https://res.cloudinary.com/dmuohnr8q/image/upload/v1675856803/portfolio/tera-gurd2_ltylfr.png",
    description:
      "This is security web project built using javaScript for state management & CSS for styling. The project features a sleek and responsive design, robust tab component functionality, and seamless integration with data management.",
    tools: ["HTML", "CSS", "javaScript"],
    liveLink: "https://sadrilamin1999.github.io/Tera_guard/",
    frontEndLink: "https://github.com/sadrilamin1999/Tera_guard",
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
