import { useState } from "react";

const Button = ({ name }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <button
      className={`px-3 m-1 md:text-xs md:px-1 md:space-x-0 lg:text-[15px] lg:px-5 lg:py-3 py-2 font-bold rounded text-sm border ${
        clicked
          ? "bg-blue-950 text-white border-blue-950"
          : "bg-white text-blue-950 border-blue-950"
      }`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default Button;
