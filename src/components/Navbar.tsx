import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import clsx from "clsx";
import { BoxIcon, GiftIcon, HomeIcon } from "lucide-react";

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
            "hidden p-[16px] px-6 hover:text-white sm:block",
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
              "p-4 hover:text-white sm:px-6",
              isBrutalism
                ? "border-l-2 border-r-2 border-black text-black hover:bg-black"
                : "text-gray-300",
            )}
          >
            <span className="hidden sm:block">Home</span>
            <span className="sm:hidden">
              <HomeIcon size={18} className="mt-1" />
            </span>
          </Link>

          <Link
            to="/projects"
            className={clsx(
              "p-4 hover:text-white sm:px-6",
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
              "p-4 hover:text-white sm:px-6",
              isBrutalism
                ? "border-l-2 border-r-2 border-black text-black hover:bg-black"
                : "text-gray-300",
            )}
          >
            Contact
          </Link>
        </div>
        <button
          onClick={toggleTheme}
          className={clsx(
            "ml-12 mr-4 p-2",
            isBrutalism
              ? "brutal-btn border-l-2 border-r-2 border-black text-black"
              : "animate-pulse text-gray-300",
          )}
        >
          {isBrutalism ? <BoxIcon size={18} /> : <GiftIcon size={18} />}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
