import Hero from "../assets/hero.jpg";
import { useTheme } from "../context/ThemeContext";
import clsx from "clsx";
import GithubIcon from "./icons/github";
import { LinkIcon } from "lucide-react";
const ProjectCard = () => {
  const { isBrutalism } = useTheme();
  return (
    <article
      className={clsx(
        "flex flex-col xs:flex-row gap-2 w-full rounded-md p-4",
        isBrutalism
          ? "bg-white border-2 border-black border-b-4 border-r-4"
          : "bg-zinc-800"
      )}
    >
      <img
        src={Hero}
        alt="Project Image"
        className={clsx(
          "rounded-md w-[200px] h-[200px]",
          isBrutalism ? "border-2 border-black" : "border-zinc-400"
        )}
      />
      <div className="flex flex-col">
        <span className={clsx(isBrutalism ? "text-black" : "")}>
          <h2 className="font-bold text-3xl">Project Title</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            quia sequi a soluta dignissimos, animi ipsa assumenda doloribus sunt
            ducimus optio accusamus officia eveniet eius vitae, aut tempore
            deserunt earum.
          </p>
        </span>
        <div className="flex gap-2 flex-row mt-auto text-xs font-bold">
          <a
            href="github.com"
            className={clsx(
              "flex flex-1 items-center gap-2 p-2 px-4 sm:flex-none",
              isBrutalism
                ? "brutal-btn"
                : "mt-2 rounded-md border-zinc-700 bg-zinc-900 hover:bg-zinc-700 hover:shadow-2xl"
            )}
          >
            <GithubIcon />
            Repo
          </a>
          <button
            className={clsx(
              "flex flex-1 items-center gap-2 p-2 px-4 sm:flex-none",
              isBrutalism
                ? "brutal-btn"
                : "mt-2 rounded-md border-zinc-700 bg-zinc-900 hover:bg-zinc-700 hover:shadow-2xl"
            )}
          >
            <LinkIcon size={18} />
            Live Demo
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
