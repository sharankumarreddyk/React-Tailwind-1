import React, { useRef, useState } from "react";
import ImageBox from "./ImageBox";
import Dropdown from "../OrderComponents/Dropdown";
import i1 from "../../assets/i1.png";
import i2 from "../../assets/i2.png";

const MachineSlider = () => {
  const imageContainerRef = useRef(null); // Create a reference to the container
  const [selectedImage, setSelectedImage] = useState(null); // State to manage selected image
  const [visibleServiceBox, setVisibleServiceBox] = useState(null); // State to manage the visibility of the service box

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
  const scrollLeft = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollBy({ left: -300, behavior: "smooth" }); // Adjust the scroll amount as needed
    }
  };

  // Function to handle image click
  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  // Function to toggle the service box visibility
  const toggleServiceBox = (part) => {
    setVisibleServiceBox(visibleServiceBox === part ? null : part);
  };

  return (
    <div className="bg-white m-2 p-6">
      <div className="sm:flex justify-between items-center">
        <div className="sm:flex justify-center space-x-1 items-center">
          <h2 className="text-[#0F1C40] md:text-5xl text-3xl font-bold">
            Machines
          </h2>
        </div>
        <div className="flex space-x-3 mb-3">
          <Dropdown
            buttonText="Machine Filter"
            options={["Product Pump", "Machine 2"]}
            isDateDropdown={false}
            customClass=""
          />
          <Dropdown
            buttonText="Department Name"
            options={["Department 1", "Department 2"]}
            isDateDropdown={false}
            customClass=""
          />
        </div>
      </div>

      <div className="flex">
        <div className="py-44 justify-center items-center bg-gray-100 hidden sm:block rounded-r-lg">
          <button
            id="scroll-left"
            onClick={scrollLeft} // Attach the scroll function
            className="justify-center font-bold text-center p-3 px-2 sm:px-8 lg:px-5 rounded-md text-sm sm:text-md lg:text-lg"
          >
            <span className="material-symbols-outlined text-[#0F1C40] text-5xl">
              arrow_circle_left
            </span>
          </button>
        </div>

        <div
          id="image-container"
          ref={imageContainerRef} // Attach the ref here
          className="overflow-x-auto bg-gray-100 border border-white py-6 px-4 rounded-l-lg hide-scrollbar w-full sm:w-auto"
        >
          <div className="flex space-x-6 ">
            {machines.map((machine, index) => (
              <div
                key={index}
                onClick={() => handleImageClick(index)}
                className={`relative transition-transform duration-300 ${
                  selectedImage === index ? "transform scale-105" : ""
                }`}
              >
                <ImageBox
                  title={machine.title}
                  branch={machine.branch}
                  location={machine.location}
                  time={machine.time}
                  imageSrc={machine.imageSrc}
                />
                {index === 1 && (
                  <div className="absolute top-28 right-32 sm:top-24 sm:right-24 lg:top-42 lg:right-52 group">
                    <button
                      onClick={() => toggleServiceBox("part1")}
                      className="bg-red-600 text-white rounded-full w-5 px-1 justify-center"
                    >
                      X
                    </button>
                    {visibleServiceBox === "part1" && (
                      <div className="absolute mt-5 z-20 bg-white border border-red-500 text-red-500 rounded-md p-2 shadow-lg">
                        <div className="flex justify-between text-red-500 mt-2 font-bold text-md">
                          Part 1 <p>Damage</p>
                        </div>
                        <div className="flex">
                          <p className="text-sm">
                            Temperature: <br />
                            <span className="font-bold ml-2 text-lg">
                              210°C
                            </span>
                          </p>
                        </div>
                        <div className="flex items-center">
                          <p className="ml-2">
                            Param 7:
                            <br />
                            <span className="font-bold text-lg">300 Unit</span>
                          </p>
                        </div>
                        <p className="text-xs text-red-500">
                          Between 100 and 200 Unit
                        </p>

                        <div className="flex mt-3 mx-3 space-x-2">
                          <button className="border text-xs px-2 py-1 rounded-md bg-[#FF3334] text-white">
                            Service
                          </button>
                          <button className="border text-xs px-2 py-1 rounded-md bg-white text-[#FF3334]">
                            Order
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="py-44 justify-center items-center bg-gray-100 hidden sm:block rounded-r-lg">
          <button
            id="scroll-right"
            onClick={scrollRight} // Attach the scroll function
            className="justify-center font-bold text-center p-3 px-6 sm:px-8 lg:px-5 text-white rounded-md text-sm sm:text-md lg:text-lg"
          >
            <span className="material-symbols-outlined text-[#0F1C40] text-5xl">
              arrow_circle_right
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MachineSlider;