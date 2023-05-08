import { ProjectDetails, ProjectQueryParams } from "@/types/ProjectTypes";
import { useEffect, useState } from "react";
import { getAllProjects } from "@/services/Projects";
import ProjectCard from "@/components/Projects/ProjectCard";

const ProjectPage = () => {
  const [projects, setProjects] = useState<ProjectDetails[]>([]);
  const fetchAllProject = async () => {
    const RepositoryProjects: ProjectQueryParams[] = [
      {
        repoName: "mmv-dex",
        name: "Dex",
        hasDocumentation: true,
      },
      { repoName: "psau-rant", name: "PSAU Rant Web", hasDocumentation: false },
      {
        repoName: "mmv-acrie-shop",
        name: "Acrie Shop",
        hasDocumentation: false,
      },
      {
        repoName: "mmv-ashera",
        name: "Ashera",
        hasDocumentation: true,
      },
      {
        repoName: "mmv-nextjs-discord-bot-template",
        name: "NextJS Discord Bot",
        hasDocumentation: true,
      },
      {
        repoName: "mmv-algorithm-visualizer",
        name: "Algorithm Visualizer",
        hasDocumentation: false,
      },
      {
        repoName: "mmv-docs",
        name: "MMV Docs",
        hasDocumentation: false,
      },
    ];
    const projects = await getAllProjects(RepositoryProjects);
    setProjects(projects);
  };

  useEffect(() => {
    fetchAllProject();
  }, []);

  return (
    <section className="p-12 flex justify-center items-center flex-wrap gap-14 font-JetBrainsMono">
      {projects.map((project) => {
        return <ProjectCard key={project.id} ProjectDetails={project} />;
      })}
    </section>
  );
};

export default ProjectPage;
