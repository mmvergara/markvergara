import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import clsx from "clsx";
import { BoxIcon, GiftIcon, PocketKnifeIcon } from "lucide-react";

const Navbar = () => {
  const { isBrutalism, toggleTheme } = useTheme();
  return (
    <div
      className={clsx(
        "w-full text-gray-300",
        isBrutalism ? "border-b-2 border-black" : "",
      )}
    >
      <nav className="text-l mx-auto flex max-w-[800px] items-center justify-between font-medium">
        <button
          onClick={toggleTheme}
          className={clsx(
            "p-[16px] px-6 hover:text-white",
            isBrutalism
              ? "border-l-2 border-r-2 border-black text-black hover:bg-black hover:text-white"
              : "text-gray-300",
          )}
        >
          Portfolio
        </button>
        <div className="flex">
          <Link
            to="/"
            className={clsx(
              "p-4 px-6 hover:text-white",
              isBrutalism
                ? "border-l-2 border-r-2 border-black text-black hover:bg-black"
                : "text-gray-300",
            )}
          >
            Home
          </Link>
          <Link
            to="/project"
            className={clsx(
              "p-4 px-6 hover:text-white",
              isBrutalism
                ? "border-black text-black hover:bg-black"
                : "text-gray-300",
            )}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={clsx(
              "p-4 px-6 hover:text-white",
              isBrutalism
                ? "border-l-2 border-r-2 border-black text-black hover:bg-black"
                : "text-gray-300",
            )}
          >
            About
          </Link>
        </div>
        <button
          onClick={toggleTheme}
          className={clsx(
            "ml-12 p-2",
            isBrutalism
              ? "brutal-btn border-l-2 border-r-2 border-black text-black"
              : "text-gray-300",
          )}
        >
          {isBrutalism ? <BoxIcon size={18} /> : <GiftIcon size={18} />}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
