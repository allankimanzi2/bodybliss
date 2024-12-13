import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ServiceCard({ title, description, image }) {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(`/services/${title.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div className="border rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <button
          onClick={handleLearnMore}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

  