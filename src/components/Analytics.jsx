import React from "react";
import Laptop from "../assets/laptop.jpg"; // imported as src

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          {/* lorem30 to generate 30 word of lorem text */}
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugiat,
            libero labore incidunt voluptas at provident quod accusantium, nihil
            autem, veritatis exercitationem pariatur ut quos explicabo ducimus
            numquam adipisci optio.
          </p>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a] hover:scale-105 hover:bg-[#00df9a] hover:text-black duration-200">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
