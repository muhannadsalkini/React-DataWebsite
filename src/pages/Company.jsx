import React from "react";

const Company = () => {
  return (
    <div>
      <div className="w-full text-white py-[10rem] px-4">
        <div className="max-w-[800px] mt-[96px] w-full my-10 top-10 mx-auto text-center flex flex-col ">
          <h1 className="font-bold md:text-7xl sm:text-6xl text-4xl">
            Our Company
          </h1>
          <p className="md:text-2xl text-xl font-bold text-gray-500 py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            odit?
          </p>
        </div>
      </div>

      <div className="w-full bg-white py-[5rem] md:py-[10rem] px-4">
        <div className="max-w-[1240px] mx-auto text-center">
          <h1 className="font-bold text-4xl md:text-5xl py-4">
            Know More About <span className="text-[#00df9a]">REACT.</span>
          </h1>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl py-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed optio
            deleniti omnis dignissimos error nemo, culpa ad quis perspiciatis
            officia sunt voluptatum eaque voluptatem voluptatibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Company;
