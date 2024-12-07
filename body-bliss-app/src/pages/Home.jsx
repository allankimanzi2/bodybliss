import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <section className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl font-bold">Welcome to BodyBliss</h1>
          <p className="mt-4 text-lg">Rejuvenate your body and mind with our premium services.</p>
          <Link to="/services" className="mt-6 bg-pink-500 px-6 py-3 rounded-full text-white">
            Discover Our Services
          </Link>
        </div>
      </section>
      <section className="p-10 bg-gray-100">
        <h2 className="text-2xl font-bold text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Add ServiceCard components here */}
        </div>
      </section>
    </div>
  );
}
