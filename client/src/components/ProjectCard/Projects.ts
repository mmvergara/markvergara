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
  | "daisy-ui";

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
    projectType: "featured",
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
