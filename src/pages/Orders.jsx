import { useState } from "react";
import Button from "../components/OrderComponents/buttons";
import Dropdown from "../components/OrderComponents/Dropdown";
import OrderItem from "../components/OrderComponents/OrderItems";
import ProgressBar from "../components/OrderComponents/ProgressBar";
import ImageSlider from "../components/OrderComponents/ImageSlider";
import ProductDetails from "../components/OrderComponents/ProductDetails";
import ParameterList from "../components/OrderComponents/ParametersList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import i1 from "../assets/i1.png";
import i2 from "../assets/i2.png";
import Specs_button from "../components/OrderComponents/specs_buttons";

const images = [
  { src: i1, alt: "Image 1" },
  { src: i2, alt: "Image 2" },
  { src: i1, alt: "Image 3" },
  { src: i2, alt: "Image 4" },
  { src: i1, alt: "Image 5" },
  { src: i2, alt: "Image 6" },
];

const steps = [
  {
    title: "Order Placed",
    date: "Feb 12, 2024",
    details: ["Order processed", "Order status updated - 1"],
    isActive: true,
  },
  {
    title: "Out from Workshop",
    date: "Feb 14, 2024",
    details: ["Order processed", "Order status updated"],
    isActive: true,
  },
  {
    title: "Shipping Started",
    date: "Feb 15, 2024",
    details: ["Order processed", "Order status updated"],
    isActive: true,
  },
  {
    title: "Shipping Booked",
    date: "Feb 16, 2024",
    details: ["Order processed", "Order status updated"],
    isActive: true,
  },
  {
    title: "Shipped",
    date: "Feb 18, 2024",
    details: ["Order processed", "Order status updated"],
    isActive: true,
  },
  {
    title: "Delivered",
    date: "Feb 20, 2024",
    details: ["Order processed", "Order status updated - 1"],
    isActive: false,
  },
];

const orders = [
  {
    imageSrc: i1,
    productName: "Product Pump",
    productDetails: "Pressure 300 Pa",
    status: "Active Orders",
    paymentMethod: "Card",
    price: "200 000 Kr",
    invoiceLink: "#",
    images: [
      { src: i1, alt: "Product Pump Image 1" },
      { src: i2, alt: "Product Pump Image 2" },
    ],
  },
  {
    imageSrc: i2,
    productName: "Exhaust",
    productDetails: "Pressure 300 Pa",
    status: "Delivered Orders",
    paymentMethod: "Card",
    price: "197 670 Kr",
    invoiceLink: "#",
    images: [
      { src: i2, alt: "Exhaust Image 1" },
      { src: i1, alt: "Exhaust Image 2" },
    ],
  },
  {
    imageSrc: i1,
    productName: "Blade",
    productDetails: "Pressure 300 Pa",
    status: "Cancelled Orders",
    paymentMethod: "Card",
    price: "8 967 Kr",
    invoiceLink: "#",
    images: [
      { src: i1, alt: "Blade Image 1" },
      { src: i2, alt: "Blade Image 2" },
    ],
  },
];

const Orders = () => {
  const [activeButton, setActiveButton] = useState("Active Orders");
  const [activeSpec, setActiveSpec] = useState("Description"); // New state for spec buttons
  const [selectedOrder, setSelectedOrder] = useState(orders[0]); // State for selected order
  const [selectedImages, setSelectedImages] = useState(orders[0].images); // State for selected images

  const handleButtonClick = (name) => {
    setActiveButton(name);
  };

  const handleSpecButtonClick = (name) => {
    setActiveSpec(name); // Correctly update activeSpec state
  };

  const handleOrderItemClick = (order) => {
    setSelectedOrder(order);
    setSelectedImages(order.images); // Update selected images
  };

  const filteredOrders =
    activeButton === "Active Orders"
      ? orders
      : orders.filter((order) => order.status === activeButton);

  return (
    <>
      <div className="bg-white">
       
        <div className="mx-auto  mb-10">
          <div className="grid grid-cols-12 sm:mt-8 mt-2">
            <div
              id="Leftbutton"
              className="col-span-12 sm:col-span-6 flex flex-row sm:flex-row"
            >
              <Button
                name="Active Orders"
                isActive={activeButton === "Active Orders"}
                onClick={() => handleButtonClick("Active Orders")}
              />
              <Button
                name="Delivered Orders"
                isActive={activeButton === "Delivered Orders"}
                onClick={() => handleButtonClick("Delivered Orders")}
              />
              <Button
                name="Cancelled Orders"
                isActive={activeButton === "Cancelled Orders"}
                onClick={() => handleButtonClick("Cancelled Orders")}
              />
            </div>
            <div className="col-span-12 sm:col-span-6 space-x-2 md:space-x-4 flex flex-row sm:flex-row sm:justify-end text-blue-950 mt-2 sm:mt-0">
              <Dropdown
                buttonText="Date Filter"
                options={["January 1, 2023", "January 2, 2023"]}
                isDateDropdown={true}
              />
              <Dropdown
                buttonText="Machine Filter"
                options={["Product Pump", "Machine 2"]}
              />
              <Dropdown
                buttonText="Department Name"
                options={["Department 1", "Department 2"]}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 sm:mt-5 mt-10">
            <div className="col-span-12 lg:col-span-5 lg:w-[547px] sm:px-8 shadow-xl">
              {filteredOrders.map((order, index) => (
                <OrderItem
                  key={index}
                  imageSrc={order.imageSrc}
                  productName={order.productName}
                  productDetails={order.productDetails}
                  status={order.status}
                  paymentMethod={order.paymentMethod}
                  price={order.price}
                  invoiceLink={order.invoiceLink}
                  onClick={() => handleOrderItemClick(order)} // Pass click handler
                  selected={selectedOrder === order} // Pass selected state
                />
              ))}
            </div>

            <div className="container px-4 pl-8 col-span-12 lg:col-span-7 w-full min-h-[200px]">
              <ProgressBar steps={steps} />

              <div className="mt-5">
                <ImageSlider images={selectedImages} />{" "}
                {/* Use selected images */}
              </div>

              <div className="mt-5 mb-5">
                <ProductDetails
                  productName={selectedOrder.productName}
                  fullPrice="Full Price"
                  price={selectedOrder.price}
                  pressure={selectedOrder.productDetails}
                  description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                />
              </div>
              <div className="Product-Description">
                <Specs_button
                  name="Description"
                  isActive={activeSpec === "Description"} // Update active state check
                  onClick={() => handleSpecButtonClick("Description")} // Update click handler
                />
                <Specs_button
                  name="Specification"
                  isActive={activeSpec === "Specification"} // Update active state check
                  onClick={() => handleSpecButtonClick("Specification")} // Update click handler
                />
                <Specs_button
                  name="Technical Information"
                  isActive={activeSpec === "Technical Information"} // Update active state check
                  onClick={() => handleSpecButtonClick("Technical Information")} // Update click handler
                />
                {activeSpec && <ParameterList activeButton={activeSpec} />}{" "}
                {/* Update to pass the correct state */}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Orders;
