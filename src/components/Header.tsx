// components/Header.js
import React from 'react';
import {  ShoppingCart, } from 'lucide-react'; // For icons
import Link from 'next/link'; // For routing

const Header = () => {
  return (
    <header className="bg-pink-300 shadow-lg py-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="/logo.jpg"
            alt="Beauty Logo"
            className="h-10 w-10 object-cover rounded-full shadow-lg"
          />
          <span className="text-2xl font-bold text-pink-600">Sheikh,7</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 cursor-pointer">
  <Link href="/" passHref
    className="text-gray-700 hover:text-pink-500 transition-all font-medium">
      Home
      </Link>
   
  <Link href="/about" passHref
    className="text-gray-700 hover:text-pink-500 transition-all font-medium">
      About Us
   
 
  </Link>
  <Link href="/beauty" passHref
    className="text-gray-700 hover:text-pink-500 transition-all font-medium">
     Beauty Product
   
  </Link>
  <Link href="/perfume" passHref
    className="text-gray-700 hover:text-pink-500 transition-all font-medium">
     Perfume
   
  </Link>
  <Link href="/contact" passHref
    className="text-gray-700 hover:text-pink-500 transition-all font-medium">
      Contact
   
  </Link>
</nav>


      

        {/* Icons */}
        <div className="flex items-center space-x-6">
         
          <Link href="/cart" passHref>
          <button className="relative text-gray-700 hover:text-pink-500 transition-all animate-bounce">
            <ShoppingCart />
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">2</span>
          </button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-pink-500 transition-all">
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
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
