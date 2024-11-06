import React from 'react';
import img1 from "../../assets/img1.jpg";

function HomeMachines() {
  return (
    <section className="col-span-4 md:p-2 p-4  mt-2">
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-[#0F1C40] md:text-xl text-lg md:font-bold font-semibold">
          Machines under alarm
        </h2>
        <button className="bg-[#0F1C40] text-xs font-bold text-white p-2.5 px-3 rounded-md">
          Add Machines
        </button>
      </header>

      <div className="bg-gray-100 p-5 rounded-lg shadow-lg">
        <div className="flex gap-1 mb-4">
          <div className="h-fit">
            <img
              src={img1}
              alt="Supercooling System"
              className="md:h-28 md:w-48 h-28 w-32 object-cover rounded-md border-2 border-blue-950"
            />
          </div>
          <div className="p-1 flex-1">
            <div className="md:flex justify-between">
              <div className="md:text-left items-center">
                <p className="text-[#FF3334] lg:text-3xl md:text-2xl text-2xl md:font-semibold">
                  Supercooling System
                </p>
              </div>
              <div className="md:text-right">
                <p className="text-xs font-semibold text-[#0F1C40]">Installation Date</p>
                <span className="text-[#0F1C40] sm:text-lg ">Feb 20, 2024 1324 hrs</span>
              </div>
            </div>

            <div className="md:flex lg:pl-5  md:space-x-12 lg:space-x-4 xl:space-x-4 space-x-6 mt-4 md:visible hidden ">
              <div className="flex-2 text-[#0F1C40] text-start lg:scale-90 xl:scale-100">
                <p className="text-xs font-semibold">Branch</p>
                <p className="text-md">KLM Branch</p>
              </div>
              <div className="flex-2 text-[#0F1C40] text-start lg:scale-90 xl:scale-100">
                <p className="text-xs font-semibold">Location</p>
                <p className="text-md">J.K. Building 2.0</p>
              </div>
              <div className="flex-2 text-[#0F1C40] text-start lg:scale-90 xl:scale-100">
                <p className="text-xs font-semibold">Running time</p>
                <p className="text-md font-bold">340 h 23 m 20 s</p>
              </div>
              <div className="flex-2 text-[#FF3334] text-start lg:scale-90 xl:scale-100 ">
                <p className="text-xs font-semibold">Down time</p>
                <p className="text-md font-bold">3 h 15 m 10 s</p>
              </div>
            </div>
          </div>
        </div>

        {/* Smaller view layout */}
        <div className="sm:flex sm:space-x-6 md:hidden visible ">
          <div className="flex sm:space-x-6 space-x-8">
            <div className="flex-2 text-[#0F1C40] m-1 p-1 text-start">
              <p className="text-sm">Branch</p>
              <p className="text-lg">KLM Branch</p>
            </div>
            <div className="flex-2 text-[#0F1C40] m-1 p-1 text-start">
              <p className="text-sm">Location</p>
              <p className="text-lg">J.K. Building 2.0</p>
            </div>
          </div>
          <div className="flex sm:space-x-6">
            <div className="flex-2 text-[#0F1C40] m-1 p-1 text-start">
              <p className="text-sm">Running time</p>
              <p className="text-lg font-bold">340 h 23 m 20 s</p>
            </div>
            <div className="flex-2 m-1 p-1 text-[#FF3334] text-start">
              <p className="text-sm">Down time</p>
              <p className="text-lg font-bold">3 h 15 m 10 s</p>
            </div>
          </div>
        </div>

        {/* Supercooling system parameters */}
        <div className="md:grid md:space-y-0 space-y-4 xl:grid-cols-7 md:grid-cols-5  gap-4">
          <div className="bg-gray-100 xl:col-span-3 md:col-span-2 grid grid-cols-3  gap-1 md:p-1 p-2 border-2 border-blue-950 rounded-md">
            {/* Parameters */}
            {[
              { label: 'Temp', value: '105 °C', color: '#FF3334', checkId: 'toggleOne' },
              { label: 'Pressure', value: '400 Pa', color: '#0F1C40' },
              { label: 'Param 2', value: '390 Unit', color: '#0F1C40' },
              { label: 'Param 3', value: '690 Unit', color: '#0F1C40' },
              { label: 'Param 4', value: '330 Unit', color: '#FFB800', checkId: 'toggleTwo' },
              { label: 'Param 5', value: '621 Unit', color: '#0F1C40' },
              { label: 'Param 6', value: '290 Unit', color: '#0F1C40' },
              { label: 'Param 7', value: '90 Unit', color: '#FF3334', checkId: 'toggleThree' },
              { label: 'Param 8', value: '390 Unit', color: '#0F1C40' },
            ].map(({ label, value, color, checkId }, index) => (
              <div key={index} className={`md:p-1 p-2 rounded-md text-start w-28 h-15 ${color === '#FF3334' ? 'text-[#FF3334]' : color === '#FFB800' ? ' text-[#FFB800]' : 'text-[#0F1C40]'}`}>
                <div className="flex justify-between">
                  <p className="text-xs font-medium">{label}</p>
                  {checkId && (
                    <label htmlFor={checkId} className="flex items-center cursor-pointer select-none text-dark  dark:text-white">
                      <div className="relative mr-4 scale-75 ">
                        <input type="checkbox" id={checkId} className="peer sr-only" />
                        <div className={`block h-4 w-6 rounded-full bg-gray-400 dark:bg-dark-2 peer-checked:${color === '#FFB800' ? 'bg-[#FFB800]' : color === '#FF3334' ? 'bg-[#FF3334]' : 'bg-[#0F1C40]'}`}></div>
                        <div className="absolute flex items-center justify-center h-2 w-2 transition bg-white rounded-full dot left-1 top-1 dark:bg-dark-5 peer-checked:translate-x-full peer-checked:bg-white peer-checked:dark:bg-white"></div>
                      </div>
                    </label>
                  )}
                </div>
                <p className="line-height-1">{value}</p>
                <p className="text-[6px]">Between {value === '105 °C' ? '40 °C & 60 °C' : '350 Pa & 800 Pa'}</p>
              </div>
            ))}
          </div>

          {/* Chart section */}
          <div className="xl:col-span-4 md:col-span-3 p-3 rounded-lg border-2 border-blue-950 shadow-md w-full max-w-3xl">
            {/* Temperature Bar */}
            <div className="flex justify-between items-center mb-1">
              <span className="text-[#FF3334] text-xl font-bold">Temperature</span>
            </div>
            <div className="flex w-full md:h-3 h-2.5 bg-gray-200 overflow-hidden">
              <div
                className="flex flex-col justify-center overflow-hidden bg-[#008E28] text-xs text-white text-center whitespace-nowrap"
                style={{ width: '50%' }}
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
              <div
                className="flex flex-col justify-center overflow-hidden bg-[#FF3334] md:text-xs text-[8px] font-semibold text-white text-center whitespace-nowrap"
                style={{ width: '20%' }}
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >105 °C</div>
              <div
                className="flex flex-col justify-center overflow-hidden bg-gray-200 text-xs text-white text-center whitespace-nowrap"
                style={{ width: '30%' }}
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>

           
            {/*-- Time Markers --*/}
                <div className="flex justify-between w-full md:text-xs text-[8px] mb-2">
                    <div className="md:space-x-[58%] md:w-[65%] space-x-[58%] w-[64%]">
                        <span className="text-black">0000 hrs</span>
                        <span className="text-[#FF3334] font-semibold">1830 hrs</span>
                    </div>
                    <div className="space-x-5">
                        <span className="text-[#FF3334] font-semibold">2030 hrs</span>
                        <span className="text-black">2359 hrs</span>
                    </div>
                </div>

                {/*------------------------------- Param 4 Bar -------------*/}
                <div className="flex justify-between items-center mb-1">
                    <span style={{ color: '#FFB800' }} className="text-xl font-bold">
                        Param 4
                    </span>
                </div>
                <div className="flex w-full md:h-3 h-2.5 bg-gray-200 overflow-hidden">
                    <div className="flex flex-col justify-center overflow-hidden bg-[#008E28] text-xs text-white text-center whitespace-nowrap"
                        style={{ width: '40%' }} role="progressbar" aria-valuenow="25" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    <div className="flex flex-col justify-center overflow-hidden bg-[#FFB800] md:text-xs text-[8px] font-semibold text-white text-center whitespace-nowrap"
                        style={{ width: '30%' }} role="progressbar" aria-valuenow="25" aria-valuemin="0"
                        aria-valuemax="100">305 Unit</div>
                </div>

                {/*-- Time Markers --*/}
                <div className="flex justify-between w-full md:text-xs text-[8px] mb-2">
                    <div className="md:space-x-[42%] md:w-[65%] space-x-[40%] w-[62%]">
                        <span className="text-black">0000 hrs</span>
                        <span className="text-[#FFB800] font-semibold">1830 hrs</span>
                    </div>
                    <div className="space-x-5">
                        <span className="text-[#FFB800] font-semibold">2030 hrs</span>
                        <span className="text-black">2359 hrs</span>
                    </div>
                </div>

                {/*------------------------------------- Param 7 Bar --*/}
                <div className="flex justify-between items-center mb-1">
                    <span style={{ color: '#FF3334' }} className="text-xl font-bold">
                        Param 7
                    </span>
                </div>
                <div className="flex w-full md:h-3 h-2.5 bg-gray-200 overflow-hidden">
                    <div className="flex flex-col justify-center overflow-hidden bg-[#008E28] text-xs text-white text-center whitespace-nowrap"
                        style={{ width: '30%' }} role="progressbar" aria-valuenow="25" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    <div className="flex flex-col justify-center overflow-hidden bg-[#FF3334] md:text-xs text-[8px] text-white font-semibold text-center whitespace-nowrap"
                        style={{ width: '40%' }} role="progressbar" aria-valuenow="25" aria-valuemin="0"
                        aria-valuemax="100">90 Unit</div>
                </div>

                {/*-- Time Markers --*/}
                <div className="flex justify-between w-full md:text-xs text-[8px] mb-2">
                    <div className="md:space-x-[27%] md:w-[65%] space-x-[25%] w-[64%]">
                        <span className="text-black">0000 hrs</span>
                        <span className="text-[#FF3334] font-semibold">1830 hrs</span>
                    </div>
                    <div className="space-x-5">
                        <span className="text-[#FF3334] font-semibold">2030 hrs</span>
                        <span className="text-black">2359 hrs</span>
                    </div>
                </div>


          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeMachines;
