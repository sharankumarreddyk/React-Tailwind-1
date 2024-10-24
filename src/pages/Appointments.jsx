import { useState } from "react";
import ServiceFilter from "../components/Appointment/ServiceFilter";
import ServiceBox from "../components/Appointment/ServiceBox";
import Slider from "../components/Appointment/Slider";
import Footer from "../components/Footer";
import Header from "../components/Header";
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
      <Header />
      <div className="w-full ml-1 p-2 m-0 bg-white">
        {/* Service Filter */}
        <ServiceFilter onTabChange={handleTabChange} />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6 lg:ml-8 lg:mr-12">
          {/* Service Box - taking 2 columns */}
          <div className="col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <ServiceBox activeService={activeService} onSelectService={handleSelectService} />
            </div>
          </div>

          {/* Slider Component - taking 3 columns */}
          <div className="col-span-3">
            <Slider selectedService={selectedService} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceManagement;
