import React from "react";

function Appointcard({ Product, Name }) {
  return (
    <div className="w-full shadow-md rounded-t-xl space-y-1 rounded-b-lg border-2 border-[#0F1C40] ">
      <div className="bg-[#0F1C40] text-white p-3  rounded-t-lg">
        <div className="flex justify-between">
          <div>
            <p className="text-sm p-1 font-medium">Full Service</p>
            <p className="text-xl xl:text-3xl font-bold">{Product}</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-lg">30 h</p>
          </div>
        </div>
      </div>
      <div className="p-4 bg-white rounded-b-lg">
        <div className="text-[#0F1C40] flex justify-between mb-2">
          <div>
            <p className="text-sm font-bold">Appointment</p>
            <p className="md:text-2xl font-light">Feb 28, 2024</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold">Time</p>
            <p className="md:text-2xl font-light">10:30 hrs</p>
          </div>
        </div>
        <div className="flex justify-between items-center pt-2">
          <div className="text-[#0F1C40] rounded-full flex items-center sm:space-x-2 space-x-1 sm:p-2 p-0">
            {/* User Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="sm:text-sm text-xs font-extrabold">{Name}</p>
          </div>
          <div className="text-[#0F1C40] bg-white rounded-full flex items-center space-x-2 p-2">
            {/* Location Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="sm:text-sm text-xs font-extrabold ">Location</p>
          </div>
          <div>
            <button className="bg-white border-[1px] h-9 border-blue-950 text-[#0F1C40] rounded-lg sm:px-5 sm:py-1 px-2 sm:text-base text-xs  hover:bg-gray-100">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointcard;
