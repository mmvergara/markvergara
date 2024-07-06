import clsx from "clsx";
import { BookTextIcon, MailIcon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import Hero from "../assets/hero.jpg";
import GithubIcon from "../components/icons/github";
const HomePage = () => {
  const { isBrutalism } = useTheme();

  return (
    <div>
      <section className="mt-8 flex flex-col-reverse items-center justify-center sm:mt-[10vh] sm:flex-row sm:gap-14">
        <div className="mt-4 flex flex-col justify-center gap-6 sm:gap-10">
          <div>
            <h1
              className={clsx(
                "mb-2 text-5xl font-semibold",
                isBrutalism ? "text-black" : "text-white"
              )}
            >
              Lorem Ipsom
            </h1>
            <p
              className={clsx(
                "text-center text-lg sm:text-left",
                isBrutalism ? "font-medium text-black" : "text-gray-400"
              )}
            >
              Developer with a dream
            </p>
          </div>
          <div
            className={clsx("flex flex-wrap", isBrutalism ? "gap-2" : "gap-1")}
          >
            <a
              href="https://github.com/mmvergara"
              target="_blank"
              rel="noreferrer noopener"
              className={clsx(
                "flex items-center gap-2 p-2 px-4",
                isBrutalism
                  ? "brutal-btn"
                  : "mt-2 rounded-md border-zinc-700 bg-zinc-800 hover:bg-zinc-700 hover:shadow-2xl"
              )}
            >
              <GithubIcon />
            </a>
            <a
              href="mailto:mark.jesusmanabat@gmail.com"
              className={clsx(
                "flex items-center gap-2 p-2 px-4",
                isBrutalism
                  ? "brutal-btn"
                  : "mt-2 rounded-md border-zinc-700 bg-zinc-800 hover:bg-zinc-700 hover:shadow-2xl"
              )}
            >
              <MailIcon size={18} />
            </a>
            <button
              className={clsx(
                "flex flex-1 items-center gap-2 p-2 px-4 sm:flex-none",
                isBrutalism
                  ? "brutal-btn"
                  : "mt-2 rounded-md border-zinc-700 bg-zinc-800 hover:bg-zinc-700 hover:shadow-2xl"
              )}
            >
              <BookTextIcon size={18} />
              Resume
            </button>
          </div>
        </div>
        <div>
          <img
            src={Hero}
            alt="profile"
            className={clsx(
              "h-[200px] w-[200px] rounded-full border-[2px] shadow-lg sm:h-[250px] sm:w-[250px]",
              isBrutalism ? "border-4 border-black" : "border-zinc-400"
            )}
          />
        </div>
      </section>
      <section className="mt-8 flex justify-center px-8">
        <p
          className={clsx(
            "text-center text-sm font-medium sm:text-left",
            isBrutalism ? "text-black" : "text-white"
          )}
        >
          Currently a 3rd year student but mostly self-taught, I like to build
          stuff and learn new things.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
