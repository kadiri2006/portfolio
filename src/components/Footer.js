import React from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { Element } from "react-scroll";

export default function Footer() {
  return (
    <>
      <div className=" flex flex-row justify-center mt-14  ">
        <a
          href="https://github.com/kadiri2006?tab=repositories"
          target="_blank"
        >
          <BsGithub className="hover:bg-gray-800 hover:text-white text-gray-800 rounded-full text-3xl p-1 m-1 " />
        </a>
        <a href="https://twitter.com/iambharath3991" target="_blank">
          <BsTwitter className="hover:bg-blue-500 hover:text-white  rounded-full text-3xl p-1 m-1 sm:mx-3.5" />
        </a>
        <a href="mailto:kadiri2006@gmail.com " target="_blank">
          <SiGmail className="hover:bg-red-500 hover:text-white   hover:rounded-full text-3xl p-1 m-1" />
        </a>
      </div>
      <div className="text-center">
        <p className="mt-2">
          Made with 💕 by <span className="text-red-500">Bharath</span>
        </p>
      </div>
    </>
  );
}
