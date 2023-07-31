// rafce
import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYITICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 py-4">
          Grow With Data.
        </h1>
        <div>
          <p className="md:text-5xl sm:text-4xl text-xl font-bold md:pb-6 pb-4">
            Fast, flexible financing for{" "}
            <Typed
              strings={["BTB", "BTC", "SASS"]}
              typeSpeed={90}
              backSpeed={100}
              loop
            />
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:scale-105 hover:bg-black hover:text-[#00df9a] duration-200">
          <Link
            activeClass="active"
            to="test1"
            spy={true}
            smooth={true}
            offset={-96}
            duration={500}
          >
            Get Started
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
