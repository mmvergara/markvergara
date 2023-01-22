export type technologies =
  | "nodejs"
  | "react"
  | "typescript"
  | "expressjs"
  | "mongodb"
  | "firebase"
  | "docusaurus"
  | "postgre-sql"
  | "tailwind-css"
  | "chakra-ui"
  | "material-ui"
  | "daisy-ui"
  | "nextjs"
  | "supabase"
  | "discordjs";

export interface ProjectDetails {
  title: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  documentationLink?: string;
  projectType: "notable" | "featured" | "normal";
  deploymentDate: string;
  technologies: technologies[];
}

export const MMVProjects: ProjectDetails[] = [
  {
    title: "MMV Dex",
    description:
      "A Social Media / Peers App with NextJS Supabase with keyword analysis using postgresql, i made for an onboarding project",
    githubUrl: "https://github.com/mmvergara/mmv-dex",
    liveUrl: "http://mmv-dex.vercel.app/",
    deploymentDate: "January 6, 2023",
    projectType: "featured",
    technologies: ["nextjs", "supabase", "postgre-sql", "tailwind-css"],
    documentationLink: "https://mmv-docs.vercel.app/docs/category/dex-beta",
  },
  {
    title: "Acrie Shop",
    description:
      "Simulating an E-Commerce website this app features framer motion, session auth, pdf receipts and is powered by PostgreSQL without using any ORM like Sequalize (self-made models)",
    githubUrl: "https://github.com/mmvergara/mmv-acrie-shop",
    liveUrl: "https://mmv-acrie-shop.vercel.app/",
    documentationLink: "",
    projectType: "featured",
    deploymentDate: "November 18, 2022",
    technologies: ["react", "tailwind-css", "postgre-sql", "expressjs", "firebase"],
  },
  {
    title: "Boardz",
    description:
      "My First Ever NODEJS/MERN Stack web app. Boardz is a lightweight mini social app that supports features like Board Posting and Global realtime chat!",
    githubUrl: "https://github.com/mmvergara/mmv-boardz",
    liveUrl: "https://mmv-boardz.vercel.app/",
    documentationLink: "https://mmv-docs.vercel.app/docs/category/boardz",
    projectType: "notable",
    deploymentDate: "October 30, 2022",
    technologies: ["material-ui", "react", "typescript", "expressjs", "mongodb"],
  },
  {
    title: "Ashera",
    description: "Lightweight App that can manage your tasks and notes, yep That's it!",
    githubUrl: "https://github.com/mmvergara/mmv-boardz",
    liveUrl: "https://mmv-boardz.vercel.app/",
    documentationLink: "https://mmv-docs.vercel.app/docs/category/boardz",
    projectType: "featured",
    deploymentDate: "October 30, 2022",
    technologies: ["react", "chakra-ui", "firebase"],
  },
  {
    title: "Algorithm Visualizer",
    description: "Simple sorting algorithm visualizer using react typescript",
    deploymentDate: "December 6, 2022",
    githubUrl: "https://github.com/mmvergara/mmv-algorithm-visualizer",
    liveUrl: "https://mmv-algorithm-visualizer.vercel.app/",
    projectType: "normal",
    technologies: ["react", "typescript", "daisy-ui"],
  },
  {
    title: "Nextjs Discord Bot Template",
    description: "fully functional api based discord bot can be made using nextjs 🤯",
    deploymentDate: "Deployment Date: Jan 7, 2023",
    githubUrl: "https://github.com/mmvergara/mmv-nextjs-discord-bot-template",
    liveUrl: "https://mmv-nextjs-discord-bot-template.vercel.app/",
    projectType: "normal",
    technologies: ["nextjs", "discordjs"],
    documentationLink: "https://mmv-docs.vercel.app/docs/category/nextjs-discord-bot-template",
  },
  {
    title: "MMV Docs",
    description: "Documentations about apps made by Vergara, Mark Matthew",
    githubUrl: "https://github.com/mmvergara/mmv-docs",
    liveUrl: "https://mmv-docs.vercel.app/",
    projectType: "notable",
    deploymentDate: "November 8, 2022",
    technologies: ["docusaurus"],
  },
  {
    title: "Javascript Methods in Tagalog",
    description: "Collection of Javascript methods written in Tagalog / Taglish",
    githubUrl: "https://github.com/mmvergara/Javascript-Methods-In-Tagalog",
    liveUrl: "https://javascript-methods-in-tagalog.vercel.app/",
    deploymentDate: "August 7, 2022",
    projectType: "notable",
    technologies: ["docusaurus"],
  },
];
