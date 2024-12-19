import { useTheme } from "../../../context/ThemeContext";
import clsx from "clsx";
import GithubIcon from "../../../components/icons/github";
import { ImageIcon, LinkIcon } from "lucide-react";
import Technologies from "../../../components/TechnologiesBadge";
import { Project } from "../../../types";
const ProjectCard = ({ project }: { project: Project }) => {
  const {
    title,
    deploymentDate,
    description,
    imageWebpUrl,
    imageUrl,
    technologies,
    githubUrl,
    liveUrl,
    stars,
  } = project;
  const { isBrutalism } = useTheme();

  return (
    <article
      className={clsx(
        "flex flex-col items-center sm:items-stretch sm:flex-row gap-8 w-full rounded-md p-8  transition-colors",
        isBrutalism
          ? "bg-white border-2 border-black border-b-4 border-r-4"
          : "bg-[#202228]  border-zinc-700"
      )}
    >
      <picture>
        <source srcSet={imageWebpUrl} type="image/webp" />
        <img
          src={imageUrl}
          alt="Project Image"
          role="presentation"
          loading="lazy"
          decoding="async"
          fetchPriority="auto"
          width={200}
          height={200}
          className={clsx(
            "rounded-md min-w-[200px] min-h-[200px]",
            isBrutalism
              ? "border-2 border-black"
              : "border-[#1b1a20] border-[8px]"
          )}
        />
      </picture>
      <div className="flex flex-col text-center sm:text-left">
        <span
          className={clsx(isBrutalism ? "text-black" : "text-primary-text")}
        >
          <h2
            className={clsx(
              "font-bold text-3xl",
              isBrutalism ? "text-black" : "text-[#dd6e6c]"
            )}
          >
            {title}
          </h2>
          <p className="text-md">{description}</p>
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
              target="_blank"
              rel="noreferrer noopener"
              className={clsx(
                "flex items-center gap-2 p-2 px-4 sm:flex-none",
                isBrutalism
                  ? "brutal-btn"
                  : "mt-2 rounded-md border-zinc-700 border-[1px] bg-zinc-900 group "
              )}
            >
              <GithubIcon size={18} />
              {stars && (
                <span className="flex items-center">
                  {stars}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="ml-[1px]"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </span>
              )}
            </a>
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className={clsx(
                  "flex items-center gap-2 p-2 px-4 sm:flex-none",
                  isBrutalism
                    ? "brutal-btn"
                    : "mt-2 rounded-md border-zinc-700 border-[1px] bg-zinc-900  hover:text-cyan-500"
                )}
              >
                <LinkIcon size={18} />
                <span className="hidden sm:block">Live</span>
              </a>
            )}
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer noopener"
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
            <span
              className={clsx(
                "mt-auto ml-auto hidden md:block",
                isBrutalism ? "text-black" : ""
              )}
            >
              {deploymentDate}
            </span>
          </div>
          <span
            className={clsx("mt-2 sm:hidden", isBrutalism ? "text-black" : "")}
          >
            {deploymentDate}
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
