import React, { useState } from "react";
import Dropdown from "../OrderComponents/Dropdown";

const AllAlarm = () => {
  // Dropdown state
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Toggle switch state for alarms
  const [isAlarmOn, setAlarmOn] = useState(false);

  const toggleAlarm = () => {
    setAlarmOn(!isAlarmOn);
  };

  return (
    <div className="col-span-3 p-4 lg:pl-14 px-4">
      <header className="flex justify-between items-center mb-4">
        <div className="flex justify-center md:space-x-2 items-center">
          <h2
            style={{ color: "#0F1C40" }}
            className="md:text-xl text-lg md:pl-2 md:font-bold font-semibold"
          >
            All Alarms
          </h2>
          <div className="flex items-center justify-start ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ color: "#FF3334" }}
              className="md:size-6 size-5"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clipRule="evenodd"
              />
            </svg>
            <h3 style={{ color: "#FF3334" }} className="md:text-xl text-sm">
              1 / 4
            </h3>
          </div>
        </div>

        <div className="flex md:space-x-6  space-x-1">
          <Dropdown buttonText="Today" options={[]} isDateDropdown={true} />

          <button className="bg-[#0F1C40] justify-center  text-xs font-semibold text-center items-center text-white p-1 px-3 rounded-md">
            Create Alarm
          </button>
        </div>
      </header>

      {/* Alarm Cards */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="items-center md:mb-3">
          <span className="text-[#0F1C40] md:text-xl font-bold">
            Venturi Dryer Alarm
          </span>
        </div>
        <p className="text-red-500 md:text-[8px] text-[5px] pl-[20%] mb-1">
          Overall Temp. {">"} 100 degree °C
        </p>
        <div className="flex w-full md:h-2 h-1.5 bg-gray-200 overflow-hidden mb-2">
          <div
            className="flex flex-col justify-center overflow-hidden bg-[#008E28] text-xs text-white text-center whitespace-nowrap"
            style={{ width: "20%" }}
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            className="flex flex-col justify-center overflow-hidden text-xs text-white text-center whitespace-nowrap"
            style={{ width: "21%", backgroundColor: "#FF3334" }}
            role="progressbar"
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            className="flex flex-col justify-center overflow-hidden bg-[#008E28] text-xs text-white text-center whitespace-nowrap"
            style={{ width: "37%" }}
            role="progressbar"
            aria-valuenow="5"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        <div className="flex justify-between w-full md:text-xs text-[8px] mb-2">
          <div className="space-x-[18%] w-[60%]">
            <span className="text-black">0000 hrs</span>
            <span className="text-black">0830 hrs</span>
            <span className="text-black">1030 hrs</span>
          </div>
          <div className="space-x-5">
            <span className="text-gray-400">2030 hrs</span>
            <span className="text-black">2359 hrs</span>
          </div>
        </div>
        {/*2nd alarm--------------------- */}
        <div className="items-center md:mb-3">
          <span className="text-[#0F1C40] md:text-xl font-bold">
            Double Belt Cooling System Alarm
          </span>
        </div>

        <div className="flex w-full md:h-2 h-1.5 bg-gray-200 overflow-hidden mb-2">
          <div
            className="flex flex-col justify-center overflow-hidden bg-[#008E28] text-xs text-white text-center whitespace-nowrap"
            style={{ width: "78%" }}
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        <div className="flex justify-between w-full md:text-xs text-[8px] mb-2">
          <div className="space-x-[18%] w-[60%]">
            <span className="text-black">0000 hrs</span>
          </div>
          <div className="space-x-5">
            <span className="text-gray-400">2030 hrs</span>
            <span className="text-black">2359 hrs</span>
          </div>
        </div>

        {/*--3rd Alarm ----------- */}
        <div className="flex justify-between items-center">
          <span style={{ color: "#FF3334" }} className="md:text-xl font-bold">
            Supercooling System Alarm
          </span>
          <label
            htmlFor="toggleFour"
            className="flex items-center cursor-pointer overflow-hidden select-none text-dark"
          >
            <div className="relative">
              <input
                type="checkbox"
                id="toggleFour"
                className="peer sr-only"
                checked={isAlarmOn}
                onChange={toggleAlarm}
              />
              <div className="block md:h-6 md:w-10 h-4 w-6 rounded-full bg-gray-400 peer-checked:bg-[#FF3334]"></div>
              <div className="absolute flex items-center justify-center md:w-4 md:h-4 h-2 w-2 transition bg-white rounded-full dot left-1 top-1 peer-checked:translate-x-full peer-checked:bg-white"></div>
            </div>
          </label>
        </div>
        <p className="text-red-500 md:text-[8px] text-[6px] text-right">
          Manually turn off the alarm
        </p>
        <p className="text-red-500 md:text-[8px] text-[5px] pl-[55%] mb-1">
          Overall Temp. {">"} 100 degree °C
        </p>
        <div className="flex w-full md:h-2 h-1.5 bg-gray-200 overflow-hidden mb-2">
          <div
            className="flex flex-col justify-center overflow-hidden bg-[#008E28] text-xs text-white text-center whitespace-nowrap"
            style={{ width: "55%" }}
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            className="flex flex-col justify-center overflow-hidden bg-[#FF3334] text-xs text-white text-center whitespace-nowrap"
            style={{ width: "23%" }}
            role="progressbar"
            aria-valuenow="5"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        <div className="flex justify-between w-full md:text-xs text-[8px] mb-2">
          <div className="md:space-x-[70%] space-x-[63%] w-[65%]">
            <span className="text-black">0000 hrs</span>
            <span className="text-black">1830 hrs</span>
          </div>
          <div className="space-x-5">
            <span className="text-gray-400">2030 hrs</span>
            <span className="text-black">2359 hrs</span>
          </div>
        </div>
        {/*--4th Alarm--------------- */}
        <div className="items-center md:mb-3">
          <span className="text-[#0F1C40] md:text-xl font-bold">
            Double Belt Cooling System Alarm
          </span>
        </div>

        <div className="flex w-full md:h-2 h-1.5 bg-gray-200 overflow-hidden mb-2">
          <div
            className="flex flex-col justify-center overflow-hidden bg-[#008E28] text-xs text-white text-center whitespace-nowrap"
            style={{ width: "78%" }}
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        <div className="flex justify-between w-full md:text-xs text-[8px] mb-2">
          <div className="space-x-[18%] w-[60%]">
            <span className="text-black">0000 hrs</span>
          </div>
          <div className="space-x-5">
            <span className="text-gray-400">2030 hrs</span>
            <span className="text-black">2359 hrs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllAlarm;
