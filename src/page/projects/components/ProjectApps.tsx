import clsx from "clsx";
import ProjectCard from "./ProjectCard";
import { projects } from "./projects";
import { useTheme } from "../../../context/ThemeContext";

const ProjectApps = () => {
  const { isBrutalism } = useTheme();
  return (
    <section className="flex flex-col gap-6 m-4">
      {projects.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
      <span
        className={clsx(
          "text-center text-xl pb-20",
          isBrutalism ? "text-black" : "text-white"
        )}
      >
        Not finished Yet...
      </span>
    </section>
  );
};

export default ProjectApps;
