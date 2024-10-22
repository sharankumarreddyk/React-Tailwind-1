import { useState } from "react";

const Specs_button = ({ name, isActive, onClick }) => {
  return (
    <button
      className={`px-3 py-2 m-1 md:text-xs md:px-1 md:space-x-0 lg:text-[15px] lg:w-[180px] lg:h-[34px] font-bold rounded text-sm border  ${
        isActive ? "bg-[#0F1C40] text-white" : "text-[#0F1C40] border-[#0F1C40]"
      }`}
      onClick={onClick}
      disabled={isActive}
    >
      {name}
    </button>
  );
};

export default Specs_button;
