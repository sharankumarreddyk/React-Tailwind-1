import React, { useState } from "react";

const Dropdown = ({ buttonText, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="  relative text-xl sm:text-sm  sm:mt-0  mt-2 ">
      <button
        className="border border-blue-950 rounded-md bg-white text-blue-950  font-semibold  text-xs px-2   lg:font-bold lg:text-[15px] lg:px-6 py-2                  flex  w-full"
        onClick={toggleDropdown}
      >
        {buttonText}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#1e3a8a"
          className="ml-2 "
        >
          <path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute bg-white shadow-lg mt-1 rounded-md z-50 w-full sm:w-auto">
          <ul className="py-2">
            {options.map((option, index) => (
              <li
                key={index}
                className="px-4 py-1 hover:bg-blue-100 cursor-pointer"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
