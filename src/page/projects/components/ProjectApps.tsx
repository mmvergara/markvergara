import ProjectCard from "./ProjectCard";
import { projects } from "./projects";


const ProjectApps = () => {
  return (
    <section className="flex flex-col gap-6 m-4">
      {projects.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </section>
  );
};

export default ProjectApps;
