import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="pink-500 text-black shadow-none sticky top-4 z-50">
      {/* Header container */}
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-7xl font-black italic uppercase">
          <NavLink to="/">
            <img
              src={logo}
              alt="BodyBliss Logo"
              style={{ width: '100px', height: 'auto' }}
            />
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-56">
          <NavLink
            to="/"
            className="text-lg font-medium text-gray-200 hover:text-yellow-500 hover:underline transition duration-300 ease-in-out transform hover:scale-105"
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className="text-lg font-medium text-gray-200 hover:text-yellow-500 hover:underline transition duration-300 ease-in-out transform hover:scale-105"
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className="text-lg font-medium text-gray-200 hover:text-yellow-500 hover:underline transition duration-300 ease-in-out transform hover:scale-105"
          >
            About Us
          </NavLink>
          <NavLink
            to="/testimonials"
            className="text-lg font-medium text-gray-200 hover:text-yellow-500 hover:underline transition duration-300 ease-in-out transform hover:scale-105"
          >
            Testimonials
          </NavLink>
          <NavLink
            to="/contact"
            className="text-lg font-medium text-gray-200 hover:text-yellow-500 hover:underline transition duration-300 ease-in-out transform hover:scale-105"
          >
            Contact
          </NavLink>
        </nav>

        {/* Book Now Button for Desktop */}
        <div className="hidden md:block">
          <NavLink
            to="/booking"
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition duration-300"
          >
            Book Now
          </NavLink>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-white"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div>
          {/* Overlay Background */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={toggleMenu}
          ></div>

          <nav className="absolute top-16 left-0 w-full bg-purple-400 shadow-lg">
            <ul className="space-y-4 text-center py-6">
              <li>
                <NavLink
                  to="/"
                  className="text-lg font-medium text-gray-200 hover:text-yellow-500 transition duration-300"
                  onClick={toggleMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="text-lg font-medium text-gray-200 hover:text-yellow-500 transition duration-300"
                  onClick={toggleMenu}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-lg font-medium text-gray-200 hover:text-yellow-500 transition duration-300"
                  onClick={toggleMenu}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/testimonials"
                  className="text-lg font-medium text-gray-200 hover:text-yellow-500 transition duration-300"
                  onClick={toggleMenu}
                >
                  Testimonials
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-lg font-medium text-gray-200 hover:text-yellow-500 transition duration-300"
                  onClick={toggleMenu}
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/booking"
                  className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition duration-300"
                  onClick={toggleMenu}
                >
                  Book Now
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Sub Header */}
      <div className="bg-yellow-900 text-center py-2">
        <p className="text-sm">Your journey to wellness starts here.</p>
      </div>
    </header>
  );
};

export default Header;
