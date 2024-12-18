import clsx from "clsx";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./components/projects";
import { useTheme } from "../../context/ThemeContext";

const ProjectsPage = () => {
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
        Not finished Yet... More Project on my
        <a
          href="https://github.com/mmvergara"
          target="_blank"
          rel="noreferrer noopener"
          className="underline"
        >
          {" "}
          GitHub
        </a>
      </span>
    </section>
  );
};

export default ProjectsPage;
