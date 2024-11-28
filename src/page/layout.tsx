import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useTheme } from "../context/ThemeContext";
import clsx from "clsx";
import { Analytics } from '@vercel/analytics/react';

const Layout = () => {
  const { isBrutalism } = useTheme();
  return (
    <div
      className={clsx(
        "h-[100vh] w-[100vw] overflow-auto transition-all",
        isBrutalism ? "bg-[#fef3c7]" : ""
      )}
    >
      <Navbar />
      <main className="mx-auto w-full max-w-[800px]">
        <Outlet />
      </main>
      <Analytics />
    </div>
  );
};

export default Layout;
