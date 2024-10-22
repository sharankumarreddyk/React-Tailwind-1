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
        className="w-50 h-30 md:w-35  md:hidden object-cover  "
      />

      <div
        className="order-item flex items-center p-4 border-b border-gray-300  cursor-pointer"
        onClick={onClick}
      >
        {/* Image Section */}
        <img
          src={imageSrc}
          alt={productName}
          className="w-[140px] h-[120px] object-fill sm:block hidden"
        />
        {/* Product Details Section */}
        <div className="order-details flex-grow ml-4 lg:ml-2 sm:min-h-[125px] text-nowrap">
          <h4 className="text-[15px] lg:text-[28px] font-bold text-blue-950 md:text-2xl">
            {productName}
          </h4>
          <h6 className="text-sm md:text-[16px] font-bold text-blue-950 mx-1">
            {productDetails}
          </h6>
          <span className="bg-green-500 text-white px-2 py-1 rounded text-xs md:text-xs">
            {status}
          </span>
          <p className="text-xs lg:text-[10px] md:text-sm mt-1 text-blue-950">
            Payment:
          </p>
          <p className="text-xs lg:text-[20px] lg:font-thin md:text-sm  text-blue-950">
            Card
          </p>
        </div>

        {/* Price Section */}
        <div className="order-summary text-right text-nowrap">
          <p className="text-xs lg:text-[10px] md:text-xl lg:mt-10 text-blue-950 font-semibold">
            Full Price
          </p>
          <h3 className="text-xl md:text-2xl lg:text-[28px] text-blue-950 font-bold">
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
