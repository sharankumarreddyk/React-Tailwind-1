
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import i1 from "../assets/i1.png";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product Pump", price: 299.99, quantity: 1, image: i1 },
    { id: 2, name: "Machine X2", price: 499.99, quantity: 2, image: i1 },
  ]);

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = newQuantity;
    setCartItems(updatedItems);
  };

  const removeItem = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow container mx-auto px-4 py-8 mb-24 md:mb-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
          <button
            onClick={() => navigate(-1)}
            className="text-[#0F1C40] hover:underline"
          >
            Back
          </button>
        </div>

        {/* Mobile Cart */}

        {/* Desktop Cart */}
        <div className="block bg-white rounded-lg shadow-lg p-6">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            <>
              {cartItems.map((item, index) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b py-4 last:border-b-0"
                >
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-contain"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <div className="flex items-center mt-2">
                        <button
                          className="text-gray-500 hover:text-[#0F1C40] h-8 w-8 border"
                          onClick={() =>
                            updateQuantity(index, item.quantity - 1)
                          }
                        >
                          −
                        </button>
                        <span className="mx-4">{item.quantity}</span>
                        <button
                          className="text-gray-500 hover:text-[#0F1C40] h-8 w-8 border"
                          onClick={() =>
                            updateQuantity(index, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-bold">${item.price}</p>
                    <button
                      onClick={() => removeItem(index)}
                      className="text-red-500 hover:text-red-700 text-sm mt-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              <div className="mt-6 border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">Total:</span>
                  <span className="text-2xl font-bold text-[#0F1C40]">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <button className="w-full mt-6 bg-[#0F1C40] text-white py-3 rounded-lg hover:bg-opacity-90">
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;