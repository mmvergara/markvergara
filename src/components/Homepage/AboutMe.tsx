import { motion } from "framer-motion";
const AboutMe: React.FC = () => {
  return (
    <motion.section
      id='AboutMe'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      viewport={{ once: true }}
      className='text-white sm:pl-12 w-[100%] flex flex-col md:flex-row justify-between gap-8 items-center pt-[60px] md:pt-[300px]'
    >
      <div>
        <img
          src='/userImg.png'
          alt='developer image'
          className='max-h-[300px] min-h-[300px] max-w-[300px] min-w-[300px] rounded-full'
          width='300px'
          height='300px'
        />
      </div>

      <div className=''>
        <p className='text-lg text-gray-300'>
          Hello! My name is Mark Matthew Vergara, <br /> <br /> I enjoy creating things that will
          introduces me to new technologies. Since i was 6 years old technology has always been my
          forte and I started my{" "}
          <a
            href='https://github.com/mmvergara/mmvergara/blob/main/journey/README.md'
            target='_blank'
            className='text-purple-500'
          >
            Web Development Journey{" "}
          </a>
          in January 2022. I am currently a 2nd year BS Information Technology Student. School gave
          me a starting point but majority of my Web Development knowledge is self-taught <br />{" "}
          <br /> One thing you should know about me is that I like to keep track of my progress and
          document my work. Seeing what I've done and how much I improved gives me so much
          motivation to do better in the future <br />
          <br />I am now looking for low-paying or freelance jobs to prepare myself after I graduate
          in 2025.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutMe;
