import React from "react";
import { Element, Link } from "react-scroll";
import { FaChevronDown } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Scroll() {
  return (
    <div className="mt-40 flex justify-center sm:mt-36">
      <Link
        className="animate-bounce"
        to="skillComponent"
        smooth={true}
        duration={500}
        delay={10}
        isDynamic={true}
      >
        <IconContext.Provider value={{ color: "black", size: "2em" }}>
          <FaChevronDown />
        </IconContext.Provider>
      </Link>
    </div>
  );
}
