import ProjectItem from "./ProjectItem";
import projectsArr from "./data/projectsData.json";

const Projects = () => {
  return (
    <div
      id="projects"
      className="h-auto px-2 sm:px-4 xl:max-w-[90rem] mx-auto "
    >
      <div className="mx-auto py-16">
        <p className="text-xl tracking-widest uppercase text-[#9E2DA8]">
          Projects
        </p>
        <h2 className="py-4">Some school projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsArr.projectsData.map((project) => (
            <ProjectItem
              key={project.id}
              projectId={project.id}
              projectName={project.projectName}
              src={project.src}
              alt={project.alt}
              techStack={project.techStack}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
