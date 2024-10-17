import React, { useRef } from "react";
import ImageBox from "./ImageBox";
import i1 from "../../assets/i1.png";
import i2 from "../../assets/i2.png";

const MachineSlider = () => {
  const imageContainerRef = useRef(null); // Create a reference to the container

  const machines = [
    {
      title: "Venturi Dryer Alarm",
      branch: "KLM Branch",
      location: "J.K. Building 2.0",
      time: "340 h 23 m 20 s",
      imageSrc: i1,
      borderColor: "border-[#008E28]", // Example border color
      textColor: "text-[#008E28]",
    },
    {
      title: "Double Belt Cooling",
      branch: "JSA Branch",
      location: "A.A. Building 1.0",
      time: "340 h 23 m 20 s",
      imageSrc: i2,
      borderColor: "border-[#FF3334]",
      textColor: "text-[#FF3334]",
    },
    {
      title: "Venturi Dryer Alarm",
      branch: "KLM Branch",
      location: "J.K. Building 2.0",
      time: "340 h 23 m 20 s",
      imageSrc: i1,
    },
    {
      title: "Venturi Dryer Alarm",
      branch: "KLM Branch",
      location: "J.K. Building 2.0",
      time: "340 h 23 m 20 s",
      imageSrc: i2,
    },
    {
      title: "Venturi Dryer Alarm",
      branch: "KLM Branch",
      location: "J.K. Building 2.0",
      time: "340 h 23 m 20 s",
      imageSrc: i1,
    },
    {
      title: "Venturi Dryer Alarm",
      branch: "KLM Branch",
      location: "J.K. Building 2.0",
      time: "340 h 23 m 20 s",
      imageSrc: i2,
    },
    {
      title: "Venturi Dryer Alarm",
      branch: "KLM Branch",
      location: "J.K. Building 2.0",
      time: "340 h 23 m 20 s",
      imageSrc: i2,
    },
    // Add more machines as needed
  ];

  // Function to scroll right
  const scrollRight = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollBy({ left: 300, behavior: "smooth" }); // Adjust the scroll amount as needed
    }
  };

  return (
    <div className=" bg-white m-2 p-6">
      <div class=" sm:flex justify-between items-center ">
        <div class="sm:flex justify-center space-x-1 items-center">
          <h2 class="text-[#0F1C40] md:text-5xl text-3xl font-bold ">
            Machines
          </h2>
        </div>
        <div class="flex  space-x-3 mb-3">
          <div class="relative text-sm">
            <button
              class="border-2 border-[#0F1C40] px-4 py-2 rounded-md bg-white text-[#0F1C40] flex justify-between w-full"
              onclick="toggleDropdown('machineDropdown')"
            >
              Machine Filter
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#1e3a8a"
                class="ml-2"
              >
                <path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
            </button>
            <div
              id="machineDropdown"
              class="absolute right-0 hidden bg-white shadow-lg mt-1 rounded-md"
            >
              <ul class="py-2">
                <li class="px-4 py-1 hover:bg-blue-100 cursor-pointer">
                  Product Pump
                </li>
                <li class="px-4 py-1 hover:bg-blue-100 cursor-pointer">
                  Machine 2
                </li>
              </ul>
            </div>
          </div>
          <div class="relative text-sm">
            <button
              class="border-2 border-[#0F1C40] px-4 py-2 rounded-md bg-white text-[#0F1C40] flex justify-between w-full"
              onclick="toggleDropdown('departmentDropdown')"
            >
              Department Name
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#1e3a8a"
                class="ml-2"
              >
                <path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
            </button>
            <div
              id="departmentDropdown"
              class="absolute right-0 hidden bg-white shadow-lg mt-1 rounded-md"
            >
              <ul class="py-2">
                <li class="px-4 py-1 hover:bg-blue-100 cursor-pointer">
                  Department 1
                </li>
                <li class="px-4 py-1 hover:bg-blue-100 cursor-pointer">
                  Department 2
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex  ">
          <div
            id="image-container"
            ref={imageContainerRef} // Attach the ref here
            className="overflow-x-auto bg-gray-100 border border-white py-6 px-4 rounded-l-lg"
          >
            <div className="flex space-x-6">
              {machines.map((machine, index) => (
                <ImageBox
                  key={index}
                  title={machine.title}
                  branch={machine.branch}
                  location={machine.location}
                  time={machine.time}
                  imageSrc={machine.imageSrc}
                />
              ))}
            </div>
          </div>

          <div className="py-44 justify-center items-center bg-gray-100 hidden sm:block  rounded-r-lg ">
            <button
              id="scroll-right"
              onClick={scrollRight} // Attach the scroll function
              className="justify-center font-bold text-center p-3 px-6 sm:px-8 lg:px-10 text-white rounded-md text-sm sm:text-md lg:text-lg"
            >
              <span className="material-symbols-outlined text-[#0F1C40] text-5xl">
                arrow_circle_right
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineSlider;
