"use client"

import VSCodeIcon from "../icons/VSCodeIcon";

const Header = () => {
  const vscodeHeader = ["File", "Edit", "View", "Terminal"];

  return (
    <header className="fixed z-50 text-[13.6px]">
      <div className="flex items-center justify-between bg-nightOwlBlack300 text-white font-JetBrainsMono w-[100vw] h-[30px] pr-2 pl-2">
        <div className="font-SourceSansPro flex items-center gap-3">
          <VSCodeIcon height="15px" width="15px" />
          {vscodeHeader.map((item, index) => {
            return (
              <div
                key={index}
                className="cursor-pointer hover:bg-nightOwlBlack500 p-[3px] rounded-md"
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className="flex gap-1 pr-2">
          <div className="bg-[#f1fa8c] w-[16px] h-[16px] rounded-full" />
          <div className="bg-[#50fa7b] w-[16px] h-[16px] rounded-full" />
          <div className="bg-[#ff5555] w-[16px] h-[16px] rounded-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;
