import clsx from "clsx";
import { BookTextIcon, MailIcon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import Hero from "../assets/hero.jpg";
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
                isBrutalism ? "text-black" : "text-white",
              )}
            >
              Lorem Ipsom
            </h1>
            <p
              className={clsx(
                "text-center text-lg sm:text-left",
                isBrutalism ? "font-medium text-black" : "text-gray-400",
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
                  : "mt-2 rounded-md border-zinc-700 bg-zinc-800 hover:bg-zinc-700 hover:shadow-2xl",
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={isBrutalism ? "black" : "white"}
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="mailto:mark.jesusmanabat@gmail.com"
              className={clsx(
                "flex items-center gap-2 p-2 px-4",
                isBrutalism
                  ? "brutal-btn"
                  : "mt-2 rounded-md border-zinc-700 bg-zinc-800 hover:bg-zinc-700 hover:shadow-2xl",
              )}
            >
              <MailIcon size={18} />
            </a>
            <button
              className={clsx(
                "flex flex-1 items-center gap-2 p-2 px-4 sm:flex-none",
                isBrutalism
                  ? "brutal-btn"
                  : "mt-2 rounded-md border-zinc-700 bg-zinc-800 hover:bg-zinc-700 hover:shadow-2xl",
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
              isBrutalism ? "border-4 border-black" : "border-zinc-400",
            )}
          />
        </div>
      </section>
      <section className="mt-8 flex justify-center px-8">
        <p
          className={clsx(
            "text-center text-sm font-medium sm:text-left",
            isBrutalism ? "text-black" : "text-white",
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