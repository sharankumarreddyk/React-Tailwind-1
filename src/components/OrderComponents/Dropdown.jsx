import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Dropdown = ({ buttonText, options, isDateDropdown, customClass }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState(buttonText);
  const [isSelected, setIsSelected] = useState(false);
  const [dropdownSize, setDropdownSize] = useState("w-full sm:w-48");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setIsSelected(true);
  };

  const handleClearSelection = (e) => {
    e.stopPropagation(); // Prevent the dropdown from closing when clicking the clear icon
    setSelectedDate(null);
    setSelectedOption(buttonText);
    setIsSelected(false);
  };

  return (
    <div className="relative inline-block text-left w-full sm:w-auto z-50">
      <button
        id="dropdownButton"
        onClick={toggleDropdown}
        className="flex justify-between items-center p-1 md:px-2 rounded-md border-2 border-blue-950 text-sm font-medium text-[#0F1C40] hover:bg-gray-50 focus:outline-none overflow-hidden w-full sm:w-auto"
      >
        <span className="flex items-center">{selectedOption}</span>
        <span className="material-symbols-outlined md:ml-4">expand_circle_down</span>
        {isSelected && (
          <span
            onClick={handleClearSelection}
            className="ml-2 cursor-pointer"
            title="Clear selection"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </span>
        )}
      </button>

      {isOpen && (
        <div
          id="dropdownMenu"
          className={`absolute mt-6 sm:mt-2 bg-white border border-blue-950 rounded-md shadow-lg max-w-xs sm:max-w-none ${dropdownSize} ${customClass}`}
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
