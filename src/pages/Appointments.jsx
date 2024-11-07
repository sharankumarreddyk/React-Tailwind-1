import { useState } from "react";
import ServiceFilter from "../components/Appointment/ServiceFilter";
import ServiceBox from "../components/Appointment/ServiceBox";
import Slider from "../components/Appointment/Slider";
import i1 from "../assets/i1.png"; // Adjust path as needed

const ServiceManagement = () => {
  const [activeService, setActiveService] = useState("active"); // Default to active services
  const [selectedService, setSelectedService] = useState({
    name: "Product Pump",
    image: i1, // Default image for the selected service
  });

  const handleTabChange = (tab) => {
    setActiveService(tab);
  };

  const handleSelectService = (image, name, pressure) => {
    setSelectedService({ name, image, pressure });
  };

  return (
    <>
      
      <div className="w-full bg-white">
        {/* Service Filter */}
        <ServiceFilter onTabChange={handleTabChange} />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4  ">
          {/* Service Box - taking 2 columns */}
          <div className="col-span-5 xl:w-[547px] pr-1">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <ServiceBox activeService={activeService} onSelectService={handleSelectService} />
            </div>
          </div>

          {/* Slider Component - taking 3 columns */}
          <div className="col-span-7 ">
            <Slider selectedService={selectedService} />
          </div>
        </div>
      </div>
      
    </>
  );
};

export default ServiceManagement;
