import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const NavBar = () => {
  const [nav, SetNav] = useState(false);

  const navHandler = () => {
    SetNav(!nav);
  };

  return (
    <div className="text-white max-w-[1224px] items-center mx-auto flex justify-between px-4 h-20">
      <h1 className="text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-2">Home</li>
        <li className="p-2">Company</li>
        <li className="p-2">Resources</li>
        <li className="p-2">About</li>
        <li className="p-2">Contact</li>
      </ul>
      <div onClick={navHandler} className="block md:hidden">
        {!nav ? (
          <AiOutlineMenu size={20} className="hover:text-[#00df9a]" />
        ) : (
          <AiOutlineClose size={20} className="hover:text-red-500" />
        )}
      </div>
      <div
        className={
          nav
            ? "fixed bg-[#000300] h-full w-[60%] border-r border-r-gray-900 left-0 top-0 ease-in-out duration-500 z-10"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <ul className="upercase p-4">
          <li className="p-2 border-b border-x-white">Home</li>
          <li className="p-2 border-b border-x-white">Company</li>
          <li className="p-2 border-b border-x-white">Resources</li>
          <li className="p-2 border-b border-x-white">About</li>
          <li className="p-2">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
