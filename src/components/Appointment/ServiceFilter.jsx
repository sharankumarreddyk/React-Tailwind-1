import { useState } from 'react';

const ServiceFilter = ({ onTabChange }) => {
    const [activeTab, setActiveTab] = useState('active');
    const [dropdownOpen, setDropdownOpen] = useState({
        date: false,
        machine: false,
        department: false,
    });

    const toggleDropdown = (filter) => {
        setDropdownOpen((prev) => ({
            ...prev,
            [filter]: !prev[filter],
        }));
    };

    const showProducts = (tab) => {
        setActiveTab(tab);
        onTabChange(tab); // Call the prop function to change the tab in the parent
    };

    return (
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mt-6 space-x-6">
                {/* Order Tabs */}
                <div className="flex flex-col sm:flex-row justify-between mt-6 space-y-4 sm:space-y-0 w-full">
                    <div className="flex space-x-4 w-full">
                        <button
                            className={`sm:px-7 px-4 py-2 ${activeTab === 'active' ? 'bg-[#0F1C40] text-white font-bold' : 'bg-white text-[#0F1C40] border border-[#0F1C40]'} rounded-md sm:text-sm text-xs`}
                            onClick={() => showProducts('active')}
                        >
                            Active Services
                        </button>
                        <button
                            className={`sm:px-7 px-4 py-2 ${activeTab === 'delivered' ? 'bg-[#0F1C40] text-white font-bold' : 'bg-white text-[#0F1C40] border border-[#0F1C40]'} rounded-md sm:text-sm text-xs`}
                            onClick={() => showProducts('delivered')}
                        >
                            Delivered Services
                        </button>
                        <button
                            className={`sm:px-5 px-2 py-2 ${activeTab === 'canceled' ? 'bg-[#0F1C40] text-white font-bold' : 'bg-white text-[#0F1C40] border border-[#0F1C40]'} rounded-md sm:text-sm text-xs`}
                            onClick={() => showProducts('canceled')}
                        >
                            Canceled Services
                        </button>
                    </div>
                </div>

                {/* Filters (Date, Machine, Department) */}
                <div className="grid grid-cols-2  sm:grid-cols-3 lg:gap-8 gap-2 text-[#0F1C40]  mt-4 sm:pr-0 pr-8 w-full">
                    {['date', 'machine', 'department'].map((filter) => (
                        <div key={filter} className="relative sm:text-sm text-[13px] font items-center justify-between">
                            <button
                                className="border border-[#0F1C40] scale-95 sm:scale-100 px-1 py-2 rounded-md bg-white text-[#0F1C40] flex justify-between w-full"
                                onClick={() => toggleDropdown(filter)}
                            >
                                {filter.charAt(0).toUpperCase() + filter.slice(1)} Filter
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1e3a8a" className="sm:ml-2 ">
                                    <path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                                </svg>
                            </button>
                            {dropdownOpen[filter] && (
                                <div className="absolute bg-white shadow-lg mt-1 rounded-md z-10">
                                    <ul className="py-2">
                                        {filter === 'date' && (
                                            <>
                                                <li className="px-4 py-1 hover:bg-blue-100 cursor-pointer">January 1, 23</li>
                                                <li className="px-4 py-1 hover:bg-blue-100 cursor-pointer">January 2, 23</li>
                                            </>
                                        )}
                                        {filter === 'machine' && (
                                            <>
                                                <li className="px-4 py-1 hover:bg-blue-100 cursor-pointer">Product Pump</li>
                                                <li className="px-4 py-1 hover:bg-blue-100 cursor-pointer">Machine 2</li>
                                            </>
                                        )}
                                        {filter === 'department' && (
                                            <>
                                                <li className="px-4 py-1 hover:bg-blue-100 cursor-pointer">Department 1</li>
                                                <li className="px-4 py-1 hover:bg-blue-100 cursor-pointer">Department 2</li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceFilter;
