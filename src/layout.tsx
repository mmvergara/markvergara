import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useTheme } from "./context/ThemeContext";
import clsx from "clsx";

const Layout = () => {
  const { isBrutalism } = useTheme();
  return (
    <div
      className={clsx(
        "h-[100vh] overflow-auto transition-all",
        isBrutalism ? "bg-[#fef3c7]" : ""
      )}
    >
      <Navbar />
      <main className="mx-auto max-w-[800px] w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
