import React from "react";

const Singup = () => {
  return (
    <div>
      {/* <div className="w-full text-white py-[10rem] px-4">
        <div className="max-w-[600px] mt-[96px] w-full my-10 top-10 mx-auto text-center flex flex-col ">
          <h1 className="font-bold md:text-7xl sm:text-6xl text-4xl">
            Contact Us
          </h1>
        </div>
      </div> */}
      <div className="w-full bg-white py-[10rem] px-4">
        <div className="max-w-[600px] mx-auto">
          <div class=" px-4 mx-auto max-w-screen-md">
            <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla,
              delectus?
            </p>
            <form action="#" class="space-y-8">
              <div>
                <label
                  for="firstname"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <label
                  for="lastname"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                  placeholder="name@mail.com"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="subject"
                  class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
                  placeholder="password"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="subject"
                  class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm"
                  placeholder="password"
                  required
                />
              </div>
              <button
                type="submit"
                class="py-3 px-5 text-sm font-medium text-center bg-black text-white rounded-lg sm:w-fit hover:bg-[#00df9a] duration-200 focus:outline-[#00df9a]"
              >
                Singup
              </button>
            </form>
            <p class="mt-8 lg:mt-16  font-light text-center text-gray-500">
              By clicking the Sing Up button you agree to our{" "}
              <a
                className="text-blue-800 hover:scale-105 duration-200 underline"
                href="/"
              >
                Terms an Conditons
              </a>{" "}
              and{" "}
              <a
                className="text-blue-800 hover:scale-105 duration-200 underline"
                href="/"
              >
                Policy Privacy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singup;
