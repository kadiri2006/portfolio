import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineNavigateBefore } from "react-icons/md";

export default function Project() {
  return (
    <div className="flex flex-col  items-center">
      <h1>project section</h1>

      <a href="https://sleepy-pare-dcb16e.netlify.app/">neelus store</a>

      <Link to="/">
        <MdOutlineNavigateBefore className="animate-bounce text-5xl font-extrabold" />
      </Link>
    </div>
  );
}
