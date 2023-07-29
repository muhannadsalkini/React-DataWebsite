import React from "react";

const NotFound = () => {
  return (
    <div className="w-full bg-white py-[10rem] px-4">
      <div className="max-w-[1240px] mx-auto text-center">
        <h1 className="font-bold text-[#00df9a] text-9xl md:text-[200px]">
          404
        </h1>
        <h2 className="text-2xl py-2">Oops! You seem to be lost.</h2>
        <p className="font-medium py-2">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
