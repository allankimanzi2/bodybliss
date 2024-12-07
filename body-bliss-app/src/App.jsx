import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Booking from './pages/Booking';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import PriceList from './pages/PriceList';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header Component */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/pricelist" element={<PriceList />} />
          </Routes>
        </main>

       
        <Footer />
      </div>
    </Router>
  );
}
