import React from "react";

const ProductDetails = ({
  productName,
  fullPrice,
  price,
  pressure,
  description,
}) => {
  return (
    <div className="container mt-5">
      <div className="flex flex-row md:flex-row justify-between items-center">
        <h1 className="text-2xl md:text-4xl text-blue-950 font-bold mt-12">
          {productName}
        </h1>
        <h6 className="md:text-base text-blue-950 font-semibold mt-12 md:text-end">
          Full Price
        </h6>
      </div>
      <h2 className="text-2xl md:text-3xl text-blue-950 font-bold mt-0 md:text-end">
        {price}
      </h2>
      <h5 className="text-xl text-blue-950 font-bold mt-0">{pressure}</h5>
      <p className="text-gray-600 text-xs mt-4 md:w-3/5">{description}</p>
    </div>
  );
};

export default ProductDetails;
