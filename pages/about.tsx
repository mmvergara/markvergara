import Image from "next/image";

export const getStaticProps = async () => {
  return {
    props: { title: "About" },
  };
};

const ProfilePage = () => {
  return (
    <div className="p-12 font-JetBrainsMono flex justify-center items-center flex-col">
      <Image
        src="/assets/images/profile.png"
        alt="profile"
        className="rounded-md"
        width={300}
        height={300}
      />
      <h1 className="text-3xl my-4">About Me</h1>
      <p className="max-w-[800px]">
        {`I'm a third-year BS Information Technology student with a passion for
        technology. I started being a developer in school in Jan
        2022 but the majority of my knowledge is self-taught and I enjoy documenting my progress. I'm seeking low-paying or
        freelance jobs to prepare for graduation in 2025.`}
      </p>
      <p className="max-w-[800px] pt-8">
        {`I like to explore stuff try out different things and really really learn on how they work behind the scenes. I try to gain an engineer mindset rather than always using the tools that are already available like framework / libraries.`}
      </p>
      <br />
      <p>
        Current Work :{" "}
        <span className="animate-pulse text-oneDarkGreen">None</span>
      </p>
    </div>
  );
};

export default ProfilePage;
