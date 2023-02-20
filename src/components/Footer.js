import React from "react";

import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaGithubSquare,
  FaDribbbleSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#000300] w-full md:grid md:grid-cols-2 md:gap-6 lg:gap-8 xl:gap-10 lg:px-10">
      <div className="flex flex-col px-4 py-10">
        <h1 className="text-[#00df9a] text-3xl font-bold">react.</h1>
        <p className="text-white text-sm my-4 md:text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          dolorum libero eaque debitis praesentium perferendis architecto.
        </p>
        <div className="flex text-white justify-between">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="px-4 flex justify-between md:items-center">
        <div className="h-full md:py-6">
          <h4 className="capitalize md:text-lg text-sm py-1 font-bold text-gray-400">
            solutions
          </h4>
          <ul className="text-white">
            <li className="capitalize md:text-lg text-sm py-1">anlytics</li>
            <li className="capitalize md:text-lg text-sm py-1">marketing</li>
            <li className="capitalize md:text-lg text-sm py-1">commerce</li>
            <li className="capitalize md:text-lg text-sm py-1">insights</li>
          </ul>
        </div>
        <div className="h-full md:py-6">
          <h4 className="capitalize md:text-lg text-sm py-1 font-bold text-gray-400">
            support
          </h4>
          <ul className="text-white">
            <li className="capitalize md:text-lg text-sm py-1">pricing</li>
            <li className="capitalize md:text-lg text-sm py-1">
              documentation
            </li>
            <li className="capitalize md:text-lg text-sm py-1">guides</li>
            <li className="capitalize md:text-lg text-sm py-1">api status</li>
          </ul>
        </div>
        <div className="h-full md:py-6">
          <h4 className="capitalize md:text-lg text-sm py-1 font-bold text-gray-400">
            company
          </h4>
          <ul className="text-white">
            <li className="capitalize md:text-lg text-sm py-1">about</li>
            <li className="capitalize md:text-lg text-sm py-1">blog</li>
            <li className="capitalize md:text-lg text-sm py-1">jobs</li>
            <li className="capitalize md:text-lg text-sm py-1">press</li>
            <li className="capitalize md:text-lg text-sm py-1">Careers</li>
          </ul>
        </div>
        <div className="h-full md:py-6">
          <h4 className="capitalize md:text-lg text-sm py-1 font-bold text-gray-400">
            legal
          </h4>
          <ul className="text-white">
            <li className="capitalize md:text-lg text-sm py-1">claims</li>
            <li className="capitalize md:text-lg text-sm py-1">policy</li>
            <li className="capitalize md:text-lg text-sm py-1">terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
