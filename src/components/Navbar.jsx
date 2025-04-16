import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import { useSelector } from "react-redux";

function Navbar() {
  const items = useSelector((state) => state.item.cart);
  const [isOpen, setIsOpen] = useState(false);
  const menu_list = [
    { name: 'Home', link: '/' },
    { name: 'Collections', link: '' },
    { name: 'Products', link: '/products' },
  ];

  return (
    <div>
      <header className="sticky top-0 bg-white shadow-md px-8 py-2">
        <div className={`flex items-center justify-between`}>
          {/* Logo */}
          <h1 className="w-6/12">
            <Link to="/">
              <img src={logo} alt="Logo" width="190px" />
            </Link>
          </h1>

          {/* Navbar Links */}
          <nav
            className={`nav font-semibold text-lg md:block ${isOpen ? "block absolute top-16 right-0 bg-white min-h-[60vh] w-[50vw] z-100 shadow-[-10px_26px_16px_4px_#00000024]": "hidden"}`}
          >
            <ul className={`flex flex-col md:flex-row items-center`}>
              {menu_list.map((menu, index) => (
                <li
                  key={index}
                  className="p-4 border-b-2 border-primary-700 border-opacity-0 hover:border-opacity-100 hover:text-primary-700 duration-200 cursor-pointer"
                >
                  
                  <Link to={menu.link}>{menu.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Cart and Search Icons */}
          <div className="flex w-3/12 justify-end items-center gap-4">
            <Link to="">
              <svg
                className="h-8 p-1 hover:text-primary-700 duration-200 hidden md:flex"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="search"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
                ></path>
              </svg>
            </Link>
            <Link to="/Cart">
              <div className="relative">
                {items.length > 0 && (
                  <span className="absolute top-0 right-0 w-3 h-3 bg-primary-700 rounded-full border-2 border-white"></span>
                )}
                <svg
                  className="h-8 p-1 hover:text-primary-700 duration-200"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="shopping-cart"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                  ></path>
                </svg>
              </div>
            </Link>
            {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-2xl p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "X" : "☰"}
          </button>
          </div>
          
        </div>
      </header>
    </div>
  );
}

export default Navbar;
