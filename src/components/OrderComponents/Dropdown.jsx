import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

let activeDropdownId = null; // Static variable to track the active dropdown

const Dropdown = ({ id, buttonText, options, isDateDropdown, customClass }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState(buttonText);
  const [isSelected, setIsSelected] = useState(false);
  const [dropdownSize, setDropdownSize] = useState("w-full sm:w-48");

  const toggleDropdown = () => {
    if (activeDropdownId && activeDropdownId !== id) {
      // Close the currently open dropdown
      const previousDropdown = document.getElementById(activeDropdownId);
      if (previousDropdown) {
        previousDropdown.style.display = "none"; // Hide the previous dropdown
      }
    }

    setIsOpen(!isOpen); // Toggle the current dropdown
    activeDropdownId = isOpen ? null : id; // Update the active dropdown ID
    if (isDateDropdown) {
      setDropdownSize("w-auto");
    } else {
      setDropdownSize("w-full sm:w-48");
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedOption(date.toDateString());
    setIsOpen(false);
    setDropdownSize("w-full sm:w-48");
    setIsSelected(true);
    activeDropdownId = null; // Reset the active dropdown
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setIsSelected(true);
    activeDropdownId = null; // Reset the active dropdown
  };

  const handleClearSelection = (e) => {
    e.stopPropagation(); // Prevent the dropdown from closing when clicking the clear icon
    setSelectedDate(null);
    setSelectedOption(buttonText);
    setIsSelected(false);
  };

  return (
    <div className="relative inline-block text-left w-full sm:w-auto z-50 ">
      <button
        id="dropdownButton"
        onClick={toggleDropdown}
        className="md:flex justify-between items-center p-1 lg:px-2 rounded-md border-[1px] border-blue-950 text-[12px] font-light text-[#0F1C40] hover:bg-gray-50 focus:outline-none overflow-hidden w-full sm:w-auto  "
      >
        <span className="flex justify-center">{selectedOption}</span>
        <div className="flex sm:items-end justify-center ">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=" lg:ml-5   w-[28px] h-[24px]"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              strokeWidth="1"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.46997 10.74L12 14.26L15.53 10.74"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {isSelected && (
            <span
              onClick={handleClearSelection}
              className="cursor-pointer lg:ml-2"
              title="Clear selection"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[30px] h-[25px]"
              >
                <path
                  d="M12 2.84952C17.0536 2.84952 21.1504 6.94633 21.1504 12C21.1504 17.0537 17.0536 21.1505 12 21.1505C6.9463 21.1505 2.84949 17.0537 2.84949 12C2.84949 6.94633 6.9463 2.84952 12 2.84952Z"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <path
                  d="M10.1597 10.1647L13.8301 13.8352"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <path
                  d="M13.8301 10.1648L10.1596 13.8352"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          )}
        </div>
      </button>

      {isOpen && (
        <div
          id={id}
          className={`absolute mt-6 sm:mt-2 bg-white border border-blue-950 rounded-md shadow-lg max-w-xs sm:max-w-none ${dropdownSize} ${customClass} max-h-60 overflow-y-auto`}
        >
          {isDateDropdown ? (
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              inline
              className="w-full z-50"
            />
          ) : (
            options.map((option, index) => (
              <React.Fragment key={index}>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </a>
                {index < options.length - 1 && (
                  <hr className="border border-gray-300" />
                )}
              </React.Fragment>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
