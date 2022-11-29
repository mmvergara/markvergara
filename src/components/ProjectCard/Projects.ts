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
  | "material-ui";

export interface ProjectDetails {
  title: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
  documentationLink: string;
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
];
