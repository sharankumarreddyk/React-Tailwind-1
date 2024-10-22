import React from 'react'

function Parameters() {
  return (
    <>
      <div className="col-span-4 w-full  py-12 px-2">
        {/*<!------grid 3  size-2-->*/}
        <div className="bg-white p-4 rounded-lg shadow-lg ">
          <div className="items-center ">
            <span className=" text-[#0F1C40] lg:text-xl font-bold">Param 1</span>
          </div>

          <div className="flex w-full lg:h-2 h-1.5 bg-gray-200 overflow-hidden mb-0.5 ">
            <div
              className="flex flex-col justify-center overflow-hidden bg-[#008E28] text-xs text-white text-center whitespace-nowrap"
              style={{ width: '20%' }}
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
            <div
              className="flex flex-col justify-center overflow-hidden bg-[#FF3334]  md:text-[6px] text-[3.5px] text-white text-center whitespace-nowrap"
              style={{ width : '21%' }}
              role="progressbar"
              aria-valuenow="15"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              200 Unit
            </div>
            <div
              className="flex flex-col justify-center overflow-hidden bg-[#008E28] md:text-[6px] text-[3.5px] text-white text-center whitespace-nowrap"
              style={{ width: '37%' }}
              role="progressbar"
              aria-valuenow="5"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              21.31 Unit
            </div>
          </div>
          {/*<!-- Time Markers -->*/}
          <div className="flex   justify-between w-full xl:text-[10px] lg:text-[8px] text-[6px]  mb-1">
            <div className="space-x-[14%] w-[52%]">
              <span className="text-[#0F1C40] ">0000 hrs</span>
              <span className="text-[#0F1C40] ">0830 hrs</span>
              <span className="text-[#0F1C40] ">1030 hrs</span>
            </div>
            <div className="space-x-5">
              <span className="text-gray-400 ">2030 hrs</span>
              <span className="text-[#0F1C40] ">2359 hrs</span>
            </div>
          </div>
          {/*<!--param -2 ----------------------------------------------------------->*/}
          <div className="items-center ">
            <span className=" text-[#0F1C40] lg:text-xl font-bold">Param 2</span>
          </div>
          <div className="flex w-full lg:h-2 h-1.5 bg-gray-200 overflow-hidden mb-0.5 ">
            <div
              className="flex flex-col justify-center overflow-hidden bg-[#008E28] md:text-[6px] text-[3.5px] text-white text-center whitespace-nowrap"
              style= {{ width: '20%' }}
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
            <div
              className="flex flex-col justify-center overflow-hidden  bg-[#FF3334] md:text-[6px] text-[3.5px] text-white text-center whitespace-nowrap"
              style={{ width: '55%' }}
              role="progressbar"
              aria-valuenow="15"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              1.34 Unit
            </div>
          </div>
          {/*<!-- Time Markers -->*/}
          <div className="flex   justify-between w-full xl:text-[10px] lg:text-[8px] text-[6px]  mb-1">
            <div className="space-x-[18%] w-[60%]">
              <span className="text-[#0F1C40] ">0000 hrs</span>
              <span className="text-[#0F1C40] ">0830 hrs</span>
            </div>
            <div className="space-x-5">
              <span className="text-gray-400 ">2030 hrs</span>
              <span className="text-[#0F1C40] ">2359 hrs</span>
            </div>
          </div>

          {/*<!--param -3 ----------------------------------------------------------->*/}
          <div className="items-center ">
            <span className=" text-[#0F1C40] lg:text-xl font-bold">Param 3</span>
          </div>

          <div className="flex w-full lg:h-2 h-1.5 bg-gray-200 overflow-hidden mb-0.5 ">
            <div
              className="flex flex-col justify-center overflow-hidden bg-[#FF3334] md:text-[6px] text-[3.5px] text-white text-center whitespace-nowrap"
              style={{ width: '18%' }}
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              6.34 Unit
            </div>
            <div
              className="flex flex-col justify-center overflow-hidden bg-[#008E28]  md:text-[6px] text-[3.5px] text-white text-center whitespace-nowrap"
              style={{ width: '60%' }}
              role="progressbar"
              aria-valuenow="15"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              928.34 Unit
            </div>
          </div>
          {/*<!-- Time Markers -->*/}
          <div className="flex   justify-between w-full xl:text-[10px] lg:text-[8px] text-[6px]  mb-1">
            <div className="space-x-[18%] w-[60%]">
              <span className="text-[#0F1C40] ">0000 hrs</span>
              <span className="text-[#0F1C40] ">0830 hrs</span>
            </div>
            <div className="space-x-5">
              <span className="text-gray-400 ">2030 hrs</span>
              <span className="text-[#0F1C40] ">2359 hrs</span>
            </div>
          </div>
          {/*<!--param -4 ----------------------------------------------------------->*/}
          <div className="flex justify-between items-center  ">
            <span className=" text-[#0F1C40] lg:text-xl font-bold">Param 4</span>
          </div>
          <div className="flex w-full lg:h-2 h-1.5 bg-gray-200 mb-0.5 overflow-hidden ">
            <div
              className="flex flex-col justify-center overflow-hidden bg-[#008E28] md:text-[6px] text-[3.5px] text-white text-center whitespace-nowrap"
              style={{ width: '78%' }}
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              128.34 Unit
            </div>
          </div>
          {/*<!-- Time Markers -->*/}
          <div className="flex   justify-between w-full xl:text-[10px] lg:text-[8px] text-[6px]  mb-1">
            <div className="space-x-5 w-[40%]">
              <span className="text-[#0F1C40] ">0000 hrs</span>
            </div>
            <div className="space-x-5">
              <span className="text-gray-400 ">2030 hrs</span>
              <span className="text-[#0F1C40] ">2359 hrs</span>
            </div>
          </div>

          {/*<!--param -5 ----------------------------------------------------------->*/}
          <div className="flex justify-between items-center  ">
            <span className="text-[#0F1C40] lg:text-xl font-bold">Param 5</span>
          </div>
          <div className="flex w-full lg:h-2 h-1.5 bg-gray-200  overflow-hidden mb-0.5">
            <div
              className="flex flex-col justify-center overflow-hidden bg-[#008E28] md:text-[6px] text-[3.5px] text-white text-center whitespace-nowrap"
              style={{width: '62%'}}
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
            <div
              className="flex flex-col justify-center overflow-hidden  md:text-[6px] text-[3.5px] text-white text-center whitespace-nowrap"
              style={{ width: '16%', backgroundColor: '#FF3334'}}
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              78.34 Unit
            </div>
          </div>
          {/*<!-- Time Markers -->*/}
          <div className="flex   justify-between w-full xl:text-[10px] lg:text-[8px] text-[6px]  mb-1">
            <div className="md:space-x-[60%] md:w-[70%] space-x-[60%] w-[69%]">
              <span className="text-[#0F1C40] ">0000 hrs</span>
              <span className="text-[#0F1C40]  ">1830 hrs</span>
            </div>
            <div className="space-x-5">
              <span className="text-gray-400 font-semibold">2030 hrs</span>
              <span className="text-[#0F1C40] ">2359 hrs</span>
            </div>
          </div>

          {/*<!--param -6 ----------------------------------------------------------->*/}
          <div className="flex justify-between items-center  ">
            <span className=" text-[#0F1C40] lg:text-xl font-bold">Param 6</span>
          </div>
          <div className="flex w-full lg:h-2 h-1.5 bg-gray-200 mb-0.5 overflow-hidden ">
            <div
              className="flex flex-col justify-center overflow-hidden bg-[#008E28] md:text-[6px] text-[3.5px] text-white text-center whitespace-nowrap"
              style={{width: '78%'}}
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              128.34 Unit
            </div>
          </div>
          {/*<!-- Time Markers -->*/}
          <div className="flex   justify-between w-full xl:text-[10px] lg:text-[8px] text-[6px]  mb-1">
            <div className="space-x-5 w-[40%]">
              <span className="text-[#0F1C40] ">0000 hrs</span>
            </div>
            <div className="space-x-5">
              <span className="text-gray-400 ">2030 hrs</span>
              <span className="text-[#0F1C40] ">2359 hrs</span>
            </div>
          </div>

          {/*<!--param -7 ----------------------------------------------------------->*/}
          <div className="flex justify-between items-center  ">
            <span className=" text-[#0F1C40] lg:text-xl font-bold">Param 7</span>
          </div>
          <div className="flex w-full lg:h-2 h-1.5 bg-gray-200 mb-2 overflow-hidden ">
            <div
              className="flex flex-col justify-center overflow-hidden bg-[#008E28] md:text-[6px] text-[3.5px] text-white text-center whitespace-nowrap"
              style={{ width: '78%'}}
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              998.34 Unit
            </div>
          </div>
          {/*<!-- Time Markers -->*/}
          <div className="flex   justify-between w-full xl:text-[10px] lg:text-[8px] text-[6px]  mb-2">
            <div className="space-x-5 w-[40%]">
              <span className="text-[#0F1C40] ">0000 hrs</span>
            </div>
            <div className="space-x-5">
              <span className="text-gray-400 ">2030 hrs</span>
              <span className="text-[#0F1C40] ">2359 hrs</span>
            </div>
          </div>

          {/*<!--param -8 ----------------------------------------------------------->*/}
          <div className="flex justify-between items-center ">
            <span className=" text-[#0F1C40] lg:text-xl font-bold">Param 8</span>
          </div>
          <div className="flex w-full lg:h-2 h-1.5 bg-gray-200  overflow-hidden mb-0.5">
            <div
              className="flex flex-col justify-center overflow-hidden  bg-[#008E28] md:text-[6px] text-[3.5px] text-white text-center whitespace-nowrap"
              style={{ width: '78%' }}
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              6.99 Unit
            </div>
          </div>
          {/*<!-- Time Markers -->*/}
          <div className="flex   justify-between w-full xl:text-[10px] lg:text-[8px] text-[6px] ">
            <div className="space-x-5 w-[40%]">
              <span className="text-[#0F1C40] ">0000 hrs</span>
            </div>
            <div className="space-x-5">
              <span className="text-gray-400 ">2030 hrs</span>
              <span className="text-[#0F1C40] ">2359 hrs</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Parameters