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

      <header className="shadow sticky z-50 top-0 bg-white">
        <nav className="px-4 lg:px-6 py-2.5 relative">
          <div className="flex items-center justify-between mx-auto max-w-screen-xl">
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
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
              <span className="text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 dark:from-green-400 dark:to-yellow-500">
                Appscrip
              </span>
            </Link>

            <div className="hidden lg:flex space-x-4 text-gray-500 items-center">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="w-6 h-6 cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faHeart}
                className="w-6 h-6 cursor-pointer"
              />

              <Link to="/cart" className="text-xl">
                <span className="hover:text-gray-300">
                  <i className="fa-solid fa-cart-shopping"></i>
                </span>
                <span>({cartItems?.length})</span>
              </Link>

              <FontAwesomeIcon
                icon={faUser}
                className="w-6 h-6 cursor-pointer"
              />
            </div>
          </div>

          <div
            className={`w-full lg:flex lg:justify-center mt-4 lg:mt-0 ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="mobile-menu"
          >
            <ul className="flex flex-col font-medium space-y-2 lg:space-y-0 lg:flex-row lg:space-x-8 text-center uppercase">
              <li className="font-bold">
                <Link
                  to="/"
                  className="block py-2 px-4 duration-200 border-b border-gray-100 hover:bg-gray-50 hover:text-orange-700"
                >
                  SHOP
                </Link>
              </li>
              <li className="font-bold">
                <Link
                  to="/electronics"
                  className="block py-2 px-4 duration-200 border-b border-gray-100 hover:bg-gray-50 hover:text-orange-700"
                >
                  SKILLS
                </Link>
              </li>
              <li className="font-bold">
                <Link
                  to="/jewelry"
                  className="block py-2 px-4 duration-200 border-b border-gray-100 hover:bg-gray-50 hover:text-orange-700"
                >
                  Jewelry
                </Link>
              </li>
              <li className="font-bold">
                <Link
                  to="/men"
                  className="block py-2 px-4 duration-200 border-b border-gray-100 hover:bg-gray-50 hover:text-orange-700"
                >
                  Men's Clothing
                </Link>
              </li>
              <li className="font-bold">
                <Link
                  to="/women"
                  className="block py-2 px-4 duration-200 border-b border-gray-100 hover:bg-gray-50 hover:text-orange-700"
                >
                  Women's Clothing
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
