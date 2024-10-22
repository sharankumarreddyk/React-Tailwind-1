import React from "react";

const ParameterList = ({ activeButton }) => {
  const parameters = {
    Description: [
      "Description 1",
      "Description 2",
      "Description 3",
      "Description 4",
    ],
    Specification: [
      "Specification 1",
      "Specification 2",
      "Specification 3",
      "Specification 4",
    ],
    "Technical Information": [
      "Technical Information 1",
      "Technical Information 2",
      "Technical Information 3",
      "Technical Information 4",
    ],
  };

  // Check if activeButton is a valid key in the parameters object
  if (!parameters[activeButton]) {
    return null; // or return some fallback UI
  }

  return (
    <div className="flex text-sm flex-col space-y-2 mt-4">
      {parameters[activeButton].map((param, index) => (
        <div key={index} className="flex items-stretch">
          <div className="w-[100px] md:w-1/4 text-xs md:text-sm font-bold bg-blue-950 text-white p-2 rounded-l-md flex items-center justify-between">
            {param}
          </div>
          <div className="w-3/4  text-xs md:text-sm  bg-gray-100 p-2 rounded-r-md flex items-center">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParameterList;
