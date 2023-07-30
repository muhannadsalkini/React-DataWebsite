import React from "react";
import pc from "../assets/pc.png";
import User from "../assets/user.png";
import Tab from "../assets/tablet.png";
import { ArrowSmRightIcon } from "@heroicons/react/outline";

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
      <div className="w-full bg-[#F7F7F8] py-[10rem] px-4">
        <div className="max-w-[1240px] mx-auto">
          <h1 className="text-[#00df9a]">MISSION, VALUES + GOALS</h1>
          <p className="text-4xl md:text-5xl py-4">
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
      <div className="w-full bg-white py-[11rem] px-4">
        <div className="max-w-[1240px] mx-auto">
          <p className="text-[#00df9a] py-4">THE TEAM</p>
          <div className="grid grid-cols-2 gap-10">
            <div className="pr-8">
              <h1 className="text-5xl my-4">
                Meet the{" "}
                <span className="text-[#00df9a] font-bold">REACT.</span> team
              </h1>
            </div>
            <div className="pl-8">
              <p className="text-[#6c6c89] text-lg md:text-xl">
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

      {/* 5 */}
      <div className="w-full bg-white  mx-auto grid md:grid-cols-2">
        <div className="bg-[#FFF9EB] p-20">
          <div className="md:max-w-[620px] md:ml-auto py-10">
            <img width="144px" src={User} alt="/" />
            <h1 className="py-4 text-4xl font-bold">JR Farr</h1>
            <h2 className=" py-4 text-[#C79215]">CEO / CO-FOUNDER</h2>
            <p className="text-[#6c6c89] text-xl">
              Successful entrepreneur with 2 exits. Previously GM / VP at $EIGI
              (Constant Contact, Bluehost, HostGator, MOJO) overseeing strategy
              and product. Additionally, co-founded MOJO Marketplace. As CEO
              grew platform to 6M+ users while paying out millions to creators.
            </p>
            <button className=" bg-white rounded-full m-6 p-4 hover:bg-[#FFC233] hover:scale-105 duration-200 flex">
              @jrfarr <ArrowSmRightIcon className="h-6 ml-2" />
            </button>
          </div>
        </div>

        <div className="bg-[#F4F1FD] p-20">
          <div className="md:max-w-[620px] py-10">
            <img width="144px" src={User} alt="/" />
            <h1 className="py-4 text-4xl font-bold">Orman Clark</h1>
            <h2 className=" py-4 text-[#7554D8]">CDO / CO-FOUNDER</h2>
            <p className="text-[#6c6c89] text-xl">
              World-class product designer with influence in the design space
              with a reach of well over 1M users across his network. Previously
              founded Dunked, ThemeZilla (Acquired). Notable projects include
              Premium Pixels (10M+ downloads).
            </p>
            <button className=" bg-white rounded-full m-6 p-4 hover:bg-[#7047EB] hover:scale-105 duration-200 flex">
              @ormanclark <ArrowSmRightIcon className="h-6 ml-2" />
            </button>
          </div>
        </div>

        <div className="bg-[#FEF0F4] p-20">
          <div className="md:max-w-[620px] md:ml-auto py-10">
            <img width="144px" src={User} alt="/" />
            <h1 className="py-4 text-4xl font-bold">Gilbert Pellegrom</h1>
            <h2 className=" py-4 text-[#D50B3E]">CTO / CO-FOUNDER</h2>
            <p className="text-[#6c6c89] text-xl">
              Engineering powerhouse with decades of experience empowering
              companies like Dell, AOL, and eBay to create experiences for
              millions of people worldwide. Previously SpinupWP, Dunked,
              Dev7studios (Acquired). Notable projects include Nivo Slider (5M+
              downloads).
            </p>
            <button className=" bg-white rounded-full m-6 p-4 hover:bg-[#F53D6B] hover:scale-105 duration-200 flex">
              @gilbitron <ArrowSmRightIcon className="h-6 ml-2" />
            </button>
          </div>
        </div>
        <div className="bg-[#EEFBF4] p-20">
          <div className="md:max-w-[620px] py-10">
            <img width="144px" src={User} alt="/" />
            <h1 className="py-4 text-4xl font-bold">Jason Schuller</h1>
            <h2 className=" py-4 text-[#1E874C]">STRATEGY / CO-FOUNDER</h2>
            <p className="text-[#6c6c89] text-xl">
              Serial, solo-entrepreneur with several exits. Responsible for
              creating a diverse set of products lauded by thousands of
              customers. Previously Microsoft, Plasso (Acquired by GoDaddy),
              Press75 (Acquired), Leeflets (Acquired), RIVYT and more.
            </p>
            <button className=" bg-white rounded-full m-6 p-4 hover:bg-[#2DCA72] hover:scale-105 duration-200 flex">
              @jbtksc <ArrowSmRightIcon className="h-6 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* 6 */}
      <div className="w-full bg-white py-10 px-4">
        <div className="max-w-[1240px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="py-4">
            <img width="96px" src={User} alt="/" />
            <h1 className="text-3xl md:text-4xl py-6">Ram Ratan Maurya</h1>
            <h2 className="text-[#3D96C1] pb-4">ENGINEERING</h2>
            <p className="text-[#6c6c89]">
              Software Engineer. With over a decade of experience building
              products on WordPress, and lately Laravel. Previously at Delicious
              Brains, WPEngine.
            </p>
            <button className=" bg-[#F7F7F8] rounded-full m-6 p-4 hover:bg-[#2DCA72] hover:scale-105 duration-200 flex">
              @jbtksc <ArrowSmRightIcon className="h-6 ml-2" />
            </button>
          </div>

          <div className="py-4">
            <img width="96px" src={User} alt="/" />
            <h1 className="text-3xl md:text-4xl py-6">Ram Ratan Maurya</h1>
            <h2 className="text-[#3D96C1] pb-4">ENGINEERING</h2>
            <p className="text-[#6c6c89]">
              Software Engineer. With over a decade of experience building
              products on WordPress, and lately Laravel. Previously at Delicious
              Brains, WPEngine.
            </p>
            <button className=" bg-[#F7F7F8] rounded-full m-6 p-4 hover:bg-[#2DCA72] hover:scale-105 duration-200 flex">
              @jbtksc <ArrowSmRightIcon className="h-6 ml-2" />
            </button>
          </div>

          <div className="py-4">
            <img width="96px" src={User} alt="/" />
            <h1 className="text-3xl md:text-4xl py-6">Ram Ratan Maurya</h1>
            <h2 className="text-[#3D96C1] pb-4">ENGINEERING</h2>
            <p className="text-[#6c6c89]">
              Software Engineer. With over a decade of experience building
              products on WordPress, and lately Laravel. Previously at Delicious
              Brains, WPEngine.
            </p>
            <button className=" bg-[#F7F7F8] rounded-full m-6 p-4 hover:bg-[#2DCA72] hover:scale-105 duration-200 flex">
              @jbtksc <ArrowSmRightIcon className="h-6 ml-2" />
            </button>
          </div>

          <div className="py-4">
            <img width="96px" src={User} alt="/" />
            <h1 className="text-3xl md:text-4xl py-6">Ram Ratan Maurya</h1>
            <h2 className="text-[#3D96C1] pb-4">ENGINEERING</h2>
            <p className="text-[#6c6c89]">
              Software Engineer. With over a decade of experience building
              products on WordPress, and lately Laravel. Previously at Delicious
              Brains, WPEngine.
            </p>
            <button className=" bg-[#F7F7F8] rounded-full m-6 p-4 hover:bg-[#2DCA72] hover:scale-105 duration-200 flex">
              @jbtksc <ArrowSmRightIcon className="h-6 ml-2" />
            </button>
          </div>

          <div className="py-4">
            <img width="96px" src={User} alt="/" />
            <h1 className="text-3xl md:text-4xl py-6">Ram Ratan Maurya</h1>
            <h2 className="text-[#3D96C1] pb-4">ENGINEERING</h2>
            <p className="text-[#6c6c89]">
              Software Engineer. With over a decade of experience building
              products on WordPress, and lately Laravel. Previously at Delicious
              Brains, WPEngine.
            </p>
            <button className=" bg-[#F7F7F8] rounded-full m-6 p-4 hover:bg-[#2DCA72] hover:scale-105 duration-200 flex">
              @jbtksc <ArrowSmRightIcon className="h-6 ml-2" />
            </button>
          </div>

          <div className="py-4">
            <img width="96px" src={User} alt="/" />
            <h1 className="text-3xl md:text-4xl py-6">Ram Ratan Maurya</h1>
            <h2 className="text-[#3D96C1] pb-4">ENGINEERING</h2>
            <p className="text-[#6c6c89]">
              Software Engineer. With over a decade of experience building
              products on WordPress, and lately Laravel. Previously at Delicious
              Brains, WPEngine.
            </p>
            <button className=" bg-[#F7F7F8] rounded-full m-6 p-4 hover:bg-[#2DCA72] hover:scale-105 duration-200 flex">
              @jbtksc <ArrowSmRightIcon className="h-6 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* 7 */}
      <div className="w-full bg-black py-[10rem] px-4">
        <div className="max-w-[1240px] mx-auto">
          <p className="text-[#2DCA72]">ELEVATE YOUR BUSINESS</p>
          <div className="grid grid-cols-2">
            <p className="text-white text-5xl py-4">
              Take your business to the next level with Lemon Squeezy
            </p>
            <div className="mt-auto ml-auto">
              <button className=" bg-[#F7F7F8] rounded-full m-6 p-4 px-10 hover:bg-[#2DCA72] hover:scale-105 duration-200 flex">
                Get Started For Free <ArrowSmRightIcon className="h-6 ml-2" />
              </button>
            </div>
          </div>
          <img className="w-full mt-20" src={Tab} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
