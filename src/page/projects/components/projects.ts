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
  {
    title: "Supadart",
    description:
      "Tool that people actually use, it got 18 stars as of jul 2024. This tool Generate Flutter / Dart 🎯 classes from your Supabase schema providing you with Typesafe Supabase Flutter Queries",
    deploymentDate: "July 2024",
    imageWebpUrl: "supadart.webp",
    imageUrl: "supadart.png",
    technologies: ["Dart", "Flutter", "Supabase"],
    githubUrl: "https://github.com/mmvergara/supadart",
    liveUrl: "https://supadart.vercel.app/",
  },
];
