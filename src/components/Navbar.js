import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-xl h-20">
      <div className="container mx-auto px-6 py-3 font-bold">
        <div className="flex items-center justify-between">
          <div className="flex ml-14 mt-3">
          <span className='text-4xl text-orange-400 my-auto'><GiShoppingBag /></span>
            <a className="text-orange-400  text-3xl font-bold hover:text-gray-700" href="#">Shopee.</a>
            <ul className="ml-10 flex  items-center space-x-4">
              <li><a className="text-gray-800 hover:text-orange-400 text-lg" href="#">EVERYTHING</a></li>
              <li><a className="text-gray-800 hover:text-orange-400 text-lg" href="#">MENS</a></li>
              <li><a className="text-gray-800 hover:text-orange-400 text-lg" href="#">WOMENS</a></li>
              <li><a className="text-gray-800 hover:text-orange-400 text-lg" href="#">ACCESSORIES</a></li>
            </ul>
          </div>
          <div className="flex items-center mt-3 mr-14">
            <ul className="ml-10 flex items-center space-x-4">
              <li><a className="text-gray-800 hover:text-orange-400 text-lg" href="#">ABOUT</a></li>
              <li><a className="text-gray-800 hover:text-orange-400 text-lg" href="#">CONTACT</a></li>
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
