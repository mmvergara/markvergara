import { Project } from "../../../types";
import ProjectCard from "./ProjectCard";

const projects: Project[] = [
  {
    title: "Kanban Light",
    description:
      "Open source light weight kanban board, 0ms initial load time utilizing localStorage",
    date: new Date(2021, 6, 1),
    imageUrl: "https://via.placeholder.com/150",
    technologies: [
      "React",
      "NextJS",
      "Typescript",
      "Tailwind",
      "Dart",
      "Flutter",
      "Golang",
      "Python",
      "NodeJS",
      "Firebase",
      "MongoDB",
      "PostgreSQL",
      "Supabase",
      "Vue",
      "GraphQL",
    ],
    githubUrl: "github.com",
    liveUrl: "github.com",
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
