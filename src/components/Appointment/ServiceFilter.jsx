import { useState } from "react";
import Dropdown from "../OrderComponents/Dropdown";

const ServiceFilter = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState("active");

  const showProducts = (tab) => {
    setActiveTab(tab);
    onTabChange(tab); // Call the prop function to change the tab in the parent
  };

  return (
    <div className="mx-auto px-4 sm:px-6 mb-10 lg:ml-5 ">
      <div className="grid grid-cols-12 sm:mt-8 mt-2">
        <div className="col-span-12 sm:col-span-6 flex flex-row sm:flex-row ">
          <button
            className={`px-3 py-2 m-1 md:text-xs md:px-1 md:space-x-0 lg:text-[15px] lg:w-[150px] lg:h-[34px] font-bold rounded text-sm border lg:text-nowrap ${
              activeTab === "active"
                ? "bg-[#0F1C40] text-white"
                : "text-[#0F1C40] border-[#0F1C40]"
            }`}
            onClick={() => showProducts("active")}
          >
            Active Services
          </button>
          <button
            className={`px-3 py-2 m-1 md:text-xs md:px-1 md:space-x-0 lg:text-[15px] lg:w-[150px] lg:h-[34px] font-bold rounded text-sm border lg:text-nowrap ${
              activeTab === "delivered"
                ? "bg-[#0F1C40] text-white"
                : "text-[#0F1C40] border-[#0F1C40]"
            }`}
            onClick={() => showProducts("delivered")}
          >
            Delivered Services
          </button>
          <button
            className={`px-3 py-2 m-1 md:text-xs md:px-1 md:space-x-0 lg:text-[15px] lg:w-[150px] lg:h-[34px] font-bold rounded text-sm border lg:text-nowrap md:mr-10 ${
              activeTab === "canceled"
                ? "bg-[#0F1C40] text-white"
                : "text-[#0F1C40] border-[#0F1C40]"
            }`}
            onClick={() => showProducts("canceled")}
          >
            Canceled Services
          </button>
        </div>
        <div className="col-span-12 sm:col-span-6 space-x-2 md:space-x-4 flex flex-row sm:flex-row sm:justify-end text-blue-950 mt-2 sm:mt-0">
          <Dropdown
            buttonText="Date Filter"
            options={["January 1, 2023", "January 2, 2023"]}
            isDateDropdown={true}
          />
          <Dropdown
            buttonText="Machine Filter"
            options={["Product Pump", "Machine 2"]}
          />
          <Dropdown
            buttonText="Department Name"
            options={["Department 1", "Department 2"]}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceFilter;
