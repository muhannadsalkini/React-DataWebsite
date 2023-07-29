// rafce
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-screen bg-[#000300] border-b border-white/30 top-0 z-10  fixed">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <ul className="hidden md:flex">
          <li className="p-4 hover:cursor-pointer">Home</li>
          <li className="p-4 hover:cursor-pointer">Company</li>
          <li className="p-4 hover:cursor-pointer">Resources</li>
          <li className="p-4 hover:cursor-pointer">About</li>
          <li className="p-4 hover:cursor-pointer">Contact</li>
        </ul>
        {/* Mobile Menu */}
        <div
          onClick={handleNav}
          className="block md:hidden hover:cursor-pointer"
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
              Home
            </li>
            <li className="p-4 border-b border-gray-600 hover:cursor-pointer">
              Company
            </li>
            <li className="p-4 border-b border-gray-600 hover:cursor-pointer">
              Resources
            </li>
            <li className="p-4 border-b border-gray-600 hover:cursor-pointer">
              About
            </li>
            <li className="p-4 hover:cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
