import React from "react";

const CustomButton = (props) => {
  return (
    <button className="bg-[#00df9a] capitalize w-[180px] hover:bg-gray-500 hover:text-[#00df9a] rounded-lg font-bold  hover:shadow-gray-500 hover:shadow-sm text-black py-2">
      {props.children}
    </button>
  );
};

export default CustomButton;
