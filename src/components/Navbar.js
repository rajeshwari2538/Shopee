// Navbar.js

import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Left side */}
          <div className="flex">
            <a className="text-gray-800 text-xl font-bold hover:text-gray-700" href="#">Shopee..</a>
            <ul className="ml-10 flex items-center space-x-4">
              <li><a className="text-gray-800 hover:text-gray-600" href="#">Everything</a></li>
              <li><a className="text-gray-800 hover:text-gray-600" href="#">Mens</a></li>
              <li><a className="text-gray-800 hover:text-gray-600" href="#">Womens</a></li>
              <li><a className="text-gray-800 hover:text-gray-600" href="#">Accessories</a></li>
            </ul>
          </div>

          {/* Right side */}
          <div className="flex items-center">
            <ul className="ml-10 flex items-center space-x-4">
              <li><a className="text-gray-800 hover:text-gray-600" href="#">About</a></li>
              <li><a className="text-gray-800 hover:text-gray-600" href="#">Contact</a></li>
            </ul>
            <div className="ml-4">
              <a href="#" className="text-gray-800 hover:text-gray-600">
                 <FaShoppingCart />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
