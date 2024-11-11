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
  selected,
}) => {
  return (
    <article className="order-item-container">
      {/* Mobile Image */}
      <img
        src={imageSrc}
        alt={`Product: ${productName}`}
        className="w-50 h-30 md:w-35 xl:hidden object-cover"
      />

      <div
        className="order-item relative xl:flex items-center p-4 border-b border-gray-300 cursor-pointer hover:bg-gray-50"
        onClick={onClick}
        role="button"
        tabIndex={0}
      >
        {/* Desktop Image */}
        <img
          src={imageSrc}
          alt={`Product: ${productName}`}
          className="hidden xl:block w-[140px] h-[120px] object-fill"
        />

        {/* Product Details */}
        <div className="order-details space-y-2 flex-grow ml-4 mt-4 xl:mt-0 sm:min-h-[125px] text-nowrap">
          <h4 className="text-[15px] lg:text-[28px] xl:text-[28px]  font-bold text-blue-950 md:text-2xl">
            {productName}
          </h4>
          <h6 className="text-sm md:text-[16px] font-bold text-blue-950 mx-1">
            {productDetails}
          </h6>
          <span className="inline-block bg-green-500 text-white px-2 py-1 rounded text-xs md:text-xs">
            {status}
          </span>
          <div className="payment-info">
            <p className="text-xs lg:text-[10px] md:text-sm mt-1 text-blue-950">
              Payment:
            </p>
            <p className="text-xs lg:text-[20px] lg:font-thin md:text-sm text-blue-950">
              {paymentMethod || "Card"}
            </p>
          </div>
        </div>

        {/* Price and Invoice */}
        <div className="order-summary space-y-2 xl:text-right pl-4 xl:pl-0 text-nowrap">
          <p className="text-xs lg:text-[10px] md:text-xl xl:mt-10 text-blue-950 font-semibold">
            Full Price
          </p>
          <h3 className="text-xl md:text-2xl lg:text-[28px] text-blue-950 font-bold">
            {price}
          </h3>
          <a
            href={invoiceLink}
            className="text-xs md:text-xs font-semibold hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Invoice
          </a>
        </div>

        {/* Selected Indicator */}
        {selected && (
          <div className="absolute top-0 right-0 text-blue-950 text-[15px] font-bold sm:mt-4 mr-3 lg:mr-0">
            Selected
          </div>
        )}
      </div>
    </article>
  );
};

export default OrderItem;