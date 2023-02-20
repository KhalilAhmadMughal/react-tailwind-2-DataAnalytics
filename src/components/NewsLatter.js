import React from "react";
import CustomButton from "../constants/CustomButton";

const NewsLatter = () => {
  return (
    <div className="bg-[#000300] w-full h-80 px-4 flex flex-col justify-center lg:px-10">
      <h1 className="text-white text-xl font-bold md:text-3xl">
        Wants tips & tricks to optimize your flow?
      </h1>
      <p className="text-white text-sm md:text-lg">
        Signup to our newslatter and stay updated.
      </p>
      <form action="/" className="flex flex-col my-6 md:flex-row md:w-full">
        <input
          type="email"
          placeholder="enter tour email"
          className="py-2 px-4 mb-4 md:mb-0 md:basis-[80%] rounded-lg"
        />
        <div className="flex justify-center md:basis-[20%]">
          <CustomButton>notify me</CustomButton>
        </div>
      </form>
      <p className="text-white text-sm md:text-lg">
        We care about the protection of your data. Reed our{" "}
        <span className="text-[#00df9a]">
          <a href="/" className="border-b border-b-[#00df9a]">
            privacy policy.
          </a>
        </span>
      </p>
    </div>
  );
};

export default NewsLatter;
