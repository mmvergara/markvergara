import Image from "next/image";
import Link from "next/link";

export const getStaticProps = async () => {
  return {
    props: { title: "Resume" },
  };
};

const GithubPreviewPage = () => {
  return (
    <div className="p-4 pl-12 font-JetBrainsMono flex flex-col gap-8">
      <h1 className="text-4xl">CV / Resume</h1>
      <Link
        target="_blank"
        href="/assets/MarkVergara-Resume.pdf"
        className="border-[3px] border-nightOwlBlue hover:bg-nightOwlBlue py-2 px-8 font-JetBrainsMono w-fit"
      >
        Download Resume
      </Link>
      <Image
        src="/assets/images/resume.png"
        alt="resume"
        className="pb-12"
        width={595}
        height={842}
      />
    </div>
  );
};

export default GithubPreviewPage;
