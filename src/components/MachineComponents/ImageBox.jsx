import React, { useState } from "react";

const ImageBox = ({ title, branch, location, time, imageSrc }) => {
  // State to manage the toggle switch
  const [isChecked, setIsChecked] = useState(false);

  // Handler to toggle the switch
  const handleToggleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={`min-w-[350px] md:min-w-[350px] sm:min-w-[250px] border-2
        ${title === "Double Belt Cooling" ? "border-[#FF3334]" : "border-[#008E28]"} 
        rounded-md p-4 md:p-4 sm:p-10 shadow-md bg-white relative`}
    >
      <div className="flex justify-between">
        <div
          className={`text-sm flex text-left mb-2 ${
            title === "Venturi Dryer Alarm"
              ? "text-[#008E28]"
              : title === "Double Belt Cooling"
              ? "text-[#FF3334]"
              : "text-gray-600" // Default color
          }`}
        >
          {time}
        </div>
        {title === "Double Belt Cooling" && (
          <div>
            <label
              htmlFor={`toggle-${title}`} // Unique id for the checkbox
              className="flex items-center cursor-pointer ml-6 text-right select-none text-dark dark:text-white"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id={`toggle-${title}`} // Use unique id
                  className="peer sr-only"
                  checked={isChecked}
                  onChange={handleToggleChange} // Handle toggle change
                />
                <div className="block md:h-6 md:w-10 h-4 w-8 rounded-full box bg-gray-400 dark:bg-dark-2 peer-checked:bg-[#FF3334]"></div>
                <div
                  className={`absolute flex items-center justify-center md:w-4 md:h-4 h-2 w-2 transition bg-white rounded-full dot left-1 top-1 
                  ${isChecked ? "translate-x-full" : ""} dark:bg-dark-5`}
                ></div>
              </div>
            </label>
          </div>
        )}
      </div>
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 md:h-48 sm:h-32 object-contain mb-10"
      />
      <h3 className="text-xl md:text-xl sm:text-lg font-semibold mb-2">
        {title}
      </h3>
      <div className="flex justify-between">
        <div className="text-left">
          <p className="text-gray-600">Branch: </p>
          <p className="font-medium">{branch}</p>
        </div>
        <div className="text-left">
          <p className="text-gray-600">Location: </p>
          <p className="font-medium">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
