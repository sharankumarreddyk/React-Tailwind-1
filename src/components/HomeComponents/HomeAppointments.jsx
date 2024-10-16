import React from "react";
import Appointcard from "./Appointcard";

const HomeAppointments = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold sm:px-2 mb-4">Appointments</h2>
      <div className="bg-gray-100 md:p-6  rounded-lg shadow-lg sm:overflow-x-auto xl:overflow-hidden overflow-hidden md:scale-100 scale-95 ">
        <div className="sm:min-w-[1200px] w-full  grid sm:grid-cols-3 justify-around md:gap-16 gap-3 md:p-19 p-0 ">
          {/* Appointment 1 */}

          <Appointcard Product={"Venturi Dryer"} Name={"John Doe"} />

          {/* Appointment 2 */}

          <Appointcard Product={"Double Belt"} Name={"John Doe"} />

          {/* Appointment 3 */}

          <Appointcard Product={"Supercooling system"} Name={"John Doe"} />
        </div>
      </div>
    </div>
  );
};

export default HomeAppointments;
