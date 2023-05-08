import {
  ProjectDetails,
  ProjectQueryParams,
  Repository,
} from "@/types/ProjectTypes";

export const getAllProjects = async (Projects: ProjectQueryParams[]) => {
  const projectDetails = await Promise.all(
    Projects.map(async (Project) => {
      return await getProjectDetails(Project);
    })
  );
  return projectDetails;
};

const getProjectDetails = async (Project: ProjectQueryParams) => {
  const url = `https://api.github.com/repos/mmvergara/${Project.repoName}`;
  const response = await fetch(url);
  const responseData = await response.json();
  const repositoryData = responseData as Repository;
  const projectDetails: ProjectDetails = {
    id: repositoryData.id,
    title: Project.name,
    description: repositoryData.description || "",
    githubUrl: repositoryData.html_url,
    imageUrl: `/assets/images/${repositoryData.name}.png`,
    liveUrl: repositoryData.homepage || undefined,
    documentationLink: Project.hasDocumentation
      ? `https://mmv-docs.vercel.app/docs/${repositoryData.name}`
      : undefined,
    deploymentDate: repositoryData.created_at,
    tags: repositoryData.topics,
  };
  return projectDetails;
};
