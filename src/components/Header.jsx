import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { CgFormatSlash } from "react-icons/cg";
import { Link } from "react-router-dom";
import LogoNav from "../assets/images/altanotebook.png";

const Header = () => {
  return (
    <div>
      <nav class="flex items-center justify-between flex-wrap bg-gray-700 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <img src={LogoNav} alt="logo" class="h-8" />
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow">
            <Link
              to="/"
              class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 font-semibold text-xl tracking-tight"
            >
              Alta Notebook
            </Link>
          </div>
          <div className="px-2">
            <FaShoppingCart className="inline-block text-orange-500" />
            <Link
              to="/cart"
              class="inline-block text-sm px-4 py-2 leading-none rounded text-white  hover:text-orange-500 mt-4 lg:mt-0"
            >
              Cart
            </Link>
          </div>
          <div className="px-2">
            <FaUserAlt className="inline-block text-blue-400" />
            <Link
              to="/login"
              class="inline-block text-sm px-4 py-2 leading-none  rounded text-white hover:text-orange-400 mt-4 lg:mt-0"
            >
              Login
            </Link>
            <CgFormatSlash className="inline-block text-white" />
            <Link
              to="/register"
              class="inline-block text-sm px-4 py-2 leading-none  rounded text-white hover:text-orange-400 mt-4 lg:mt-0"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
