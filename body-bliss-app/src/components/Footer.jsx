import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold">BodyBliss</h3>
          <p className="mt-2 text-sm">
            Your destination for premium skin and body treatments. Rejuvenate, refresh, and glow with us.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><NavLink to="/services" className="hover:text-pink-500">Services</NavLink></li>
            <li><NavLink to="/booking" className="hover:text-pink-500">Booking</NavLink></li>
            <li><NavLink to="/about" className="hover:text-pink-500">About Us</NavLink></li>
            <li><NavLink to="/testimonials" className="hover:text-pink-500">Testimonials</NavLink></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Contact Us</h3>
          <p className="mt-2 text-sm">
            Email: <a href="mailto:info@bodybliss.com" className="hover:text-pink-500">info@bodybliss.com</a>
          </p>
          <p className="text-sm">
            Phone: <a href="tel:+1234567890" className="hover:text-pink-500">+1 234 567 890</a>
          </p>
          <p className="text-sm">Location: 123 Wellness Lane, Skintown</p>
        </div>
      </div>
      <div className="text-center mt-6 text-sm border-t border-gray-700 pt-4">
        © 2024 BodyBliss. All Rights Reserved.
      </div>
    </footer>
  );
}
