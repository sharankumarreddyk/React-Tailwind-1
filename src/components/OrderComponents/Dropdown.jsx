import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Dropdown = ({ buttonText, options, isDateDropdown }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState(buttonText);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedOption(date.toDateString());
    setIsOpen(false); // Close the dropdown after selecting a date
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div className="relative inline-block text-left w-full sm:w-auto z-50">
      <button
        id="dropdownButton"
        onClick={toggleDropdown}
        className="inline-flex justify-between items-center p-1 md:px-2 rounded-md border-2 border-blue-950 text-sm font-medium text-[#0F1C40] hover:bg-gray-50 focus:outline-none overflow-hidden w-full sm:w-auto"
      >
        {selectedOption}
        <span className="material-symbols-outlined md:ml-4">
          expand_circle_down
        </span>
      </button>

      {isOpen && (
        <div
          id="dropdownMenu"
          className="absolute right-0 mt-2 w-full sm:w-48 bg-white border border-blue-950 rounded-md shadow-lg"
        >
          {isDateDropdown ? (
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              inline
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
