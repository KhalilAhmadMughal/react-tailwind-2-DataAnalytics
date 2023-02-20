import React from "react";
import CustomButton from "../constants/CustomButton";

const Card = (props) => {
  return (
    <div className="relative px-8 pb-8 flex flex-col items-center shadow-lg rounded-lg bg-white mx-4 hover:bg-gray-200 hover:scale-105 hover:ease-in-out hover:duration-500">
      <div className="absolute bg-gray-100 rounded-full p-4 top-[-34px] w-[80px] h-[80px] flex justify-center">
        <img className="object-fill" src={props.userImage} alt="" />
      </div>
      <h3 className="xl font-bold mt-14 capitalize">{props.title}</h3>
      <h1 className="text-4xl font-bold py-6">${props.amount}</h1>
      <p className="border-y border-gray-500 py-1 w-full text-center">
        <span>{props.storage}</span> GB Storage
      </p>
      <p className="border-b border-gray-500 py-1 w-full text-center">
        <span>{props.userAllow}</span> User Allow
      </p>
      <p className="border-b border-gray-500 py-1 w-full text-center">
        Send up to <span>{props.sendUpto}</span>GB
      </p>
      <div className="pt-6">
        <CustomButton>start trial</CustomButton>
      </div>
    </div>
  );
};

export default Card;
