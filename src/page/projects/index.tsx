import { useState } from "react";
import clsx from "clsx";
import { useTheme } from "../../context/ThemeContext";
import ProjectApps from "./components/ProjectApps";
type ProjectSection = "Apps" | "Packages" | "Templates";
const ProjectsPage = () => {
  const [selectedSection, setSection] = useState<ProjectSection>("Apps");
  const { isBrutalism } = useTheme();
  return (
    <div>
      {/* <div
        className={clsx(
          " border-2 flex rounded-md m-4 mb-6 items-center justify-around",
          isBrutalism
            ? "text-black bg-white border-2 border-black border-t-[4px] border-b-[4px]"
            : "border-zinc-700 text-white"
        )}
      >
        <button
          onClick={() => setSection("Apps")}
          className={clsx(
            "p-2 flex-grow",
            selectedSection === "Apps"
              ? "font-bold underline underline-offset-2 "
              : ""
          )}
        >
          Apps
        </button>
        <button
          onClick={() => setSection("Packages")}
          className={clsx(
            "border-l-2 border-zinc-700 border-r-2 p-2 flex-grow",
            selectedSection === "Packages"
              ? "font-bold underline underline-offset-2 "
              : ""
          )}
        >
          Packages
        </button>
        <button
          onClick={() => setSection("Templates")}
          className={clsx(
            "p-2 flex-grow",
            selectedSection === "Templates"
              ? "font-bold underline underline-offset-2 "
              : ""
          )}
        >
          Templates
        </button>
      </div> */}
      <ProjectApps />
    </div>
  );
};

export default ProjectsPage;
