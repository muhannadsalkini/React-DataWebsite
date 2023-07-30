// rafce
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const Path = window.location.pathname;

  return (
    <div className="w-screen bg-[#000300] border-b border-white/30 top-0 z-10  fixed">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <ul className="hidden md:flex">
          <a
            href="/"
            className={
              "p-4 hover:cursor-pointer hover:scale-105 duration-200 " +
              (Path === "/" ? "text-[#00df9a]" : "")
            }
          >
            Home
          </a>
          <a
            href="/company"
            className={
              "p-4 hover:cursor-pointer hover:scale-105 duration-200 " +
              (Path === "/company" ? "text-[#00df9a]" : "")
            }
          >
            Company
          </a>
          <a
            href="/resources"
            className={
              "p-4 hover:cursor-pointer hover:scale-105 duration-200 " +
              (Path === "/resources" ? "text-[#00df9a]" : "")
            }
          >
            Resources
          </a>
          <a
            href="/about"
            className={
              "p-4 hover:cursor-pointer hover:scale-105 duration-200 " +
              (Path === "/about" ? "text-[#00df9a]" : "")
            }
          >
            About
          </a>
          <a
            href="/contact"
            className={
              "p-4 hover:cursor-pointer hover:scale-105 duration-200 " +
              (Path === "/contact" ? "text-[#00df9a]" : "")
            }
          >
            Contact
          </a>
        </ul>
        {/* Mobile Menu */}
        <div
          onClick={handleNav}
          className="block md:hidden hover:cursor-pointer mr-4"
        >
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden"
              : "fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            REACT.
          </h1>
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-600 hover:cursor-pointer">
              <a className={Path === "/" ? "text-[#00df9a]" : ""} href="/">
                Home
              </a>
            </li>
            <li className="p-4 border-b border-gray-600 hover:cursor-pointer">
              <a
                className={Path === "/company" ? "text-[#00df9a]" : ""}
                href="/company"
              >
                Company
              </a>
            </li>
            <li className="p-4 border-b border-gray-600 hover:cursor-pointer">
              <a
                className={Path === "/resources" ? "text-[#00df9a]" : ""}
                href="/resources"
              >
                Resources
              </a>
            </li>
            <li className="p-4 border-b border-gray-600 hover:cursor-pointer">
              <a
                className={Path === "/about" ? "text-[#00df9a]" : ""}
                href="/about"
              >
                About
              </a>
            </li>
            <li className="p-4 border-b border-gray-600 hover:cursor-pointer">
              <a
                className={Path === "/contact" ? "text-[#00df9a]" : ""}
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
