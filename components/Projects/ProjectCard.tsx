"use client";
import { ProjectDetails } from "@/types/ProjectTypes";
import Image from "next/image";
import GithubIcon from "../icons/GithubIcon";
import LinkIcon from "../icons/LinkIcon";
import { useState } from "react";
import { classNameJoin } from "@/utils/helpers";

interface ProjectCardProps {
  ProjectDetails: ProjectDetails;
}
const ProjectCard = ({ ProjectDetails }: ProjectCardProps) => {
  const { tags, title, documentationLink, liveUrl } = ProjectDetails;
  const { deploymentDate, description, githubUrl, imageUrl } = ProjectDetails;

  const slicedDescription = description.slice(0, 110);
  const [projectDescription, setProjectDescription] =
    useState(slicedDescription);

  const [showMore, setShowMore] = useState(description.length > 110);

  const handleShowMore = () => {
    setShowMore(false);
    setProjectDescription(description);
  };

  const [month, year] = new Date(deploymentDate)
    .toLocaleDateString("en-US", { month: "long", year: "numeric" })
    .split(" ");
  const date = `${month} ${year}`;

  const [imgIsLoading, setImgIsLoading] = useState(true);

  return (
    <article className="flex flex-col justify-between bg-nightOwlBlack300 min-h-[510px] max-w-[308px] shadow-lg hover:shadow-lg hover:shadow-nightOwlBlack500 ">
      <div>
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden  xl:aspect-w-7 xl:aspect-h-7">
          <Image
            alt={`${title || ""} preview image`}
            src={imageUrl}
            width={308}
            height={158}
            className={classNameJoin(
              "duration-700 ease-in-out object-cover overflow-hidden",
              imgIsLoading ? "blur-2xl grayscale" : "blur-0 grayscale-0"
            )}
            onLoad={() => setImgIsLoading(false)}
          />
        </div>
        <div className="p-4">
          <h4 className="text-[19px] font-bold text-[#51c3bc] mb-4">{title}</h4>
          <div className="flex gap-4 items-center mb-4">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <GithubIcon fill="#51c3bc" height="30px" width="30px" />
            </a>
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <LinkIcon fill="#51c3bc" height="30px" width="30px" />
              </a>
            )}
            {documentationLink && (
              <a
                href={documentationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-oneDarkCyan p-1 rounded-sm font-mono font-bold"
              >
                Docs
              </a>
            )}
          </div>
          <p>
            {projectDescription}
            {showMore && (
              <span
                className="font-bold text-nightOwlBlue text-md cursor-pointer hover:bg-nightOwlBlack400 rounded-md"
                onClick={handleShowMore}
              >
                ...
              </span>
            )}
          </p>
        </div>
      </div>
      <div className="p-4">
        <p className="text-[#51c3bc] opacity-60">{date}</p>
        <div className="text-sm flex flex-wrap gap-2 mt-1">
          {tags.map((tag) => {
            return (
              <span key={tag} className="bg-nightOwlBlack600 px-2 rounded-sm">
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
