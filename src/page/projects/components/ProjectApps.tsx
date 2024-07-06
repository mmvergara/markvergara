import { Project } from "../../../types";
import ProjectCard from "./ProjectCard";
const projects: Project[] = [
  {
    title: "Kanban Light",
    description:
      "Open source light weight kanban board, 0ms initial load time utilizing localStorage",
    deploymentDate: new Date(2024, 5, 1),
    imageWebpUrl: "kanban-light.webp",
    imageUrl: "kanban-light.png",
    technologies: ["React", "Tailwind", "Supabase"],
    githubUrl: "https://github.com/mmvergara/kanban-light",
    liveUrl: "https://kanban-light.vercel.app/",
  },
];

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
