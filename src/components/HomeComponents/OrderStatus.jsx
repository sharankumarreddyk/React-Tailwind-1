import React from "react";

const OrderStatus = ({ bgColor, bgColor1 }) => {
  return (
    <div className="col-span-7 bg-white overflow-x-auto xl:overflow-hidden  p-0">
      {/* Progress Bar Container */}
      <div className="min-w-[800px] xl:min-w-fit mb-2  h-full">
        {/* Progress Bar Line */}
        <div className="flex justify-between items-center relative p-3 px-10">
          {/* Progress Circles */}
          <div className="relative z-10 w-10 h-10 bg-[#008E28] text-white rounded-full flex items-center justify-center font-bold">
            1
          </div>
          <div className="flex-1 h-1 bg-[#008E28]"></div>
          <div className="relative z-10 w-10 h-10 bg-[#008E28] text-white rounded-full flex items-center justify-center font-bold">
            2
          </div>
          <div className="flex-1 h-1 bg-[#008E28]"></div>
          <div className="relative z-10 w-10 h-10 bg-[#008E28] text-white rounded-full flex items-center justify-center font-bold">
            3
          </div>
          <div className="flex-1 h-1 bg-[#008E28]"></div>
          <div className="relative z-10 w-10 h-10 bg-[#008E28] text-white rounded-full flex items-center justify-center font-bold">
            4
          </div>
          <div className={`flex-1 h-1 ${bgColor}`}></div>
          <div
            className={`relative z-10 w-10 h-10  ${bgColor === "bg-[#008E28]" ? "text-white bg-[#008E28]" : "text-gray-400 bg-gray-300"}  rounded-full flex items-center justify-center font-bold`}
          >
            5
          </div>
          <div className={`flex-1 h-1 ${bgColor1 || bgColor}`}></div>
          <div className="relative z-10 w-10 h-10 bg-gray-300 text-gray-400 rounded-full flex items-center justify-center font-bold">
            6
          </div>
        </div>

        {/* Step Descriptions */}
        <div className="grid grid-cols-6 gap-1 text-center">
          {/* Step 1 */}
          <div>
            <p className="font-bold text-xs text-[#0F1C40]">Order Placed</p>
            <p className="text-xs text-[#0F1C40]">Feb 12, 2024</p>
            <ul className="text-[9px] list-disc list-inside text-[#0F1C40] mt-2 text-start px-1">
              <li>Order processed</li>
              <li className="text-left">Order status updated - 1</li>
              <li className="text-left">Order status updated - 2</li>
              <li className="text-left">Order status updated - 3</li>
            </ul>
          </div>

          {/* Step 2 */}
          <div>
            <p className="font-bold text-xs text-[#0F1C40]">
              Out from Workshop
            </p>
            <p className="text-xs text-[#0F1C40]">Feb 14, 2024</p>
            <ul className="text-[9px] list-disc list-inside text-[#0F1C40] mt-2 text-start px-1">
              <li>Order processed</li>
              <li className="text-left">Order status updated - 1</li>
              <li className="text-left">Order status updated - 2</li>
              <li className="text-left">Order status updated - 3</li>
            </ul>
          </div>

          {/* Step 3 */}
          <div>
            <p className="font-bold text-xs text-gray-700">Shipping Started</p>
            <p className="text-xs text-[#0F1C40]">Feb 15, 2024</p>
            <ul className="text-[9px] list-disc list-inside text-[#0F1C40] mt-2 text-start px-1">
              <li>Order processed</li>
              <li className="text-left">Order status updated - 1</li>
              <li className="text-left">Order status updated - 2</li>
              <li className="text-left">Order status updated - 3</li>
            </ul>
          </div>

          {/* Step 4 */}
          <div>
            <p className="font-bold text-xs text-[#0F1C40]">Shipping Booked</p>
            <p className="text-xs text-[#0F1C40]">Feb 16, 2024</p>
            <ul className="text-[9px] list-disc list-inside text-[#0F1C40] mt-2 text-start px-1">
              <li>Order processed</li>
              <li className="text-left">Order status updated - 1</li>
              <li className="text-left">Order status updated - 2</li>
              <li className="text-left">Order status updated - 3</li>
            </ul>
          </div>

          {/* Step 5 */}
          <div>
            <p
              className={`font-bold text-xs ${bgColor === "bg-[#008E28]" ? "text-[#0F1C40]" : "text-gray-400"}`}
            >
              Shipped
            </p>
            <p
              className={`text-xs ${bgColor === "bg-[#008E28]" ? "text-[#0F1C40]" : "text-[#D9D9D9]"}`}
            >
              Feb 18, 2024
            </p>
            <ul
              className={`text-[9px] list-disc list-inside ${bgColor === "bg-[#008E28]" ? "text-[#0F1C40]" : "text-[#B4B4B4] opacity-90"} mt-2 text-start px-1 `}
            >
              <li>Order processed</li>
              <li className="text-left">Order status updated - 1</li>
              <li className="text-left">Order status updated - 2</li>
              <li className="text-left">Order status updated - 3</li>
            </ul>
          </div>

          {/* Step 6 */}
          <div>
            <p
              className={`font-bold text-xs opacity-90 ${bgColor === "bg-[#008E28]" ? "text-gray-400" : "text-gray-400"}`}
            >
              Delivered
            </p>
            <p className="text-xs text-[#D9D9D9] opacity-90">Feb 20, 2024</p>
            <ul className="text-[9px] list-disc list-inside text-[#B4B4B4] mt-2 text-start px-1 opacity-90 ">
              <li>Order processed</li>
              <li className="text-left">Order status updated - 1</li>
              <li className="text-left">Order status updated - 2</li>
              <li className="text-left">Order status updated - 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
