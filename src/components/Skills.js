import React from "react";
import { Element } from "react-scroll";
import { BsFillCollectionFill } from "react-icons/bs";
import { FaBloggerB } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { DiReact } from "react-icons/di";

export default function Skills() {
  return (
    <Element name="skillComponent" className="mt-48 sm:mt-28 ">
      <div className="sm:flex sm:flex-row sm:justify-around  pt-12">
        <div className="bg-slate-200    sm:mx-1.5  drop-shadow-2xl  rounded-3xl  m-auto mb-5  ">
          <p className=" font-bold ml-20 pt-5 pb-5 text-3xl ">Tech I Use</p>
          <div className="flex flex-row justify-evenly  pb-4">
            <p className=" bg-blue-50 drop-shadow-lg p-3 rounded-lg">
              <SiJavascript className="text-6xl bg-amber-200  mb-1" />
              Javascript
            </p>
            <p className=" bg-blue-50 p-3 drop-shadow-lg rounded-lg">
              <DiReact className="text-6xl bg-sky-400 text-white mb-1" />
              React
            </p>
            <p className=" bg-blue-50 p-3 drop-shadow-lg rounded-lg">
              <SiTailwindcss className="text-6xl  text-emerald-700 mb-1" />
              TailwindCSS
            </p>
          </div>
        </div>
        <div className="bg-slate-200 w-56 h-56 pl-16 pt-12 drop-shadow-2xl mx-auto sm:m-0 rounded-3xl  ">
          <p className="text-base font-bold  pl-3 ">Project</p>
          <Link to="/project">
            <BsFillCollectionFill className=" text-7xl text-neutral-600 hover:text-neutral-900 mt-4 " />
          </Link>
        </div>
        <div className="bg-slate-200 w-56 h-56 pl-16 pt-12 drop-shadow-2xl m-auto mt-5 sm:m-0 rounded-3xl">
          <p className="text-base font-bold  pl-3">Blog</p>
          <Link to="/blog">
            <FaBloggerB className="text-7xl text-neutral-600 hover:text-neutral-900 mt-4" />
          </Link>
        </div>
      </div>
    </Element>
  );
}
