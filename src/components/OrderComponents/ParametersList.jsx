import React from "react";

const ParameterList = () => {
  return (
    <div className="flex text-sm flex-col space-y-2 mt-4">
      {/* Parameter 1 */}
      <div className="flex items-stretch">
        <div className="w-1/4 text-xs md:text-sm font-bold bg-blue-950 text-white p-2 rounded-l-md flex items-center justify-between">
          Param 1
        </div>
        <div className="w-3/4 text-xs md:text-sm bg-gray-100 p-2 rounded-r-md flex items-center">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </div>
      </div>

      {/* Parameter 2 */}
      <div className="flex items-stretch">
        <div className="w-1/4 text-xs md:text-sm font-bold bg-blue-950 text-white p-2 rounded-l-md flex items-center justify-between">
          Param 2
        </div>
        <div className="w-3/4 text-xs md:text-sm bg-gray-100 p-2 rounded-r-md flex items-center">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </div>
      </div>

      {/* Parameter 3 */}
      <div className="flex items-stretch">
        <div className="w-1/4 text-xs md:text-sm font-bold bg-blue-950 text-white p-2 rounded-l-md flex items-center justify-between">
          Param 3
        </div>
        <div className="w-3/4 text-xs md:text-sm bg-gray-100 p-2 rounded-r-md flex items-center">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </div>
      </div>

      {/* Parameter 4 */}
      <div className="flex items-stretch">
        <div
          id="par4"
          className="w-1/4 text-xs md:text-sm font-bold bg-blue-950 text-white p-2 rounded-l-md flex items-center justify-between"
        >
          Param 4
        </div>
        <div className="w-3/4 text-xs md:text-sm bg-gray-100 p-2 rounded-r-md flex items-center">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </div>
      </div>
    </div>
  );
};

export default ParameterList;
