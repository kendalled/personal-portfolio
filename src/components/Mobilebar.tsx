import { useState } from "react";
import { smoothScrollTo } from "../functions";

interface Props {
  show: boolean;
  close: () => void;
}

function Mobilebar({ show, close }: Props) {
  let sandcolorText =
    " bg-gradient-to-r from-red-500 to-orange-400 text-transparent bg-clip-text";

  let status = show
    ? " translate-x-0 duration-300"
    : " translate-x-full duration-300";

  return (
    <>
      <button
        className={
          "fixed z-30 p-6 text-3xl h-20 hover:text-white duration-200" +
          sandcolorText +
          status
        }
        onClick={() => close()}>
        X
      </button>
      <div
        className={
          "flex flex-col px-8 text-xl gap-20 font-bold items-center justify-center z-20 fixed h-screen bg-gradient-to-t from-black via-gray-950 to-gray-800 w-2/3 sm:w-1/3" +
          status
        }>
        <button
          onClick={() => {
            smoothScrollTo("home");
            close();
          }}
          className={"hover:text-white duration-200" + sandcolorText}>
          Home
        </button>
        <button
          onClick={() => {
            smoothScrollTo("about");
            close();
          }}
          className={"hover:text-white duration-200" + sandcolorText}>
          About Me
        </button>
        <button
          onClick={() => {
            smoothScrollTo("projects");
            close();
          }}
          className={"hover:text-white duration-200" + sandcolorText}>
          Projects
        </button>
        <a
          href="/resume.pdf"
          className={"hover:text-white duration-200" + sandcolorText}>
          Resume
        </a>
      </div>
    </>
  );
}

export default Mobilebar;
