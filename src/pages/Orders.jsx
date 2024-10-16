import Buttons from "../components/OrderComponents/buttons";
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

const Orders = () => {
  return (
    <>
      <div className="bg-white">
        <Header />
        <div className=" mx-auto px-4 sm:px-6 mb-10 ">
          <div className="grid grid-cols-12 sm:mt-8 mt-2">
            <div className="col-span-12 sm:col-span-6 flex flex-row sm:flex-row">
              <Buttons name="Active Orders" />
              <Buttons name="Delivered Orders" />
              <Buttons name="Cancelled Orders" />
            </div>
            <div className="col-span-12 sm:col-span-6 space-x-2 md:space-x-4 flex flex-row  sm:flex-row sm:justify-end text-blue-950 mt-2 sm:mt-0">
              <Dropdown
                buttonText="Date Filter"
                options={["January 1, 2023", "January 2, 2023"]}
                className="text-start"
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
            <div className="col-span-12 lg:col-span-4 sm:px-8 shadow-xl ">
              <OrderItem
                imageSrc={i1}
                productName="Product Pump"
                productDetails="Pressure 300 Pa"
                status="Shipped"
                paymentMethod="Card"
                price="200 000 Kr"
                invoiceLink="#"
              />
              <OrderItem
                imageSrc={i2}
                productName="Exhaust"
                productDetails="Pressure 300 Pa"
                status="Delivered"
                paymentMethod="Card"
                price="197 670 Kr"
                invoiceLink="#"
              />
              <OrderItem
                imageSrc={i1}
                productName="Blade"
                productDetails="Pressure 300 Pa"
                status="Delivered"
                paymentMethod="Card"
                price="8 967 Kr"
                invoiceLink="#"
              />
            </div>

            <div className="container px-4 sm:px-8 col-span-12 lg:col-span-8 w-full min-h-[200px]">
              <ProgressBar steps={steps} />

              <div className="mt-5">
                <ImageSlider images={images} />
              </div>

              <div className="mt-5 mb-5">
                <ProductDetails
                  productName="Product Pump"
                  fullPrice="Full Price"
                  price="200 000 Kr"
                  pressure="Pressure 300 Pa"
                  description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                />
              </div>
              <div className="Product-Description">
                <Buttons name="Description" />
                <Buttons name="Specification" />
                <Buttons name="Technical Information" />
                <ParameterList />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Orders;
