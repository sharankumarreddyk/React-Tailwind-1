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
        



          <button className="focus:outline-none ring-white focus:ring-2 p-2 rounded-lg mr-3 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" viewBox="0 0 30 35" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M9.04505 2.62624C9.51054 1.55792 10.5147 0.815521 11.6751 0.815521H18.3249C19.4853 0.815521 20.4878 1.55792 20.955 2.62624C22.0904 2.6371 22.9765 2.69324 23.7678 3.03003C24.7125 3.4325 25.5341 4.11648 26.1385 5.00372C26.7487 5.89821 27.0363 7.0444 27.4286 8.62153L28.6622 13.5503L29.1276 15.0731L29.1675 15.1274C30.6654 17.217 29.9522 20.3242 28.5258 26.5368C27.6181 30.4896 27.1659 32.4651 25.8127 33.6167C24.4594 34.7665 22.5892 34.7665 18.8486 34.7665H11.1514C7.41084 34.7665 5.54057 34.7665 4.18732 33.6167C2.83407 32.4651 2.38022 30.4896 1.47417 26.5368C0.0477757 20.3242 -0.665423 17.217 0.83246 15.1274L0.872359 15.0731L1.33785 13.5503L2.5714 8.62153C2.9654 7.0444 3.25301 5.8964 3.86147 5.0019C4.46616 4.11534 5.2877 3.43201 6.23215 3.03003C7.02349 2.69324 7.90792 2.63529 9.04505 2.62624ZM9.04837 5.34775C7.94782 5.36043 7.5056 5.40569 7.13986 5.56142C6.63109 5.77812 6.18861 6.14648 5.86308 6.62431C5.57049 7.05345 5.39759 7.6528 4.91548 9.58483L3.96787 13.3674C5.66359 13.0379 7.98107 13.0379 11.1497 13.0379H18.8486C22.0189 13.0379 24.3348 13.0379 26.0305 13.3638L25.0845 9.58121C24.6024 7.64918 24.4295 7.04983 24.1369 6.62069C23.8114 6.14285 23.3689 5.7745 22.8601 5.5578C22.4944 5.40207 22.0522 5.3568 20.9516 5.34413C20.7156 5.88526 20.3435 6.34242 19.8786 6.66258C19.4137 6.98275 18.875 7.15281 18.3249 7.15304H11.6751C11.1252 7.15297 10.5866 6.98318 10.1217 6.66335C9.65681 6.34351 9.28466 5.88854 9.04837 5.34775Z" fill="white"/>
          </svg> 
          </button>
          <button className="focus:outline-none ring-white focus:ring-2 p-2 rounded-lg mr-3">
            <IoMdSearch className="text-white  md:text-2xl lg:text-4xl" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
