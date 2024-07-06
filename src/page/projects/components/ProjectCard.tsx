import { useTheme } from "../../../context/ThemeContext";
import clsx from "clsx";
import GithubIcon from "../../../components/icons/github";
import { ImageIcon, LinkIcon } from "lucide-react";
import Technologies from "../../../components/TechnologiesBadge";
import { Project } from "../../../types";
const ProjectCard = ({ project }: { project: Project }) => {
  const {
    title,
    date,
    description,
    imageUrl,
    technologies,
    githubUrl,
    liveUrl,
  } = project;
  const { isBrutalism } = useTheme();
  return (
    <article
      className={clsx(
        "flex flex-col items-center sm:items-stretch sm:flex-row gap-4 w-full rounded-md p-4",
        isBrutalism
          ? "bg-white border-2 border-black border-b-4 border-r-4"
          : "bg-zinc-800  border-zinc-700"
      )}
    >
      <img
        src={imageUrl}
        alt="Project Image"
        className={clsx(
          "rounded-md w-[200px] h-[200px]",
          isBrutalism ? "border-2 border-black" : "border-zinc-400"
        )}
      />
      <div className="flex flex-col text-center sm:text-left">
        <span className={clsx(isBrutalism ? "text-black" : "")}>
          <h2 className="font-bold text-3xl">{title}</h2>
          <p className="text-sm">{description}</p>
        </span>
        <div className="flex flex-col mt-4 sm:mt-auto">
          <div className="flex gap-2 mb-2 flex-wrap justify-center sm:justify-start">
            {technologies.map((tech, index) => (
              <Technologies tech={tech} key={index} />
            ))}
          </div>
          <div className="flex gap-2 flex-row text-xs font-bold justify-center sm:justify-start">
            <a
              href={githubUrl}
              className={clsx(
                "flex items-center gap-2 p-2 px-4 sm:flex-none",
                isBrutalism
                  ? "brutal-btn"
                  : "mt-2 rounded-md border-zinc-700 border-[1px] bg-zinc-900 hover:bg-zinc-700 hover:shadow-2xl"
              )}
            >
              <GithubIcon size={18} />
              <span className="hidden sm:block">Repo</span>
            </a>
            {liveUrl && (
              <a
                href={liveUrl}
                className={clsx(
                  "flex items-center gap-2 p-2 px-4 sm:flex-none",
                  isBrutalism
                    ? "brutal-btn"
                    : "mt-2 rounded-md border-zinc-700 border-[1px] bg-zinc-900 hover:bg-zinc-700 hover:shadow-2xl"
                )}
              >
                <LinkIcon size={18} />
                <span className="hidden sm:block">Live</span>
              </a>
            )}
            <a
              href={githubUrl}
              className={clsx(
                "flex items-center gap-2 p-2 px-4 sm:flex-none",
                isBrutalism
                  ? "brutal-btn"
                  : "mt-2 rounded-md border-zinc-700 border-[1px] bg-zinc-900 hover:bg-zinc-700 hover:shadow-2xl"
              )}
            >
              <ImageIcon size={18} />
              <span className="hidden sm:block">Screenshots</span>
            </a>
          </div>
          <span>
            <small>{date.toDateString()}</small>
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
