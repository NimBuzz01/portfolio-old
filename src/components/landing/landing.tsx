import React from "react";
import Navbar from "../navbar/navbar";

const Landing = () => {
  return (
    <div className="flex h-screen sm:justify-center sm:items-center bg-blue-50">
      <Navbar />
      <div className="p-6 max-w-[25rem] sm:flex sm:flex-col sm:items-center mt-auto mb-10 sm:mt-0 sm:max-w-[70%] w-full sm:text-center">
        <h1 className="flex gap-2 flex-col text-gray-800 tracking-tighter text-4xl sm:text-5xl md:text-6xl lg-text-7xl xl:text-8xl 2xl:text-9xl uppercase font-extrabold">
          <span className="sm:-translate-x-36">Hi There,I'm</span>
          <span className="sm:translate-x-16">Niamat Marjan.</span>
        </h1>
        <p className="text-gray-500 sm:text-center text-lg sm:text-xl md:text-2xl w-full leading-tight mt-3 sm:mt-10 sm:max-w-96 md:max-w-[34rem]">
          A passionate frontend developer & web designer propelling startup
          visions to reality
        </p>
      </div>
    </div>
  );
};

export default Landing;
