import clsx from "clsx";
import { useTheme } from "../../context/ThemeContext";

const AboutPage = () => {
  const { isBrutalism } = useTheme();
  return (
    <section
      className={clsx(
        "p-4 flex flex-col gap-4",
        isBrutalism ? "text-black " : "text-white"
      )}
    >
      <h1 className="text-3xl font-semibold">About Me:</h1>
      <p>
        I'm Mark Vergara, currently a 4th year student taking up BS Information
        Technology, but the majority of my knowledge is self-taught. <br />{" "}
        <br />
        In my 3rd year of college i got 3-month remote part-time job as a junior
        developer in a company based in Manila. I always look forward in
        collaborative projects and learn from others as i believe its one of the
        best way to learn and grow. <br /> <br />
        I'm now looking for opportunities to work for my upcoming On the Job
        Training coming early in 2025.
      </p>
    </section>
  );
};

export default AboutPage;
