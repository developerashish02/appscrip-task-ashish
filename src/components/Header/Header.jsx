"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaShoppingCart,
  FaTools,
  FaGem,
  FaMale,
  FaFemale,
} from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((store) => store.cart.cart);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <title>header</title>
      <meta name="description" content="Your page description here." />

      <header className="shadow-lg sticky z-50 top-0 bg-white dark:bg-gray-800 transition-all duration-300">
        <nav className="px-4 lg:px-6 py-3 relative">
          <div className="flex items-center justify-between mx-auto max-w-screen-xl">
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-500 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 transition-transform duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-6 h-6 transform ${isMenuOpen ? "rotate-90" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            <Link to="/" className="flex items-center">
              <span className="text-2xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 dark:from-green-400 dark:to-yellow-500">
                Appscrip
              </span>
            </Link>

            <div className="hidden lg:flex space-x-6 text-gray-700 dark:text-gray-200 items-center mt-3">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="w-6 h-6 cursor-pointer hover:text-blue-500 dark:hover:text-yellow-400 transition-colors duration-200"
              />
              <FontAwesomeIcon
                icon={faHeart}
                className="w-6 h-6 cursor-pointer hover:text-blue-500 dark:hover:text-yellow-400 transition-colors duration-200"
              />

              <Link
                to="/cart"
                className="text-xl text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-yellow-400 transition-colors duration-200"
              >
                <i className="fa-solid fa-cart-shopping"></i>
                <span>({cartItems?.length})</span>
              </Link>

              <FontAwesomeIcon
                icon={faUser}
                className="w-6 h-6 cursor-pointer hover:text-blue-500 dark:hover:text-yellow-400 transition-colors duration-200"
              />
            </div>
          </div>

          <div
            className={`w-full lg:flex lg:justify-center mt-4 lg:mt-0 transition-all duration-300 ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="mobile-menu"
          >
            <ul className="flex flex-col font-semibold space-y-4 lg:space-y-0 lg:flex-row lg:space-x-8 text-center uppercase text-gray-800 dark:text-gray-200">
              <li className="font-bold flex items-center">
                <Link
                  to="/"
                  className="flex items-center block py-2 px-4 duration-200 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-blue-500 dark:hover:text-yellow-400 rounded-md transition-colors duration-200"
                >
                  <FaShoppingCart className="mr-2 text-lg" /> Shop
                </Link>
              </li>
              <li className="font-bold flex items-center">
                <Link
                  to="/electronics"
                  className="flex items-center block py-2 px-4 duration-200 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-blue-500 dark:hover:text-yellow-400 rounded-md transition-colors duration-200"
                >
                  <FaTools className="mr-2 text-lg" /> Skills
                </Link>
              </li>
              <li className="font-bold flex items-center">
                <Link
                  to="/jewelry"
                  className="flex items-center block py-2 px-4 duration-200 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-blue-500 dark:hover:text-yellow-400 rounded-md transition-colors duration-200"
                >
                  <FaGem className="mr-2 text-lg" /> Jewelry
                </Link>
              </li>
              <li className="font-bold flex items-center">
                <Link
                  to="/men"
                  className="flex items-center block py-2 px-4 duration-200 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-blue-500 dark:hover:text-yellow-400 rounded-md transition-colors duration-200"
                >
                  <FaMale className="mr-2 text-lg" /> Men's Clothing
                </Link>
              </li>
              <li className="font-bold flex items-center">
                <Link
                  to="/women"
                  className="flex items-center block py-2 px-4 duration-200 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-blue-500 dark:hover:text-yellow-400 rounded-md transition-colors duration-200"
                >
                  <FaFemale className="mr-2 text-lg" /> Women's Clothing
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
