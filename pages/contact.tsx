import { ContactData } from "@/types/GeneralTypes";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import DevToIcon from "@/components/icons/DevToIcon";
import MailIcon from "@/components/icons/MailIcon";

export const getStaticProps = async () => {
  return {
    props: { title: "Contact" },
  };
};

const ContactPage = () => {
  const Contact: ContactData[] = [
    {
      icon: <MailIcon fill="#ffffff" height="30px" width="30px" />,
      link: "mailto:mark.jesusmanabat@gmail.com",
      linkCommentText: "mark.jesusmanabat@gmail.com",
    },
    {
      icon: <GithubIcon fill="#ffffff" height="30px" width="30px" />,
      link: "https://github.com/mmvergara",
      linkCommentText: "@mmvergara",
    },
    {
      icon: <LinkedInIcon fill="#ffffff" height="30px" width="30px" />,
      link: "https://www.linkedin.com/in/mark-vergara-8436b0243/",
      linkCommentText: "Mark Vergara",
    },
    {
      icon: <DevToIcon height="30px" width="30px" />,
      link: "https://dev.to/mmvergara",
      linkCommentText: "@mmvergara",
    },
  ];
  return (
    <div className="font-JetBrainsMono flex justify-center items-center flex-col mt-[10vh]">
      <h1 className="text-3xl mb-6">Contact Me</h1>
      <div className="border-4 border-nightOwlBlue p-4 pl-2 max-w-[310px] text-sm flex flex-col gap-4">
        {Contact.map((contact) => {
          return (
            <a
              href={contact.link}
              key={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" flex flex-row  items-center ml-2 hover:text-nightOwlBlue tracking-wide"
            >
              <span>{contact.icon}</span>
              <span className="ml-2">{contact.linkCommentText}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ContactPage;
