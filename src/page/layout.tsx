import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useTheme } from "../context/ThemeContext";
import clsx from "clsx";

const Layout = () => {
  const { isBrutalism } = useTheme();
  return (
    <div
      className={clsx(
        "h-[100vh] w-[100vw] overflow-auto transition-all",
        isBrutalism ? "bg-[#fef3c7]" : "bg-primary"
      )}
    >
      <Navbar />
      <main className="mx-auto w-full max-w-[900px]">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
