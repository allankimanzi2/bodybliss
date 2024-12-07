import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">BodyBliss</h1>
      <nav>
        <NavLink className="mx-2 text-gray-700" to="/">Home</NavLink>
        <NavLink className="mx-2 text-gray-700" to="/services">Services</NavLink>
        <NavLink className="mx-2 text-gray-700" to="/booking">Booking</NavLink>
        <NavLink className="mx-2 text-gray-700" to="/about">About</NavLink>
        <NavLink className="mx-2 text-gray-700" to="/testimonials">Testimonials</NavLink>
      </nav>
    </header>
  );
}
