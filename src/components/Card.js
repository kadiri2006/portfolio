import React from "react";
import profile from "../images/port.png";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import Scroll from "./Scroll";
import Skills from "./Skills";
import Footer from "./Footer";

export default function Card() {
  return (
    <>
      <div className="mt-20">
        <div className=" max-w-sm bg-white shadow-xl rounded-xl mx-auto p-5 ">
          <img
            src={profile}
            alt="my memoji"
            className=" w-32 mx-auto rounded-full shadow-2xl drop-shadow-2xl  "
          />
          <div className="text-center mt-5">
            <p className="text-gray-900 text-xl sm:text-2xl">Bharath</p>
            <img
              src="logo192.png"
              alt=""
              srcSet=""
              className=" inline-block sm:w-6 sm:mb-2 w-4 mb-1"
            />
            <p className="text-gray-600 pt-2 pb-4 px-2 border-b-2 inline-block sm:text-2xl ">
              Frontend Developer
            </p>
          </div>
          <div className=" flex flex-row justify-center   ">
            <a
              href="https://github.com/kadiri2006?tab=repositories"
              target="_blank"
            >
              <BsGithub className="hover:bg-gray-800 hover:text-white text-gray-800 rounded-full text-3xl p-1 m-1 " />
            </a>
            <a href="https://twitter.com/iambharath3991" target="_blank">
              <BsTwitter className="hover:bg-blue-500 hover:text-white text-blue-500 rounded-full text-3xl p-1 m-1 sm:mx-3.5" />
            </a>
            <a href="mailto:iambharath3991@gmail.com " target="_blank">
              <SiGmail className="hover:bg-red-500 hover:text-white text-red-500  hover:rounded-full text-3xl p-1 m-1" />
            </a>
          </div>
        </div>
      </div>
      <Scroll />
      <Skills />
      <Footer />
    </>
  );
}
