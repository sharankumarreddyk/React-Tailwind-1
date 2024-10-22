import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MachineSlider from "../components/MachineComponents/Machineslider";


import MachineImage from "../components/MachineComponents/Machineimage";

function Machines() {
  return (
    <div className="bg-white">
      <Header />
      <MachineSlider />
      <MachineImage />
      <Footer />
    </div>
  );
}

export default Machines;
