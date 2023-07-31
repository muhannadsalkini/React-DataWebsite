import React from "react";
import { ArrowSmRightIcon } from "@heroicons/react/outline";
import Img from "../assets/Website-thumbnail.webp";

const Resources = () => {
  return (
    <div>
      {/* 1 */}
      <div className="w-full text-white py-[10rem] px-4">
        <div className="max-w-[800px] mt-[96px] w-full my-10 top-10 mx-auto text-center flex flex-col ">
          <h1 className="font-bold md:text-7xl sm:text-6xl text-4xl">
            Our Resources
          </h1>
          <p className="md:text-2xl text-xl font-bold text-gray-500 py-4">
            Find the inspiration you need for your projects in our resources
            library
          </p>
        </div>
      </div>

      {/* 2 */}
      <div className="w-full bg-white py-[10rem] px-4">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
            {/* Filter */}
            <div className="col-span-3 lg:col-span-1">
              <h1 className="font-bold text-3xl py-8">Filter resources</h1>
              <p className="py-4 font-bold">By type</p>
              <div className="py-2">
                <button className="text-lg border-2 rounded-full px-4 py-2 mx-1 my-1 border-[#7047EB] hover:bg-[#7047EB] hover:text-white duration-200 bg-[#7047EB] text-white">
                  All
                </button>
                <button className="text-lg border-2 rounded-full px-4 py-2 mx-1 my-1 border-[#7047EB] hover:bg-[#7047EB] hover:text-white duration-200">
                  Success Story
                </button>
                <button className="text-lg border-2 rounded-full px-4 py-2 mx-1 my-1 border-[#7047EB] hover:bg-[#7047EB] hover:text-white duration-200">
                  White Paper
                </button>
                <button className="text-lg border-2 rounded-full px-4 py-2 mx-1 my-1 border-[#7047EB] hover:bg-[#7047EB] hover:text-white duration-200">
                  Guide
                </button>
                <button className="text-lg border-2 rounded-full px-4 py-2 mx-1 my-1 border-[#7047EB] hover:bg-[#7047EB] hover:text-white duration-200">
                  Ebook
                </button>
                <button className="text-lg border-2 rounded-full px-4 py-2 mx-1 my-1 border-[#7047EB] hover:bg-[#7047EB] hover:text-white duration-200">
                  Video
                </button>
                <button className="text-lg border-2 rounded-full px-4 py-2 mx-1 my-1 border-[#7047EB] hover:bg-[#7047EB] hover:text-white duration-200">
                  Checklist
                </button>
                <button className="text-lg border-2 rounded-full px-4 py-2 mx-1 my-1 border-[#7047EB] hover:bg-[#7047EB] hover:text-white duration-200">
                  Infographic
                </button>
              </div>

              <p className="py-4 font-bold">By business sector</p>
              <div>
                <button className="text-lg border-2 rounded-full px-4 py-2 mx-1 my-1 border-[#D50B3E] hover:bg-[#D50B3E] hover:text-white duration-200 bg-[#D50B3E] text-white">
                  All
                </button>
                <button className="text-lg border-2 rounded-full px-4 py-2 mx-1 my-1 border-[#D50B3E] hover:bg-[#D50B3E] hover:text-white duration-200">
                  Utilities & Energy
                </button>
                <button className="text-lg border-2 rounded-full px-4 py-2 mx-1 my-1 border-[#D50B3E] hover:bg-[#D50B3E] hover:text-white duration-200">
                  Banking & Insurance
                </button>
                <button className="text-lg border-2 rounded-full px-4 py-2 mx-1 my-1 border-[#D50B3E] hover:bg-[#D50B3E] hover:text-white duration-200">
                  Transportation & Mobility
                </button>
                <button className="text-lg border-2 rounded-full px-4 py-2 mx-1 my-1 border-[#D50B3E] hover:bg-[#D50B3E] hover:text-white duration-200">
                  Local Goverment
                </button>
                <button className="text-lg border-2 rounded-full px-4 py-2 mx-1 my-1 border-[#D50B3E] hover:bg-[#D50B3E] hover:text-white duration-200">
                  Public Institutions
                </button>
                <button className="text-lg border-2 rounded-full px-4 py-2 mx-1 my-1 border-[#D50B3E] hover:bg-[#D50B3E] hover:text-white duration-200">
                  Services & Manufacturing Businesses
                </button>
                <button className="text-lg border-2 rounded-full px-4 py-2 mx-1 my-1 border-[#D50B3E] hover:bg-[#D50B3E] hover:text-white duration-200">
                  Energie & Utilities
                </button>
                <button className="text-lg border-2 rounded-full px-4 py-2 mx-1 my-1 border-[#D50B3E] hover:bg-[#D50B3E] hover:text-white duration-200">
                  Collectives Territoriales
                </button>
                <button className="text-lg border-2 rounded-full px-4 py-2 mx-1 my-1 border-[#D50B3E] hover:bg-[#D50B3E] hover:text-white duration-200">
                  Transport & Mobilite
                </button>
              </div>

              <p className="py-4 font-bold">Filter by keyword</p>
              <div>
                <input
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                  placeholder="Search for a keyword"
                ></input>
                <div className="flex flex-row">
                  <button className=" bg-white rounded-full m-6 p-4 hover:bg-[#7047EB] hover:scale-105 duration-200 flex">
                    Search <ArrowSmRightIcon className="h-6 ml-2" />
                  </button>
                  <button className=" bg-white rounded-full m-6 p-4 hover:bg-[#D50B3E] hover:scale-105 duration-200 flex">
                    Reset Filters <span className="font-bold ml-2">X</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="grid md:grid-cols-2">
                <div className="hover:scale-105 hover:bg-gray-50 duration-200 rounded-2xl p-4">
                  <img className="rounded-xl" src={Img} alt="/" />
                  <p className="text-[#D50B3E] underline">Local goverment</p>
                  <h1 className="font-bold my-2 text-2xl">
                    City of Salinas drives transparency and collaboration
                    through open data
                  </h1>
                  <p>
                    The City of Salinas has a diverse and multicultural
                    population of approximately 160,000 people. As a city it is
                    focused on using data to drive transparency, and is one
                    of...{" "}
                  </p>
                </div>

                <div className="hover:scale-105 hover:bg-gray-50 duration-200 rounded-2xl p-4">
                  <img className="rounded-xl" src={Img} alt="/" />
                  <p className="text-[#D50B3E] underline">Local goverment</p>
                  <h1 className="font-bold my-2 text-2xl">
                    City of Salinas drives transparency and collaboration
                    through open data
                  </h1>
                  <p>
                    The City of Salinas has a diverse and multicultural
                    population of approximately 160,000 people. As a city it is
                    focused on using data to drive transparency, and is one
                    of...{" "}
                  </p>
                </div>

                <div className="hover:scale-105 hover:bg-gray-50 duration-200 rounded-2xl p-4">
                  <img className="rounded-xl" src={Img} alt="/" />
                  <p className="text-[#D50B3E] underline">Local goverment</p>
                  <h1 className="font-bold my-2 text-2xl">
                    City of Salinas drives transparency and collaboration
                    through open data
                  </h1>
                  <p>
                    The City of Salinas has a diverse and multicultural
                    population of approximately 160,000 people. As a city it is
                    focused on using data to drive transparency, and is one
                    of...{" "}
                  </p>
                </div>

                <div className="hover:scale-105 hover:bg-gray-50 duration-200 rounded-2xl p-4">
                  <img className="rounded-xl" src={Img} alt="/" />
                  <p className="text-[#D50B3E] underline">Local goverment</p>
                  <h1 className="font-bold my-2 text-2xl">
                    City of Salinas drives transparency and collaboration
                    through open data
                  </h1>
                  <p>
                    The City of Salinas has a diverse and multicultural
                    population of approximately 160,000 people. As a city it is
                    focused on using data to drive transparency, and is one
                    of...{" "}
                  </p>
                </div>

                <div className="hover:scale-105 hover:bg-gray-50 duration-200 rounded-2xl p-4">
                  <img className="rounded-xl" src={Img} alt="/" />
                  <p className="text-[#D50B3E] underline">Local goverment</p>
                  <h1 className="font-bold my-2 text-2xl">
                    City of Salinas drives transparency and collaboration
                    through open data
                  </h1>
                  <p>
                    The City of Salinas has a diverse and multicultural
                    population of approximately 160,000 people. As a city it is
                    focused on using data to drive transparency, and is one
                    of...{" "}
                  </p>
                </div>

                <div className="hover:scale-105 hover:bg-gray-50 duration-200 rounded-2xl p-4">
                  <img className="rounded-xl" src={Img} alt="/" />
                  <p className="text-[#D50B3E] underline">Local goverment</p>
                  <h1 className="font-bold my-2 text-2xl">
                    City of Salinas drives transparency and collaboration
                    through open data
                  </h1>
                  <p>
                    The City of Salinas has a diverse and multicultural
                    population of approximately 160,000 people. As a city it is
                    focused on using data to drive transparency, and is one
                    of...{" "}
                  </p>
                </div>

                <div className="hover:scale-105 hover:bg-gray-50 duration-200 rounded-2xl p-4">
                  <img className="rounded-xl" src={Img} alt="/" />
                  <p className="text-[#D50B3E] underline">Local goverment</p>
                  <h1 className="font-bold my-2 text-2xl">
                    City of Salinas drives transparency and collaboration
                    through open data
                  </h1>
                  <p>
                    The City of Salinas has a diverse and multicultural
                    population of approximately 160,000 people. As a city it is
                    focused on using data to drive transparency, and is one
                    of...{" "}
                  </p>
                </div>

                <div className="hover:scale-105 hover:bg-gray-50 duration-200 rounded-2xl p-4">
                  <img className="rounded-xl" src={Img} alt="/" />
                  <p className="text-[#D50B3E] underline">Local goverment</p>
                  <h1 className="font-bold my-2 text-2xl">
                    City of Salinas drives transparency and collaboration
                    through open data
                  </h1>
                  <p>
                    The City of Salinas has a diverse and multicultural
                    population of approximately 160,000 people. As a city it is
                    focused on using data to drive transparency, and is one
                    of...{" "}
                  </p>
                </div>
              </div>
              <div className="text-center text-2xl flex flex-col mt-8">
                <ul className="flex flex-row mx-auto">
                  <li className=" font-bold mx-4 hover:text-[#D50B3E] duration-200 cursor-pointer text-[#D50B3E]">
                    1
                  </li>
                  <li className=" font-bold mx-4 hover:text-[#D50B3E] duration-200 cursor-pointer">
                    2
                  </li>
                  <li className=" font-bold mx-4">...</li>
                  <li className=" font-bold mx-4 hover:text-[#D50B3E] duration-200 cursor-pointer">
                    5
                  </li>
                  <li className=" font-bold mx-4 hover:text-[#D50B3E] duration-200 cursor-pointer">
                    {">>"}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
