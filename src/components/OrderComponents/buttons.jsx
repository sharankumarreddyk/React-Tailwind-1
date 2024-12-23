import { useState } from "react";

const Button = ({ name, isActive, onClick }) => {
  return (
    <button
      className={`px-3 py-2 m-1 md:text-xs md:px-1 md:space-x-0  lg:text-[15px] lg:w-[150px] lg:h-[34px] font-bold rounded text-sm border lg:text-nowrap  ${
        isActive ? "bg-[#0F1C40] text-white" : "text-[#0F1C40] border-[#0F1C40]"
      }`}
      onClick={onClick}
      disabled={isActive}
    >
      {name}
    </button>
  );
};

export default Button;
