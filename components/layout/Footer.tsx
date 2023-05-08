const Footer = () => {
  return (
    <footer className="fixed z-50 bottom-0 ">
      <header className="flex items-center justify-between bg-nightOwlBlack300 text-white font-JetBrainsMono w-[100vw] h-[30px] pr-2 pl-2">
        <div className="">Mark Matthew Vergara | Portfolio</div>
        <div className="flex gap-1 pr-2">
          <div className="bg-[#f1fa8c] w-[16px] h-[16px] rounded-full" />
          <div className="bg-[#50fa7b] w-[16px] h-[16px] rounded-full" />
          <div className="bg-[#ff5555] w-[16px] h-[16px] rounded-full" />
        </div>
      </header>
    </footer>
  );
};

export default Footer;
