import { useEffect, useState } from "react";
import { wait } from "@/components/utilities/Helpers";
import SyntaxHighlighter from "@/components/SyntaxHighlighter";
import Divider from "@/components/Divider";
import Link from "next/link";

const HomePage = () => {
  const [dots, setDots] = useState(1);
  const [finishInitializing, setFinishInitializing] = useState(false);
  const Introduction = async () => {
    await wait(1);
    setDots(2);
    await wait(1);
    setDots(3);
    await wait(1);
    setFinishInitializing(true);
  };

  useEffect(() => {
    Introduction();
  }, []);

  if (finishInitializing)
    return (
      <div className="flex items-center flex-col gap-4 pt-[5vh] font-JetBrainsMono">
        <h1 className="text-[48px] font-bold text-center">
          Mark Matthew Vergara
        </h1>
        <h2 className="text-purple-300 text-center animate-pulse">
          A Dev, yep just a dev.
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 pt-10">
          <Link
            href="/about"
            className="border-[3px] border-nightOwlBlue hover:bg-nightOwlBlue py-2 px-8 "
          >
            About Me
          </Link>
          <Link
            href="/resume"
            className="border-[3px] border-oneDarkPurple hover:bg-oneDarkPurple py-2 px-8 "
          >
            Resume
          </Link>
          <Link
            href="/projects"
            className="border-[3px] border-nightOwlBlue hover:bg-nightOwlBlue py-2 px-8"
          >
            My Projects
          </Link>
          <Link
            href="/contact"
            className="border-[3px] border-nightOwlBlue hover:bg-nightOwlBlue py-2 px-8"
          >
            Contact Me
          </Link>
        </div>
      </div>
    );

  return (
    <div className="font-JetBrainsMono pt-2 text-sm">
      <span className="px-6">1</span>
      {SyntaxHighlighter([
        "p import ",
        "b ",
        "r AboutMe ",
        "p from ",
        'g "https://markvergara.vercel.app/"',
        "y ",
      ])}
      <br />

      <span className="px-6">2</span>
      {SyntaxHighlighter([
        "p import ",
        "y { ",
        "r wait ",
        "y } ",
        "p from ",
        'g "@utitlities/Helpers.ts"',
        "y ",
      ])}
      <br />
      <span className="px-6">3</span>
      <br />
      <span className="px-6">4</span>
      {SyntaxHighlighter([
        "p const ",
        "b HomePage ",
        "c = ",
        "y () ",
        "p => ",
        "y {",
      ])}
      <br />
      <span className="px-6 pr-12">4</span>
      {SyntaxHighlighter([
        "p const ",
        "p [",
        "o dots",
        "gr , ",
        "o setDots",
        "p ] ",
        "c = ",
        "b useState",
        "p (",
        "o 1",
        "p )",
      ])}
      <br />
      <span className="px-6 pr-12">5</span>
      {SyntaxHighlighter([
        "p const ",
        "p [",
        "o finishInitializing",
        "gr , ",
        "o setFinishInitializing",
        "p ] ",
        "c = ",
        "b useState",
        "p (",
        "o false",
        "p )",
      ])}
      <br />
      <span className="px-6 pr-12">6</span>
      <br />
      <span className="px-6 pr-12 ">7</span>
      {/* Introduction Function */}
      {SyntaxHighlighter([
        "p const ",
        "b Introduction ",
        "c = ",
        "p async () ",
        "p => ",
        "p {",
      ])}
      <br />

      <span className="px-6 pr-16">8</span>
      {SyntaxHighlighter(["p await ", "b wait(", "o 1", "b )"])}
      <br />

      <span className="px-6 pr-16">9</span>
      {SyntaxHighlighter(["b setDots", "p (", "o 2", "p )"])}
      <br />

      <span className="px-6 pr-14">10</span>
      {SyntaxHighlighter(["p await ", "b wait(", "o 1", "b )"])}
      <br />

      <span className="px-6 pr-14">11</span>
      {SyntaxHighlighter(["b setDots", "p (", "o 3", "p )"])}
      <br />

      <span className="px-6 pr-14">12</span>
      {SyntaxHighlighter(["p await ", "b wait(", "o 1", "b )"])}
      <br />

      <span className="px-6 pr-14">13</span>
      {SyntaxHighlighter(["b setFinishInitializing", "p (", "o true", "p )"])}
      <br />

      <span className="px-6 pr-10">14</span>
      {SyntaxHighlighter(["p }"])}
      <br />

      <span className="px-6 pr-10">15</span>
      <br />

      <span className="px-6 pr-10">16</span>
      {SyntaxHighlighter(["b useEffect", "p (", "b () ", "p => ", "b {"])}
      <br />
      <span className="px-6 pr-16">17</span>
      {SyntaxHighlighter(["b Introduction", "y ()"])}
      <br />
      <span className="px-6 pr-10">18</span>
      {SyntaxHighlighter(["b }", "p , ", "b []", "p )"])}
      <br />
      <span className="px-6 pr-10">19</span>

      <br />
      <span className="px-6 pr-10">20</span>
      {SyntaxHighlighter([
        "p if ",
        "p (",
        "c !",
        "gr finishInitializing",
        "p ) ",
      ])}
      <br />
      <span className="px-6 pr-16">21</span>
      {SyntaxHighlighter([
        "p return ",
        "gr <",
        "r p ",
        "o className",
        "gr =",
        'g "px-6 text-oneDarkCyan"',
        "gr >",
        "gr Initializing",
        "b {",
        'g "."',
        "gr .",
        "b repeat",
        "y (",
        "gr dots",
        "y )",
        "b }",
        "gr </",
        "r p",
        "gr >",
      ])}
      <br />

      <span className="px-6 pr-10">22</span>
      <br />

      <span className="px-6 pr-10">23</span>
      {SyntaxHighlighter(["p return ", "gr <", "y AboutMe", "gr />"])}
      <br />

      <span className="px-6 pr-10">24</span>
      <br />

      <span className="px-6 pr-4">25</span>
      {SyntaxHighlighter(["y }"])}
      <br />

      <span className="px-6 pr-4">26</span>
      <br />

      <Divider className="border-t" />
      <p className="px-6 text-xl mt-1 text-oneDarkCyan underline underline-offset-8">
        Initializing Please Wait{".".repeat(dots)}
      </p>
      <br />
    </div>
  );
};
export default HomePage;
