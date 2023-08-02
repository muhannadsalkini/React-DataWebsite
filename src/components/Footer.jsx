import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto  text-gray-300 py-16 px-4">
      <div className="grid lg:grid-cols-3 gap-8">
        <div>
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
          <p className="py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <a
              className="hover:text-[#00df9a] hover:scale-105 duration-200"
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare size={30} />
            </a>
            <a
              className="hover:text-[#00df9a] hover:scale-105 duration-200"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={30} />
            </a>
            <a
              className="hover:text-[#00df9a] hover:scale-105 duration-200"
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitterSquare size={30} />
            </a>
            <a
              className="hover:text-[#00df9a] hover:scale-105 duration-200"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare size={30} />
            </a>
            <a
              className="hover:text-[#00df9a] hover:scale-105 duration-200"
              href="https://dribbble.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaDribbbleSquare size={30} />
            </a>
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-gray-400">Solutions</h6>
            <ul>
              <li className="py-2 text-sm hover:scale-105 hover:text-[#00df9a] duration-200 cursor-pointer">
                <a href="/">Marketing</a>
              </li>
              <li className="py-2 text-sm hover:scale-105 hover:text-[#00df9a] duration-200 cursor-pointer">
                <a href="/">Analytics</a>
              </li>
              <li className="py-2 text-sm hover:scale-105 hover:text-[#00df9a] duration-200 cursor-pointer">
                <a href="/">Commerce</a>
              </li>
              <li className="py-2 text-sm hover:scale-105 hover:text-[#00df9a] duration-200 cursor-pointer">
                <a href="/">Insights</a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Support</h6>
            <ul>
              <li className="py-2 text-sm hover:scale-105 hover:text-[#00df9a] duration-200 cursor-pointer">
                <a href="/">Pricing</a>
              </li>
              <li className="py-2 text-sm hover:scale-105 hover:text-[#00df9a] duration-200 cursor-pointer">
                <a href="/">Documentation</a>
              </li>
              <li className="py-2 text-sm hover:scale-105 hover:text-[#00df9a] duration-200 cursor-pointer">
                <a href="/resources">Resources</a>
              </li>
              <li className="py-2 text-sm hover:scale-105 hover:text-[#00df9a] duration-200 cursor-pointer">
                <a href="/">API Status</a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Company</h6>
            <ul>
              <li className="py-2 text-sm hover:scale-105 hover:text-[#00df9a] duration-200 cursor-pointer">
                <a href="/about">About</a>
              </li>
              <li className="py-2 text-sm hover:scale-105 hover:text-[#00df9a] duration-200 cursor-pointer">
                <a href="/blog">Blog</a>
              </li>
              <li className="py-2 text-sm hover:scale-105 hover:text-[#00df9a] duration-200 cursor-pointer">
                <a href="/">Jobs</a>
              </li>
              <li className="py-2 text-sm hover:scale-105 hover:text-[#00df9a] duration-200 cursor-pointer">
                <a href="/">Press</a>
              </li>
              <li className="py-2 text-sm hover:scale-105 hover:text-[#00df9a] duration-200 cursor-pointer">
                <a href="/">Careers</a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Legal</h6>
            <ul>
              <li className="py-2 text-sm hover:scale-105 hover:text-[#00df9a] duration-200 cursor-pointer">
                <a href="/company">Claim</a>
              </li>
              <li className="py-2 text-sm hover:scale-105 hover:text-[#00df9a] duration-200 cursor-pointer">
                <a href="/">Policy</a>
              </li>
              <li className="py-2 text-sm hover:scale-105 hover:text-[#00df9a] duration-200 cursor-pointer">
                <a href="/">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <p className="text-center lg:pt-4 pt-10">
          © 2023 REACT, LLC • Privacy • Terms • DPA
        </p>
      </div>
    </div>
  );
};

export default Footer;
