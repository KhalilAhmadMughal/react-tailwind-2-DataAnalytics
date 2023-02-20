import React from "react";
import Typed from "react-typed";
import CustomButton from "../constants/CustomButton";

const Hero = () => {
  return (
    <div className="w-full text-center h-screen mx-auto flex flex-col justify-center text-white">
      <p className="text-[#00df9a] uppercase">growing with data analytcs</p>
      <h1 className="text-4xl text-white font-bold my-2">Grow with idea</h1>
      <div className="flex justify-center items-center">
        <p className="text-xl font-bold pr-2">Fast, flexible financing for</p>
        <Typed
          className="text-[#00df9a] font-bold"
          strings={["BTB", "BTC", "SAAS"]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </div>
      <p className="text-sm font-bold text-gray-500 my-4">
        Monitor your analytics to increase income for BTB, BTC & SAAS
        plateforms.
      </p>
      <div className="py-4 flex justify-center">
        <CustomButton>Get Started</CustomButton>
      </div>
    </div>
  );
};

export default Hero;
