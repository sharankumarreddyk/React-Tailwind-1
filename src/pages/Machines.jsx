import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MachineSlider from "../components/MachineComponents/Machineslider";
import MachineImage from "../components/MachineComponents/Machineimage";

function Machines() {
  const [selectedMachineIndex, setSelectedMachineIndex] = useState(0); // Manage selected machine index

  return (
    <div className="bg-white">
      
      <div className="">
      <MachineSlider
        selectedMachineIndex={selectedMachineIndex}
        setSelectedMachineIndex={setSelectedMachineIndex}
      />
      <MachineImage selectedMachineIndex={selectedMachineIndex} />
      </div>
      
    </div>
  );
}

export default Machines;
