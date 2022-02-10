import React from "react";
import { MdOutlineNavigateBefore } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="flex flex-col  items-center">
      <p>blog section</p>

      <Link to="/">
        <MdOutlineNavigateBefore className="animate-bounce text-5xl font-extrabold" />
      </Link>
    </div>
  );
}
