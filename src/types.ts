export type Technologies =
  | "React"
  | "NextJS"
  | "Typescript"
  | "Tailwind"
  | "Dart"
  | "Flutter"
  | "Golang"
  | "Python"
  | "NodeJS"
  | "Firebase"
  | "MongoDB"
  | "PostgreSQL"
  | "Supabase"
  | "GraphQL"
  | "Vue";

export type Project = {
  title: string;
  imageUrl: ImageMetadata;
  description: string;
  technologies: Technologies[];
  liveUrl?: string;
  githubUrl: string;
  deploymentDate: string;
  stars?: number;
};
