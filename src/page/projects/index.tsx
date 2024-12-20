import { motion } from "framer-motion";
import clsx from "clsx";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./components/projects";
import { useTheme } from "../../context/ThemeContext";

const ProjectsPage = () => {
  const { isBrutalism } = useTheme();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="flex flex-col gap-6 m-4 mt-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {projects.map((project, index) => (
        <motion.div key={index} variants={item}>
          <ProjectCard project={project} />
        </motion.div>
      ))}
      <motion.span
        variants={item}
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
          className="underline hover:text-[#dd6e6c] transition-colors"
        >
          {" "}
          GitHub
        </a>
      </motion.span>
    </motion.section>
  );
};

export default ProjectsPage;
