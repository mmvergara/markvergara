import { Project } from "../../../types";

export const projects: Project[] = [
  {
    title: "Kanban Light",
    description:
      "Open source light weight kanban board, 0ms initial load time utilizing localStorage",
    deploymentDate: "June 2024",
    imageWebpUrl: "kanban-light.webp",
    imageUrl: "kanban-light.png",
    technologies: ["React", "Tailwind", "Supabase"],
    githubUrl: "https://github.com/mmvergara/kanban-light",
    liveUrl: "https://kanban-light.vercel.app/",
  },
  {
    title: "Nextjs Discord Bot Template",
    description:
      "A Nextjs Discord Bot Template that easily allows you to add and manage discord slash commands. 🚀",
    deploymentDate: "September 2023",
    imageWebpUrl: "nextjs-discord-bot-boilerplate.webp",
    imageUrl: "nextjs-discord-bot-boilerplate.png",
    technologies: ["NextJS"],
    githubUrl: "https://github.com/mmvergara/nextjs-discord-bot-boilerplate/",
    liveUrl: "https://mmv-nextjs-discord-bot-boilerplate.vercel.app/",
  },
];
