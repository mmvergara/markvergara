import clsx from "clsx";
import { Technologies } from "../types";
import { useTheme } from "../context/ThemeContext";

const TechnologiesBadge = (props: { tech: Technologies }) => {
  const { tech } = props;
  const { isBrutalism } = useTheme();

  const bgColor = (tech: Technologies) => {
    switch (tech) {
      case "React":
        return "bg-[#5ed3f3]";
      case "Typescript":
        return "bg-[hsl(211,57%,50%)] text-white";
      case "Tailwind":
        return "bg-[#38bdf8]";
      case "NextJS":
        return "bg-[#000000] text-white";
      case "Dart":
        return "bg-[#00b4ab] text-white";
      case "Flutter":
        return "bg-[#02569b] text-white";
      case "Golang":
        return "bg-[#00acd7]";
      case "Python":
        return "bg-[#306998] text-[#ffdd54]";
      case "NodeJS":
        return "bg-[#68a063] text-white";
      case "Firebase":
        return "bg-[#ffca28]";
      case "MongoDB":
        return "bg-[#13aa52]";
      case "PostgreSQL":
        return "bg-[#336791] text-white";
      case "Supabase":
        return "bg-[#44d192]";
      case "Vue":
        return "bg-[#41b883]";
      case "GraphQL":
        return "bg-[#e535ab] text-white";
      default:
        return "bg-white";
    }
  };
  return (
    <span
      className={clsx(
        "tracking-wider text-xs font-medium text-black   p-1 px-2 rounded-md",
        isBrutalism
          ? "border-black border-r-2 border-b-2 border-[1px]"
          : "border-[2px] border-zinc-900 rounded-sm",
        bgColor(tech)
      )}
    >
      {tech}
    </span>
  );
};

export default TechnologiesBadge;
