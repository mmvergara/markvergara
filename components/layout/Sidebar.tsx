import { useRouter } from "next/router";
import Link from "next/link";
import MailIcon from "../icons/MailIcon";
import { svgProps } from "@/types/GeneralTypes";
import SettingsIcon from "../icons/SettingsIcon";
import AccountIcon from "../icons/AccountIcon";
import FilesIcon from "../icons/FilesIcon";
import CodeIcon from "../icons/CodeIcon";
import ResumeIcon from "../icons/ResumeIcon";

type SidebarItem = {
  name: string;
  href: string;
  Icon: (props: svgProps) => JSX.Element;
};

const Sidebar = () => {
  const router = useRouter();
  const sidebarTopItems = [
    {
      name: "Home",
      href: "/",
      Icon: FilesIcon,
    },
    {
      name: "Projects",
      href: "/projects",
      Icon: CodeIcon,
    },
    {
      name: "Contact",
      href: "/contact",
      Icon: MailIcon,
    },
    {
      name: "Resume",
      href: "/resume",
      Icon: ResumeIcon,
    },
  ];

  const sidebarBottomItems = [
    {
      name: "AboutMe",
      href: "/about",
      Icon: AccountIcon,
    },
    {
      name: "Settings",
      href: "/settings",
      Icon: SettingsIcon,
    },
  ];

  const renderSidebarItem = (items: SidebarItem) => {
    const { href, Icon, name } = items;
    const isActive = router.pathname === href;
    return (
      <Link
        href={href}
        key={name}
        color="#ffffff"
        className={`
          w-[100%] flex justify-center p-2 pl-[6px] border-l-2 
        hover:bg-nightOwlBlack400 hover:border-nightOwlBlack400 
          ${
            isActive
              ? "border-nightOwlBlue bg-nightOwlBlack"
              : "border-nightOwlBlack200"
          }
        `}
      >
        <Icon
          height="30px"
          width="30px"
          fill={
            router.pathname === href
              ? "rgb(225, 228, 232)"
              : "rgb(106, 115, 125)"
          }
        />
      </Link>
    );
  };

  return (
    <div className="fixed h-full">
      <aside className="flex flex-col items-center justify-between bg-nightOwlBlack200 h-full">
        <div className="pt-[30px]">
          {sidebarTopItems.map((item) => renderSidebarItem(item))}
        </div>
        <div className="mb-[30px]">
          {sidebarBottomItems.map((item) => renderSidebarItem(item))}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
