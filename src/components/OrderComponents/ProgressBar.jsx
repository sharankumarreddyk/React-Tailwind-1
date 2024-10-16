import React from "react";

const ProgressBar = ({ steps }) => {
  return (
    <div className="flex flex-col w-full  p-4 mt-10 bg-white rounded-lg shadow-lg overflow-hidden ">
      <div className="col-span-12 overflow-x-auto xl:overflow-hidden shadow-md rounded-lg border-2 border-[#008E28] p-0">
        {/* Progress Bar Container */}
        <div className="min-w-[900px] md:min-w-full bg-white ">
          {/* Progress Bar Line */}
          <div className="flex justify-between items-center relative p-3 px-10">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div
                  className={`relative z-10 w-10 h-10 ${
                    step.isActive ? "bg-green-500" : "bg-gray-300"
                  } text-white rounded-full flex items-center justify-center font-bold`}
                >
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 ${
                      steps[index + 1].isActive ? "bg-green-500" : "bg-gray-300"
                    }`}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Step Descriptions */}
          <div className="grid grid-cols-6 gap-1 text-center mb-3">
            {steps.map((step, index) => (
              <div key={index}>
                <p
                  className={`font-bold text-xs ${
                    step.isActive ? "text-gray-700" : "text-gray-400"
                  }`}
                >
                  {step.title}
                </p>
                <p
                  className={`text-xs ${
                    step.isActive ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  {step.date}
                </p>
                <ul
                  className={`text-[10px] mt-2 ${
                    step.isActive ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>• {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
