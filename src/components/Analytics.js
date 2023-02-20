import React from "react";
import laptop from "../assets/laptop.jpg";
import CustomButton from "../constants/CustomButton";

const Analytics = () => {
  return (
    <div className="bg-white w-full h-screen px-4 mx-auto grid md:grid-cols-2 lg:px-10">
      <img className="w-[500px] m-auto" src={laptop} alt="" />
      <div className="flex flex-col justify-center">
        <p className="uppercase font-bold text-[#00df9a]">
          data analytics dashboard
        </p>
        <h1 className="capitalize text-2xl font-bold">
          manage data analytics centrally
        </h1>
        <p className="text-justify leading-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
          quam consequatur qui veritatis magni unde ea reprehenderit? Porro nam
          quos quam ab? Possimus placeat!
        </p>
        <div className="py-4 flex justify-center md:justify-start">
          <CustomButton>Get Started</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
