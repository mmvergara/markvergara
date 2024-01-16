import {
  ProjectDetails,
  ProjectQueryParams,
  Repository,
} from "@/types/ProjectTypes";

export const getAllProjects = async () => {
  const Projects: ProjectQueryParams[] = [
    {
      repoName: "mmv-dex",
      name: "Dex",
      hasDocumentation: true,
    },
    { repoName: "psau-rant", name: "PSAU Rant Web", hasDocumentation: false },
    {
      repoName: "psau-rant-flutter",
      name: "PSAU Rant Mobile",
      hasDocumentation: false,
    },
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
      repoName: "nextjs-discord-bot-boilerplate",
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

  const projectDetails = await Promise.all(
    Projects.map(async (Project) => {
      return await getProjectDetails(Project);
    })
  );

  
  console.log("====================================");
  console.log(projectDetails);
  console.log("====================================");

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
    liveUrl: repositoryData.homepage || null,
    documentationLink: Project.hasDocumentation
      ? `https://mmv-docs.vercel.app/docs/${repositoryData.name}`
      : null,
    deploymentDate: repositoryData.created_at,
    tags: repositoryData.topics,
  };
  return projectDetails;
};
