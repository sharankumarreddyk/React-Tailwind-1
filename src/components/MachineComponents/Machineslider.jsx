import React, { useRef, useState } from "react";
import ImageBox from "./ImageBox";
import Dropdown from "../OrderComponents/Dropdown";
import i1 from "../../assets/i1.png";
import i2 from "../../assets/i2.png";

const MachineSlider = ({ selectedMachineIndex, setSelectedMachineIndex }) => {
  const imageContainerRef = useRef(null);
  const [visibleServiceBox, setVisibleServiceBox] = useState(null);

  const machines = [
    {
      title: "Venturi Dryer Alarm",
      branch: "KLM Branch",
      location: "J.K. Building 2.0",
      time: "340 h 23 m 20 s",
      imageSrc: i1,
      borderColor: "border-[#008E28]",
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
    // Subsequent slides with same styles as the first slide
    {
      title: "Venturi Dryer Alarm",
      branch: "KLM Branch",
      location: "J.K. Building 2.0",
      time: "340 h 23 m 20 s",
      imageSrc: i1,
      borderColor: "border-[#008E28]",
      textColor: "text-[#008E28]",
    },
    {
      title: "Double Belt Coolling ",
      branch: "JSA Branch",
      location: "A.A. Building 1.0",
      time: "340 h 23 m 20 s",
      imageSrc: i2,
      borderColor: "border-[#008E28]",
      textColor: "text-[#008E28]",
    },
    {
      title: "Venturi Dryer Alarm",
      branch: "KLM Branch",
      location: "J.K. Building 2.0",
      time: "340 h 23 m 20 s",
      imageSrc: i1,
      borderColor: "border-[#008E28]",
      textColor: "text-[#008E28]",
    },
    {
      title: "Double Belt Coolling ",
      branch: "JSA Branch",
      location: "A.A. Building 1.0",
      time: "340 h 23 m 20 s",
      imageSrc: i2,
      borderColor: "border-[#008E28]",
      textColor: "text-[#008E28]",
    },
   
  ];

  const scroll = (direction) => {
    if (imageContainerRef.current) {
      const scrollAmount = 390;
      const scrollValue = direction === "left" ? -scrollAmount : scrollAmount;
      imageContainerRef.current.scrollBy({
        left: scrollValue,
        behavior: "smooth",
      });
    }
  };

  const handleImageClick = (index) => {
    console.log(`Image ${index} clicked`);
    setSelectedMachineIndex(index); // Update the index in the parent component
  };

  const toggleServiceBox = (part) => {
    setVisibleServiceBox(visibleServiceBox === part ? null : part);
  };

  return (
    <div className="bg-white  p-4 ">
      <div className="sm:flex justify-between items-center">
        <h2 className="text-[#0F1C40] my-3 text-2xl sm:text-3xl md:text-5xl font-bold">
          Machines
        </h2>
        <div className="flex space-x-2 sm:space-x-3 mb-3">
          <Dropdown
            id={5}
            buttonText="Machine Filter"
            options={["Product Pump", "Machine 2"]}
          />
          <Dropdown
            id={6}
            buttonText="Department Name"
            options={["Department 1", "Department 2"]}
          />
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-1/2 transform  -translate-y-1/2 z-20 sm:bg-white sm:py-52">
          <button
            onClick={() => scroll("left")}
            className="justify-center font-bold text-center p-2 sm:p-3 px-2 sm:px-4 lg:px-2 rounded-md text-xs sm:text-sm lg:text-lg"
          >
            <span className="material-symbols-outlined text-[#0F1C40] text-3xl sm:text-5xl">
              arrow_circle_left
            </span>
          </button>
        </div>

        <div
          ref={imageContainerRef}
          className="overflow-x-auto bg-white border border-white py-8  sm:py-16  md:mr-16 md:ml-2 hide-scrollbar sm:rounded-md"
        >
          <div className="flex space-x-4 sm:space-x-9 pl-2 pr-8 sm:pl-20 sm:pr-20">
            {machines.map((machine, index) => (
              <div
                key={index}
                onClick={() => handleImageClick(index)}
                className={`relative transition-transform duration-300 ${selectedMachineIndex === index ? "transform scale-105 shadow-lg" : ""}`}
              >
                <ImageBox
                  title={machine.title}
                  branch={machine.branch}
                  location={machine.location}
                  time={machine.time}
                  imageSrc={machine.imageSrc}
                />
                {index === 1 && (
                  <div className="absolute top-20 sm:top-28 right-20 sm:right-32 group">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleServiceBox("part1");
                      }}
                      className="bg-red-600 text-white rounded-full w-4 sm:w-5 px-1 justify-center"
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
                            Param 7: <br />
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

        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20  sm:bg-white sm:py-40">
          <button
            onClick={() => scroll("right")}
            className="justify-center font-bold text-center p-2 sm:p-3 px-2 sm:px-4 lg:px-2 rounded-md text-xs sm:text-sm lg:text-lg"
          >
            <span className="material-symbols-outlined text-[#0F1C40] text-3xl sm:text-5xl">
              arrow_circle_right
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MachineSlider;