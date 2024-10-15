import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { IoMdSearch } from "react-icons/io";
import { MdLocalGroceryStore } from "react-icons/md";

const Header = () => {
  const [nav, setNav] = useState(false); // State to manage the navbar visibility

  // Toggle the navbar
  const handleNav = () => {
    setNav(!nav);
  };

  const currentPath = window.location.pathname; // Get the current path to highlight active link

  const navItems = [
    { id: 1, text: 'Home', href: '/' },
    { id: 2, text: 'Machines', href: '/Machines' },
    { id: 3, text: 'Orders', href: '/Orders' },
    { id: 4, text: 'Appointments', href: '/Appointments' },
  ];

  return (
    <header>
      <nav className="md:flex bg-[#0F1C40] justify-end items-center">
        <div className="max-w-screen-xl md:h-20 lg:h-28 flex flex-wrap items-center justify-end  p-4">
          {/* Mobile Menu Icon */}
          <div className="flex justify-center items-center  md:hidden">
            <button className="focus:outline-none focus:ring-2 p-2 rounded-lg">
              <MdLocalGroceryStore className="text-white  text-2xl" />
            </button>
            <button className="focus:outline-none focus:ring-2 p-2 rounded-lg">
              <IoMdSearch className="text-white  text-2xl " />
            </button>
            <button
              onClick={handleNav}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center font-extrabold  text-white rounded-lg  focus:outline-none focus:ring-2       "
              aria-expanded={nav}
            >
              {nav ? (
                <AiOutlineClose className="w-5 h-5 " />
              ) : (
                <AiOutlineMenu className="w-5 h-5" />
              )}
              <span className="sr-only">Open main menu</span>
            </button>
          </div>

          {/* Navbar Links */}
          <div
            className={`items-center justify-between ${
              nav ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-search"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 lg:text-3xl  sm:text-xl border text-gray-400 font-thin rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`block py-2 px-3  rounded hover:text-white hover:underline hover:underline-offset-8 hover:decoration-white ${
                      currentPath === item.href
                        ? "text-white underline underline-offset-8 font-bold"
                        : ""
                    }`}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mr-4  hidden md:flex">
          <button className="focus:outline-none focus:ring-2 p-2 rounded-lg mr-3 ">
            <MdLocalGroceryStore className="text-white  md:text-2xl lg:text-4xl" />
          </button>
          <button className="focus:outline-none focus:ring-2 p-2 rounded-lg mr-3">
            <IoMdSearch className="text-white  md:text-2xl lg:text-4xl" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
