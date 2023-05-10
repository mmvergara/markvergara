import Link from "next/link";
import ErrorIcon from "../icons/ErrorIcon";
import SourceControlIcon from "../icons/SourceControlIcon";
import WarningIcon from "../icons/WarningIcon";

const Footer = () => {
  return (
    <footer className="fixed z-50 bottom-0 ">
      <div className="flex items-center justify-between bg-nightOwlBlack300 text-white font-SourceSansPro w-[100vw] h-[30px] pr-2 pl-2">
        <div className="flex items-center h-full">
          <Link
            href="https://github.com/mmvergara/markvergara"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 hover:bg-nightOwlBlack500 px-1 cursor-pointer h-full"
          >
            <SourceControlIcon width="15px" height="15px" fill="#ffffff" />
            <span className="text-[13px] mt-1">Master*</span>
          </Link>
          <div className="flex items-center justify-center gap-1 hover:bg-nightOwlBlack500 px-1 cursor-pointer h-full">
            <ErrorIcon width="15px" height="15px" fill="#ffffff" />
            <span className="text-[13px] mt-1">0</span>
          </div>
          <div className="flex items-center justify-center gap-1 hover:bg-nightOwlBlack500 px-1 cursor-pointer h-full">
            <WarningIcon width="15px" height="15px" fill="#ffffff" />
            <span className="text-[13px] mt-1">0</span>
          </div>
        </div>
        <div className="flex gap-1 pr-2">👑</div>
      </div>
    </footer>
  );
};

export default Footer;
