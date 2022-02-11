import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineNavigateBefore } from "react-icons/md";

export default function Project() {
  return (
    <div className="flex flex-col  items-center">
      <a
        href="https://sleepy-pare-dcb16e.netlify.app/"
        target="_blank"
        className=" font-extrabold animate-bounce"
      >
        neelus store
      </a>

      <Link to="/" className=" my-10">
        <MdOutlineNavigateBefore className=" text-5xl font-extrabold" />
      </Link>
    </div>
  );
}
