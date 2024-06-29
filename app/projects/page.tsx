"use client";
import { useEffect, useState } from "react";
import { allProject } from "@/services/ProjectsData";
import ProjectCard from "@/components/Projects/ProjectCard";
import ProjectTagsFilter from "@/components/Projects/ProjectFilters";

const ProjectPage = () => {
  const [projects, setProjects] = useState(allProject);
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const handleAddTags = (tag: string) => {
    setActiveTags([...activeTags, tag]);
  };

  const handleRemoveTags = (tag: string) => {
    setActiveTags(activeTags.filter((t) => t !== tag));
  };

  useEffect(() => {
    if (activeTags.length === 0) {
      setProjects(allProject);
    } else {
      setProjects(
        allProject.filter((project) => {
          return activeTags.every((tag) => project.tags.includes(tag));
        })
      );
    }

    // getAllProjects().then((data) => {
    //   console.log(data);
    //   console.log(data);
    //   console.log(data);
    // });
  }, [activeTags]);

  const availableTags = Array.from(
    new Set(allProject.flatMap((project) => project.tags))
  );

  return (
    <>
      <section className="px-4 pt-2 sm:px-12 flex justify-center items-center flex-wrap gap-14 font-JetBrainsMono">
        <ProjectTagsFilter
          activeTags={activeTags}
          onAddTags={handleAddTags}
          onRemoveTags={handleRemoveTags}
          availableTags={availableTags}
        />
        {projects.map((project) => {
          return <ProjectCard key={project.id} ProjectDetails={project} />;
        })}
      </section>
    </>
  );
};

export default ProjectPage;
