import Image from "next/image";

export const getStaticProps = async () => {
  return {
    props: { title: "About" },
  };
};

const ProfilePage = () => {
  return (
    <div className="p-12 font-JetBrainsMono">
      <Image
        src="/assets/images/profile.png"
        alt="profile"
        className="rounded-md"
        width={300}
        height={300}
      />
      <h1 className="text-3xl my-4">About Me</h1>
      <p className="max-w-[600px]">
        {`I'm a second-year BS Information Technology student with a passion for
        technology since age 6. I started web development in school in Jan
        2022 but the majority of my knowledge is self-taught and I enjoy documenting my progress. I'm seeking low-paying or
        freelance jobs to prepare for graduation in 2025.`}
      </p>
    </div>
  );
};

export default ProfilePage;
