export const getStaticProps = async () => {
  return {
    props: { title: "Settings" },
  };
};

const SettingsPage = () => {
  return (
    <div className="p-10 pt-12">
      <a
        href="https://markvergara-legacy.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="border-[3px] border-nightOwlBlue hover:bg-nightOwlBlue py-2 px-8 font-JetBrainsMono"
      >
        Switch to Legacy Version{" "}
        <span className=" text-gray-500">(Deprecated)</span>
      </a>
    </div>
  );
};

export default SettingsPage;
