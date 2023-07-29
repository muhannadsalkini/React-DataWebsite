import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full bg-white py-[10rem] px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 md:my-4 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Single}
            alt="/"
          />
          <h2 className="font-bold text-xl text-center p-4">Single User</h2>
          <p className="font-bold text-3xl text-center pb-4">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 User Allowed</p>
            <p className="py-2 border-b mx-8">Send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trail
          </button>
        </div>

        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem]  bg-transparent"
            src={Double}
            alt="/"
          />
          <h2 className="font-bold text-xl text-center p-4">Partnership</h2>
          <p className="font-bold text-3xl text-center pb-4">$199</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1 TB Storage</p>
            <p className="py-2 border-b mx-8">3 User Allowed</p>
            <p className="py-2 border-b mx-8">Send up to 10GB</p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trail
          </button>
        </div>

        <div className="w-full shadow-xl  flex flex-col p-4 md:my-4 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Triple}
            alt="/"
          />
          <h2 className="font-bold text-xl text-center p-4">Group Account</h2>
          <p className="font-bold text-3xl text-center pb-4">$299</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">5 TB Storage</p>
            <p className="py-2 border-b mx-8">10 User Allowed</p>
            <p className="py-2 border-b mx-8">Send up to 20GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
