import clsx from "clsx";
import { useTheme } from "../../context/ThemeContext";
import { MailIcon } from "lucide-react";
import GithubIcon from "../../components/icons/github";
import { motion } from "framer-motion";

const ContactPage = () => {
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

  const linksStyles = clsx(
    "flex items-center flex-col justify-center gap-2 p-8 w-[120px] h-[120px] transition-all duration-300 hover:scale-105",
    isBrutalism
      ? "brutal-btn hover:border-b-2 hover:border-r-2"
      : "rounded-md border-zinc-700 border-[1px] hover:border-[#dd6e6c]"
  );

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className={clsx(
        "p-4 flex flex-col items-center gap-4 pt-12",
        isBrutalism ? "text-black " : "text-white"
      )}
    >
      <motion.h1 variants={item} className="text-3xl font-semibold">
        Contact
      </motion.h1>
      <motion.p variants={item} className="text-center">
        Feel free to reach out to me, I'm always open to oppurtunities and
        collaborations.
      </motion.p>
      <motion.div
        variants={item}
        className="flex-wrap w-full flex flex-row items-center justify-center gap-4 mt-4 px-2"
      >
        <motion.a
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/mmvergara"
          target="_blank"
          rel="noreferrer noopener"
          className={linksStyles}
        >
          <GithubIcon />
          Github
        </motion.a>
        <motion.a
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:mark.jesusmanabat@gmail.com"
          className={linksStyles}
        >
          <MailIcon size={18} /> Email
        </motion.a>
        <motion.a
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.linkedin.com/in/mark-vergara-8436b0243/"
          target="_blank"
          rel="noreferrer noopener"
          className={linksStyles}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill={isBrutalism ? "black" : "white"}
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          LinkedIn
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default ContactPage;
