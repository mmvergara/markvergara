import Link from "next/link";

export const getStaticProps = async () => {
  return {
    props: { title: "Settings" },
  };
};

const SettingsPage = () => {
  return (
    <div className="p-2 pt-4  sm:p-10 sm:pt-12">
      <Link
        href="https://markvergara-legacy.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="border-[3px] border-nightOwlBlue hover:bg-nightOwlBlue py-2 px-8 font-JetBrainsMono flex flex-wrap w-fit text-center flex-col"
      >
        <span>Switch to Legacy Version</span>
        <span className=" text-gray-500">(Deprecated)</span>
      </Link>
    </div>
  );
};

export default SettingsPage;
