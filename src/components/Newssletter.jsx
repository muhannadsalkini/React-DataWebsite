import React from "react";

const Newssletter = () => {
  return (
    <div className="w-full py-16 px-4 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <p className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </p>
          <p>Sign up to our newsletter and tsay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row max-w-[500px] items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Your email"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 ml-4 px-6 py-3 text-black">
              Notify me
            </button>
          </div>
          <p>
            We care about the protextion of your data. Read our
            <a className="text-[#00df9a]" href="#">
              Privacy Policy.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newssletter;
