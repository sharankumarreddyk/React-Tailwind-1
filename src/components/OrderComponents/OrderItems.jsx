import React from "react";

const OrderItem = ({
  imageSrc,
  productName,
  productDetails,
  status,
  paymentMethod,
  price,
  invoiceLink,
  onClick,
}) => {
  return (
    <>
      <img
        src={imageSrc}
        alt={productName}
        className="w-50 h-30 md:w-35 md:hidden object-cover  "
      />

      <div
        className="order-item flex items-center p-4 border-b border-gray-300  cursor-pointer"
        onClick={onClick}
      >
        {/* Image Section */}
        <img
          src={imageSrc}
          alt={productName}
          className="w-24 h-20 object-cover sm:block hidden"
        />
        {/* Product Details Section */}
        <div className="order-details flex-grow ml-4 sm:min-h-[125px]">
          <h4 className="text-[15px] font-bold text-blue-950 md:text-2xl">
            {productName}
          </h4>
          <h6 className="text-sm md:text-[15px] font-bold text-blue-950 mb-2">
            {productDetails}
          </h6>
          <span className="bg-green-500 text-white px-2 py-1 rounded text-xs md:text-xs">
            {status}
          </span>
          <p className="text-xs md:text-sm mt-1 text-blue-950">
            Payment: {paymentMethod}
          </p>
        </div>

        {/* Price Section */}
        <div className="order-summary text-right">
          <p className="text-xs md:text-xl text-blue-950 font-semibold">
            Full Price
          </p>
          <h3 className="text-xl md:text-2xl text-blue-950 font-bold">
            {price}
          </h3>
          <a href={invoiceLink} className="text-xs md:text-xs font-semibold">
            Download Invoice
          </a>
        </div>
      </div>
    </>
  );
};

export default OrderItem;
