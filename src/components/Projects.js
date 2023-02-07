import Project from "./Project";

const data = [
  {
    id: 1,
    title: "An Online E-commerce Store",
    img1: "https://res.cloudinary.com/dmuohnr8q/image/upload/v1675363596/portfolio/pexels-format-1029757_yigggz.jpg",
    img2: "https://res.cloudinary.com/dmuohnr8q/image/upload/v1675363597/portfolio/pexels-tranmautritam-251225_unei4d.jpg",
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
    title: "An Online E-commerce Store",
    img1: "https://res.cloudinary.com/dmuohnr8q/image/upload/v1675363596/portfolio/pexels-format-1029757_yigggz.jpg",
    img2: "https://res.cloudinary.com/dmuohnr8q/image/upload/v1675363597/portfolio/pexels-tranmautritam-251225_unei4d.jpg",
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
];
const Projects = () => {
  return (
    <div className="projects container mx-auto mt-40" id="projects">
      <div className="overflow-hidden">
        <h2 className="section-title">Projects</h2>
      </div>
      <div className="projects-wraper mt-40 flex flex-col gap-40">
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
