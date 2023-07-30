import React from "react";
import pc from "../assets/pc.png";

const About = () => {
  return (
    <div>
      {/* 1 */}
      <div className="w-full text-white py-[10rem] px-4">
        <div className="max-w-[800px] mt-[96px] w-full my-10 top-10 mx-auto text-center flex flex-col ">
          <h1 className="font-bold text-7xl">Get to Know More About Us</h1>
          <p className="md:text-2xl text-xl font-bold text-gray-500 py-4">
            Meet the people building{" "}
            <span className="text-[#00df9a]">REACT.</span>
          </p>
        </div>
      </div>

      {/* 2 */}
      <div className="w-full bg-white py-[10rem] px-4">
        <div className="max-w-[1240px] mx-auto">
          <h1 className="text-[#00df9a]">MISSION, VALUES + GOALS</h1>
          <p className="text-3xl md:text-4xl py-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            voluptatem fugit eaque explicabo, nisi eveniet magni praesentium
            velit iure consequuntur provident quos nam cumque a repellendus rem.
            Cumque, id necessitatibus.
          </p>
        </div>
      </div>

      {/* 3 */}
      <div className="w-full bg-[#F7F7F8] py-[10rem] px-4">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid md:grid-cols-3 gap-2">
            <div className="lg:col-span-2 md:col-span-3">
              <div className="grid md:grid-cols-2">
                <div className="md:bg-transparent bg-white rounded-lg p-6">
                  <p className="text-[#00df9a]">01</p>
                  <h1 className="text-3xl md:text-4xl my-4">Our mission</h1>
                  <p className="text-[#6c6c89] text-lg">
                    We’re here to solve the complex challenges of selling
                    digital products globally. We believe that selling online
                    should be easy-peasy for everyone.
                  </p>
                </div>

                <div className="md:bg-white rounded-lg p-6">
                  <p className="text-[#00df9a]">02</p>
                  <h1 className="text-3xl md:text-4xl my-4">Our Values</h1>
                  <p className="text-[#6c6c89] text-lg">
                    We are committed to ownership, craftsmanship, execution,
                    humility, simplicity and the art of listening. We work to
                    lift the companies and creatives we work with by delivering
                    on our promises and consistently improving one day at a
                    time.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <p className="text-[#00df9a]">03</p>
                  <h1 className="text-3xl md:text-4xl my-4">Our Goals</h1>
                  <p className="text-[#6c6c89] text-lg">
                    We aim to make global digital sales and payments accessible
                    to everybody. We believe building a fun, streamlined and
                    accessible payments platform will enable our community to
                    impact the world significantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] lg:absolute lg:right-[-500px] lg:mt-[-700px]">
          <img className="  object-cover " src={pc} alt="/" />
        </div>
      </div>

      {/* 4 */}
      <div className="w-full bg-white py-[10rem] px-4">
        <div className="max-w-[1240px] mx-auto">
          <p className="text-[#00df9a]">THE TEAM</p>
          <div className="grid grid-cols-2 gap-10">
            <div className="pr-8">
              <h1 className="text-5xl my-4">
                Meet the{" "}
                <span className="text-[#00df9a] font-bold">REACT.</span> team
              </h1>
            </div>
            <div className="pl-8">
              <p className="text-[#6c6c89] text-lg">
                Meet the creative team{" "}
                <span className="text-black">
                  {" "}
                  on a mission to simplify selling digital products.
                </span>{" "}
                Our team of makers and shakers come together with many{" "}
                <span className="text-black">
                  decades of experience in the SaaS and creator space.
                </span>{" "}
                Please don’t be a stranger, say hello and connect with us any
                time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
