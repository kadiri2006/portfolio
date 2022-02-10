import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineNavigateBefore } from "react-icons/md";

export default function Project() {
  return (
    <div className="flex flex-col  items-center">
      <p>project section</p>

      <Link to="/">
        <MdOutlineNavigateBefore className="animate-bounce text-5xl font-extrabold" />
      </Link>
    </div>
  );
}
