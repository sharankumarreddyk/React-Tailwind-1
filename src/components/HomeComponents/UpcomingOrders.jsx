import React from "react";
import img1 from "../../assets/img1.jpg"; // Ensure this path is correct
import OrderStatus from "./OrderStatus";
import Bill from "./Bill";
import ProductDetails from "./ProductDetails";

const UpcomingOrders = () => {
  return (
    <div className=" px-2">
      <h2 className="text-2xl font-bold text-[#0F1C40] mb-4 px-4">
        Upcoming Orders
      </h2>
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg m-2">
        {/* First Row: 4 divs with different sizes */}
        <div className="grid lg:grid-cols-12 mb-4">
          <div className="col-span-4 grid sm:grid-cols-5 mb-3 lg:mr-2">
            <div className="col-span-2 p-2">
              <img
                src={img1}
                alt="Product Pump"
                className="lg:w-full lg:h-full sm:h-auto md:w-auto object-cover rounded-md border-2 border-blue-950"
              />
            </div>
            <div className="col-span-3">
              <div>
                <ProductDetails Name={"Product Pump"} Status={"Shipped"} />
                <h2 className="font-semibold text-[#0F1C40]">
                  Pressure 300 Pa
                </h2>
                <p className="text-xs text-[#0F1C40] mt-2">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-7 overflow-x-auto">
            <OrderStatus bgColor={"bg-[#008E28]"} />
          </div>

          <div className="col-span-1 mt-2 lg:mt-0">
            <Bill paymentmethod={"Card"} price={"200,000"} />
          </div>
        </div>

        <hr className="border-2 border-gray-300 mb-4"></hr>

        <div className="grid lg:grid-cols-12 mb-4">
          <div className="col-span-4 grid sm:grid-cols-5 mb-3 lg:mr-2">
            <div className="col-span-2 p-2">
              <img
                src={img1}
                alt="Product Pump"
                className="lg:w-full lg:h-full sm:h-auto md:w-auto object-cover rounded-md border-2 border-blue-950"
              />
            </div>
            <div className="col-span-3">
              <div>
                <ProductDetails Name={"Exhaust"} Status={"Shipping Booked"} />
                <h2 className="font-semibold text-[#0F1C40]">
                  Pressure 300 Pa
                </h2>
                <p className="text-xs text-[#0F1C40] mt-2">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-7 overflow-x-auto">
            {/* Progress Bar Container */}

            <OrderStatus bgColor={"bg-gray-300"} />

            {/* Additional steps omitted for brevity */}
          </div>

          <div className="col-span-1 mt-2 lg:mt-0">
            <Bill paymentmethod={"Card"} price={"136 898"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingOrders;