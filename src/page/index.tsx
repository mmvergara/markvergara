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
        <div className="mt-4 flex flex-col justify-center gap-6 sm:gap-10 animate-[fadeIn_0.8s_ease-in]">
          <div>
            <h1
              className={clsx(
                "mb-2 text-5xl font-semibold tracking-wide animate-[slideDown_0.5s_ease-out]",
                isBrutalism ? "text-black" : "text-[#dd6e6c]"
              )}
            >
              Mark Vergara
            </h1>
            <p
              className={clsx(
                "text-center text-xl sm:text-left animate-[slideUp_0.5s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]",
                isBrutalism ? "font-medium text-black" : "text-gray-400"
              )}
            >
              Developer with a dream
            </p>
          </div>
          <div
            className={clsx(
              "flex flex-wrap justify-center md:justify-start text-[#e0dfd6] animate-[fadeIn_0.5s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]",
              isBrutalism ? "gap-3" : "gap-2"
            )}
          >
            <a
              href="https://github.com/mmvergara"
              target="_blank"
              rel="noreferrer noopener"
              className={clsx(
                "flex items-center gap-2 p-2 px-4 ",
                isBrutalism
                  ? "brutal-btn"
                  : "mt-2 rounded-full bg-[#32363f] hover:bg-zinc-700 hover:shadow-2xl"
              )}
            >
              <GithubIcon />
            </a>
            <a
              href="mailto:mark.jesusmanabat@gmail.com"
              className={clsx(
                "flex items-center gap-2 p-2 px-4 ",
                isBrutalism
                  ? "brutal-btn"
                  : "mt-2 rounded-full bg-[#32363f] hover:bg-zinc-700 hover:shadow-2xl"
              )}
            >
              <MailIcon size={18} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className={clsx(
                "flex items-center gap-2 p-2 px-4 ",
                isBrutalism
                  ? "brutal-btn"
                  : "mt-2 rounded-full bg-[#32363f] hover:bg-zinc-700 hover:shadow-2xl"
              )}
            >
              <BookTextIcon size={18} />
              Resume
            </a>
          </div>
        </div>
        <div className="animate-[scaleIn_0.6s_ease-out]">
          <img
            src={Hero}
            alt="profile"
            className={clsx(
              "h-[200px] w-[200px] rounded-full border-[2px] shadow-lg sm:h-[250px] sm:w-[250px] hover:scale-105 transition-transform duration-300",
              isBrutalism ? "border-4 border-black" : "border-zinc-400"
            )}
          />
        </div>
      </section>
      <section className="mt-8 flex justify-center px-8">
        <p
          className={clsx(
            "text-center text-sm font-medium sm:text-left animate-[fadeIn_0.5s_ease-out_0.6s] opacity-0 [animation-fill-mode:forwards]",
            isBrutalism ? "text-black" : "text-[#e0dfd6]"
          )}
        >
          Currently a 4th year student but mostly self-taught, I like to build
          stuff and learn new things.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
