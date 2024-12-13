import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Booking() {
  const location = useLocation();
  const navigate = useNavigate();
  const { serviceName, categoryName, price } = location.state || {};

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: serviceName && categoryName ? `${serviceName} - ${categoryName}` : '',
    price: price || '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your booking for ${formData.service} has been submitted!`);
    navigate('/'); // Redirect to the homepage or another page after submission
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center">Book a Service</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-2 mb-4 border rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-2 mb-4 border rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          className="w-full p-2 mb-4 border rounded"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <div className="mb-4">
          <label className="block mb-1 font-medium">Selected Service:</label>
          {serviceName && categoryName ? (
            <p className="p-2 border rounded bg-gray-100">
              {formData.service} - <span className="font-bold">{formData.price}</span>
            </p>
          ) : (
            <select
              name="service"
              className="w-full p-2 border rounded"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a Service</option>
              <option value="Hair Laser Treatments">Hair Laser Treatments</option>
              <option value="Hydrafacial">Hydrafacial</option>
              <option value="Hydrojelly Facial">Hydrojelly Facial</option>
              <option value="Peel Perfection">Peel Perfection</option>
            </select>
          )}
        </div>
        <input
          type="date"
          name="date"
          className="w-full p-2 mb-4 border rounded"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          className="w-full p-2 mb-4 border rounded"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <button type="submit" className="w-full bg-pink-500 text-white p-2 rounded">
          Book Now
        </button>
      </form>
    </div>
  );
}

