import React from "react";
import Appointcard from "./Appointcard";

const HomeAppointments = () => {
  return (
    <>
      {/* Visible only on small screens */}
      <div className="p-6 sm:hidden ">
        <h2 className="text-2xl font-bold mb-4">Appointments</h2>
        <div className="bg-gray-100 md:p-6 rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 gap-6 p-4">
            {/* Appointment 1 */}
            <div className="flex justify-center">
              <Appointcard Product={"Venturi Dryer"} Name={"John Doe"} />
            </div>
            {/* Appointment 2 */}
            <div className="flex justify-center">
              <Appointcard Product={"Double Belt"} Name={"John Doe"} />
            </div>
            {/* Appointment 3 */}
            <div className="flex justify-center">
              <Appointcard Product={"Supercooling system"} Name={"John Doe"} />
            </div>
          </div>
        </div>
      </div>

      {/* Visible only on medium and larger screens */}
      <div className="p-6 hidden lg:px-12 sm:block">
        <h2 className="text-2xl font-bold lg:pl-2 mb-4">Appointments</h2>
        <div className="bg-gray-100 sm:p-6 rounded-lg shadow-lg overflow-x-auto">
          <div className="min-w-[1200px] grid sm:grid-cols-3 gap-3 md:gap-16 p-0">
            {/* Appointment 1 */}
            <div className="flex justify-center">
              <Appointcard Product={"Venturi Dryer"} Name={"John Doe"} />
            </div>
            {/* Appointment 2 */}
            <div className="flex justify-center">
              <Appointcard Product={"Double Belt"} Name={"John Doe"} />
            </div>
            {/* Appointment 3 */}
            <div className="flex justify-center">
              <Appointcard Product={"Supercooling system"} Name={"John Doe"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAppointments;
