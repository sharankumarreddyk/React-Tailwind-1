import React, { useState, useEffect, useRef } from "react";
import i1 from "../../assets/i1.png"; // Ensure the path is correct
import i2 from "../../assets/i2.png"; // Ensure the path is correct
import Parameters from "./Parameters";

const ServiceBox = ({ title, temperature, param6, param7, unitRange, isDamaged, onClick }) => (
  <div
    onClick={onClick}
    className={`absolute bg-white border ${isDamaged ? "border-red-500" : "border-green-500"} rounded-md p-2 shadow-lg w-42 cursor-pointer z-10`}
  >
    <div className={`${isDamaged ? "text-red-500" : "text-blue-950"} font-bold text-md`}>
      {title}
    </div>
    <p className="text-sm">
      Temperature:<br /> <span className="font-bold text-lg">{temperature}</span>
    </p>
    {param6 && (
      <p className="text-sm">
        Param 6:<br /> <span className="font-bold text-lg">{param6}</span>
      </p>
    )}
    {param7 && (
      <p className="text-sm">
        Param 7:<br /> <span className="font-bold text-lg">{param7}</span>
      </p>
    )}
    <p className="text-xs text-gray-500">{unitRange}</p>
    <div className="flex mt-3 space-x-2">
      <button className="border text-xs px-2 py-1 rounded-md bg-[#0F1C40] text-white">Service</button>
      <button className="border text-xs px-2 py-1 rounded-md bg-white text-[#0F1C40]">Order</button>
    </div>
  </div>
);

const MachineImage = ({ selectedMachineIndex }) => {
  const [visibleServiceBox, setVisibleServiceBox] = useState(null);
  const [positions, setPositions] = useState({});
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef(null);

  const machines = [
    {
      title: "Venturi Dryer Alarm",
      imageSrc: i1,
      branch: "KLM Branch",
      location: "J.K. Building 2.0",
      time: "340 h 23 m 20 s",
    },
    {
      title: "Double Belt Cooling",
      imageSrc: i2,
      branch: "JSA Branch",
      location: "A.A. Building 1.0",
      time: "340 h 23 m 20 s",
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




    
  ];

  const selectedMachine = machines[selectedMachineIndex];

  const dynamicPositions = {
    part1: { top: '10%', left: '10%' },
    part2: { top: '40%', left: '60%' },
    part3: { top: '45%', left: '75%' },
    part4: { top: '60%', left: '85%' },
    part5: { top: '12%', left: '35%' },
  };

  const fixedPositions = {
    part1: { top: '15%', left: '30%' },
    part2: { top: '25%', left: '20%' },
    part3: { top: '50%', left: '20%' },
    part4: { top: '65%', left: '12%' },
    part5: { top: '10%', left: '56%' },
  };

  useEffect(() => {
    const calculatePositions = () => {
      const imageElement = imageRef.current;
      if (imageElement) {
        const { width, height } = imageElement.getBoundingClientRect();
        const newPositions = selectedMachine.imageSrc === i2 ? fixedPositions : dynamicPositions;

        // Adjust positions relative to the image size
        const updatedPositions = Object.fromEntries(
          Object.entries(newPositions).map(([key, pos]) => [
            key,
            {
              top: `${(parseFloat(pos.top) / 100) * height}px`,
              left: `${(parseFloat(pos.left) / 100) * width}px`,
            },
          ])
        );

        setPositions(updatedPositions);
      }
    };

    if (imageLoaded) {
      calculatePositions();
    }
  }, [selectedMachine, imageLoaded]);

  const toggleServiceBox = (boxId) => {
    setVisibleServiceBox((prev) => (prev === boxId ? null : boxId));
  };

  return (
    <div className="p-4">
      <div className="lg:flex justify-between items-center mb-4">
        <h2 className="text-[#0F1C40] md:text-5xl text-3xl font-bold mb-2">{selectedMachine.title}</h2>
        <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-2 sm:space-y-0 px-12">
          <button className="bg-[#0F1C40] justify-center font-bold text-center p-3 px-6 sm:px-8 lg:px-10 text-white rounded-md text-sm sm:text-md lg:text-lg">Book Appointment</button>
          <button className="bg-[#0F1C40] justify-center font-bold text-center p-3 px-6 sm:px-8 lg:px-10 text-white rounded-md text-sm sm:text-md lg:text-lg">Order Spare Part</button>
          <button className="bg-[#0F1C40] justify-center font-bold text-center p-3 px-6 sm:px-8 lg:px-10 text-white rounded-md text-sm sm:text-md lg:text-lg">Add Sensor</button>
        </div>
      </div>

      <div>
        <div className="grid md:grid-cols-10">
          <div className="col-span-10 z-10 md:col-span-2 px-16 sm:p-8">
            <div className="space-y-4 pl-4 py-4 pr-14 w-fit shadow-lg shadow-gray-400 bg-white border-2 border-white rounded-md">
              <h2 className="text-[#0F1C40] text-2xl font-bold">Details</h2>
              <div className="flex-2 text-[#0F1C40] text-start">
                <p className="text-xs font-semibold">Branch</p>
                <p className="text-lg">{selectedMachine.branch}</p>
              </div>
              <div className="flex-2 text-[#0F1C40] text-start">
                <p className="text-xs font-semibold">Location</p>
                <p className="text-lg">{selectedMachine.location}</p>
              </div>
              <div className="flex-2 text-[#0F1C40] text-start">
                <p className="text-xs font-semibold">Running time</p>
                <p className="text-lg font-bold">{selectedMachine.time}</p>
              </div>
              <div className="flex-2 text-[#FF3334] text-start">
                <p className="text-xs font-semibold">Down time</p>
                <p className="text-lg font-bold">3 h 15 m 10 s</p>
              </div>
            </div>
          </div>

          <div className="slide relative col-span-10 md:col-span-5 md:mt-5">
            <img
              src={selectedMachine.imageSrc}
              alt={selectedMachine.title}
              ref={imageRef}
              onLoad={() => setImageLoaded(true)}
              className="w-fit h-auto"
            />

            {/* Service Boxes */}
            {Object.keys(positions).map((part) => (
              part !== "part1" && (
                <div
                  key={part}
                  className={`absolute group`}
                  style={{ top: positions[part].top, left: positions[part].left }}
                >
                  <button onClick={() => toggleServiceBox(part)} className="bg-green-600 text-white rounded-full w-5 px-1 justify-center z-10">X</button>
                  {visibleServiceBox === part && (
                    <ServiceBox
                      title={`Part ${part.charAt(part.length - 1)} Working`}
                      temperature="170°C"
                      param6="175 Unit"
                      unitRange="Between 50 and 100 Unit"
                      onClick={() => toggleServiceBox(part)}
                    />
                  )}
                </div>
              )
            ))}

            {/* Damaged Part */}
            <div className="absolute top-28 right-32 sm:top-24 sm:right-24 lg:top-52 lg:right-52 group">
              <button onClick={() => toggleServiceBox("part1")} className="bg-red-600 text-white rounded-full w-5 px-1 justify-center z-10">X</button>
              {visibleServiceBox === "part1" && (
                <div className="absolute mt-5 z-20 bg-white border border-red-500 text-red-500 rounded-md p-2 shadow-lg">
                  <div className="flex justify-between text-red-500 mt-2 font-bold text-md">
                    Part 1 <p>Damage</p>
                  </div>
                  <div className="flex">
                    <p className="text-sm">
                      Temperature: <br />
                      <span className="font-bold ml-2 text-lg">210°C</span>
                    </p>
                    <label htmlFor="toggleNine" className="flex items-center cursor-pointer ml-1 overflow-select-none text-dark dark:text-white">
                      <div className="relative">
                        <input type="checkbox" id="toggleNine" className="peer sr-only" checked />
                        <div className="block md:h-6 md:w-10 h-4 w-1 rounded-full box bg-gray-400 dark:bg-dark-2 peer-checked:bg-[#FF3334]"></div>
                        <div className="absolute flex items-center justify-center md:w-4 md:h-4 h-2 w-2 transition bg-white rounded-full dot left-1 top-1 dark:bg-dark-5 peer-checked:translate-x-full peer-checked:bg-white peer-checked:dark:bg-white"></div>
                      </div>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <p className="ml-2">
                      Param 7:
                      <br />
                      <span className="font-bold text-lg">300 Unit</span>
                    </p>
                    <label htmlFor="toggleTen" className="flex items-center cursor-pointer ml-2 overflow-select-none text-dark dark:text-white">
                      <div className="relative">
                        <input type="checkbox" id="toggleTen" className="peer sr-only" checked />
                        <div className="block md:h-6 md:w-10 h-4 w-1 rounded-full box bg-gray-400 dark:bg-dark-2 peer-checked:bg-[#FF3334]"></div>
                        <div className="absolute flex items-center justify-center md:w-4 md:h-4 h-2 w-2 transition bg-white rounded-full dot left-1 top-1 dark:bg-dark-5 peer-checked:translate-x-full peer-checked:bg-white peer-checked:dark:bg-white"></div>
                      </div>
                    </label>
                  </div>
                  <p className="text-xs text-red-500">Between 100 and 200 Unit</p>
                  <div className="flex mt-3 mx-3 space-x-2">
                    <button className="border text-xs px-2 py-1 rounded-md bg-[#FF3334] text-white">Service</button>
                    <button className="border text-xs px-2 py-1 rounded-md bg-white text-[#FF3334]">Order</button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="md:col-span-3 col-span-10">
            <Parameters />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MachineImage;
