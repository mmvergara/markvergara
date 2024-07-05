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
        isBrutalism ? "border-b-2 border-black" : ""
      )}
    >
      <nav className="mx-auto max-w-[800px] flex items-center text-l font-medium justify-between">
        <button
          onClick={toggleTheme}
          className={clsx(
            "hover:text-white p-[16px] px-6",
            isBrutalism
              ? "text-black border-l-2 border-black border-r-2 hover:bg-black hover:text-white"
              : "text-gray-300"
          )}
        >
          👑
        </button>
        <div className="flex">
          <Link
            to="/"
            className={clsx(
              "hover:text-white p-4 px-6",
              isBrutalism
                ? "text-black border-l-2 border-black border-r-2  hover:bg-black"
                : "text-gray-300"
            )}
          >
            Home
          </Link>
          <Link
            to="/project"
            className={clsx(
              "hover:text-white p-4 px-6",
              isBrutalism
                ? " border-black text-black hover:bg-black"
                : "text-gray-300"
            )}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={clsx(
              "hover:text-white p-4 px-6 ",
              isBrutalism
                ? "text-black border-l-2 border-black border-r-2 hover:bg-black"
                : "text-gray-300"
            )}
          >
            About
          </Link>
        </div>
        <button
          onClick={toggleTheme}
          className={clsx(
            "hover:text-white p-[19px] px-6",
            isBrutalism
              ? "text-black border-l-2 border-black border-r-2 hover:bg-black hover:text-white"
              : "text-gray-300"
          )}
        >
          {isBrutalism ? <BoxIcon size={18} /> : <GiftIcon size={18} />}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
