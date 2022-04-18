import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineNavigateBefore } from "react-icons/md";

export default function Project() {
  return (
    <div className="flex flex-col  items-center">
      <div className=" flex gap-4 outline-dashed">
        <div className=" bg-red-300 p-3 rounded-lg text-yellow-50 transition-transform hover:text-slate-500 hover:scale-105">
          <a
            href="https://kadiri2006.github.io/websiteclone/"
            target="_blank"
            className="font-extrabold "
          >
            website clone(responsive) 
          </a>
        </div>
        <div className=" bg-red-300 p-3 rounded-lg text-yellow-50 transition-transform hover:text-slate-500 hover:scale-105">
          <a
            href="https://neels.netlify.app/"
            target="_blank"
            className=" font-extrabold"
          >
            E-commerce App
          </a>
        </div>
         <div className=" bg-red-300 p-3 rounded-lg text-yellow-50 transition-transform hover:text-slate-500 hover:scale-105">
          <a
            href="https://binsta.vercel.app/"
            target="_blank"
            className=" font-extrabold"
          >
            SocialMedia Clone
          </a>
        </div>
      </div>

      <Link to="/" className=" my-10">
        <MdOutlineNavigateBefore className=" text-5xl font-extrabold" />
      </Link>
    </div>
  );
}
