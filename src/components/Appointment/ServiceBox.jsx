import { useState } from "react";
import i1 from "../../assets/i1.png";
import i2 from "../../assets/i2.png";

const ServiceBox = ({ activeService }) => {
  const [services, setServices] = useState({
    active: [
      {
        name: "Product Pump",
        selected: true,
        pressure: "Pressure 300 Pa",
        appointment: "Feb 28, 2024",
        time: "10:30 hrs",
        person: "John Doe",
        image: i1,
      },
      {
        name: "Exhaust",
        selected: false,
        pressure: "Pressure 300 Pa",
        appointment: "Feb 10, 2024",
        time: "13:30 hrs",
        person: "James Bond",
        image: i2,
      },
      {
        name: "Blade",
        selected: false,
        pressure: "Size 300 m",
        appointment: "Feb 10, 2024",
        time: "13:30 hrs",
        person: "Brad Pitt",
        image: i2,
      },
    ],
    delivered: [
      {
        name: "Product Pump",
        selected: true,
        pressure: "Pressure 300 Pa",
        appointment: "Feb 28, 2024",
        time: "10:30 hrs",
        person: "John Doe",
        image:  i1 ,
      },
      {
        name: "Blade",
        selected: false,
        pressure: "Size 300 m",
        appointment: "Feb 10, 2024",
        time: "13:30 hrs",
        person: "Brad Pitt",
        image:  i2 ,
      },
    ],
    canceled: [
      {
        name: "Product Pump",
        selected: true,
        pressure: "Pressure 300 Pa",
        appointment: "Feb 28, 2024",
        time: "10:30 hrs",
        person: "John Doe",
        image:  i2 ,
      },
    ],
  });

  const handleSelectService = (index) => {
    setServices((prevServices) => {
      const updatedServices = { ...prevServices };
      updatedServices.active.forEach((service, i) => {
        service.selected = i === index;
      });
      return updatedServices;
    });
  };

  return (
    <div className="flex flex-col w-full bg-white rounded-lg overflow-auto lg:min-h-[1220px] ">
      <div className="flex-grow mt-0  p-1">
        {services[activeService].map((service, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 mt-4 md:grid-cols-8 border-b cursor-pointer ${
              service.selected ? "bg-white" : ""
            }`}
            onClick={() => handleSelectService(index)}
          >
            {/* Image Section */}
            <div className="col-span-3 flex justify-center items-center mb-4 md:mb-0">
              <img
                src={service.image}
                alt={service.name}
                className=" w-full sm:mx-auto h-auto md:h-32 md:w-64"
              />
            </div>

            {/* Content Section */}
            <div className="col-span-5 mt-2 flex flex-col md:pl-3">
              <div className="flex items-center justify-between flex-wrap">
                <h3 className="text-2xl font-bold text-[#0F1C40]">
                  {service.name}
                </h3>
                {service.selected && (
                  <span className="text-sm text-[#0F1C40] font-semibold">
                    Selected
                  </span>
                )}
              </div>
              <p className="text-gray-900 font-bold text-md">
                {service.pressure}
              </p>

              {/* Appointment and Time for desktop and mobile view */}
              <div className="mt-2 grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-9 md:gap-1">
                <div className="flex flex-col col-span-5 mb-1">
                  <p className="text-md text-[#0F1C40] font-bold mr-3">
                    Appointment
                  </p>
                  <p className="text-2xl text-[#0F1C40] font-extralight">
                    {service.appointment}
                  </p>
                </div>
                <div className="flex flex-col col-span-4 mb-2">
                  <p className="text-md text-[#0F1C40] font-bold">Time</p>
                  <p className="text-2xl text-[#0F1C40] font-extralight ">
                    {service.time}
                  </p>
                </div>
              </div>

              {/* Location Section */}
              <div className="mt-2 text-xs mb-5 text-blue-950 grid grid-cols-1 gap-2 lg:grid-cols-5 md:items-center">
                {/* Person Information */}
                <div className="flex items-center mb-2 col-span-3 md:mb-0">
                  <div className="bg-[#0F1C40] rounded-full h-6 w-6 mr-2"></div>
                  <span className="text-lg pl-2 ">{service.person}</span>
                </div>

                {/* Location Information */}
                <div className="flex items-center col-span-2 mb-2 md:mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-6 mx-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-lg">Location</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBox;
