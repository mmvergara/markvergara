import clsx from "clsx";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";

const AboutPage = () => {
  const { isBrutalism } = useTheme();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const highlightClass = clsx(
    "font-semibold",
    isBrutalism ? "text-black" : "text-[#dd6e6c]"
  );

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className={clsx(
        "p-4 pt-12 flex flex-col gap-6 max-w-3xl mx-auto",
        isBrutalism ? "text-black" : "text-white"
      )}
    >
      <motion.h1 variants={item} className="text-3xl font-semibold">
        About Me
      </motion.h1>

      <motion.p variants={item} className="text-lg leading-relaxed">
        Hi! I'm <span className={highlightClass}>Mark Vergara</span>, currently
        a <span className={highlightClass}>4th year student</span> pursuing a BS
        in Information Technology. While my formal education has provided a
        strong foundation, I'm proud to say that the majority of my technical
        knowledge is self-taught through hands-on experience and continuous
        learning.
      </motion.p>

      <motion.div variants={item} className="space-y-4 text-lg">
        <p className="leading-relaxed">
          During my 3rd year of college, I gained valuable experience through a{" "}
          <span className={highlightClass}>
            3-month remote part-time position
          </span>{" "}
          as a junior developer at a company based in Manila. This meant a lot
          to me as those 3 months of experience was the first time i was able to
          work with a team and learn from them.
        </p>

        <p className="leading-relaxed text-lg">
          I'm currently seeking opportunities for my upcoming{" "}
          <span className={highlightClass}>
            Internship (On the Job Training)
          </span>{" "}
          in early 2025. I'm 2025. I'm excited to apply my skills in a
          professional setting and continue growing as a developer.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default AboutPage;
