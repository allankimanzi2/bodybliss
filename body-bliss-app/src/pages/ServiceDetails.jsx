import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const serviceDetails = {
  "body-bliss-laser-treatments": {
    categories: [
      { name: "Face and Neck", price: "kshs 4000" },
      { name: "Full Arms", price: "kshs 6800" },
      { name: "Half Arms", price: "kshs 4560" },
      { name: "Chin", price: "kshs 1760" },
      { name: "Underarms", price: "kshs 4000" },
      { name: "Legs", price: "kshs 7440" },
      { name: "Bikini Standard", price: "kshs 4000" },
      { name: "Bikini Brazilian", price: "kshs 6800" },
      { name: "Bikini Back", price: "kshs 9600" },
      { name: "Bikini Chest and Abdomen", price: "kshs 9600" },
      { name: "Bikini Full Brazilian + Underarms", price: "kshs 8250" },
      { name: "Bikini Thighs", price: "kshs 8000" },
      { name: "Bikini Legs and Thighs", price: "kshs 11440" },
      { name: "Bikini Stomach", price: "kshs 1760" },
      { name: "Bikini Full Body", price: "kshs 32000" },
    ],
  },
  "body-bliss-facial": {
    categories: [
      { name: "Basic Facial", price: "kshs 6000" },
      { name: "Advanced Hydrafacial", price: "kshs 10000" },
    ],
  },
  "body-bliss-massage": {
    categories: [
      { name: "Wood Therapy (1 Hour)", description: "1-hour session", price: "kshs 2500" },
      { name: "Wood Therapy (Full Package)", description: "Full package session", price: "kshs 4500" },
    ],
  },
  "body-bliss-skin-tag-removal": {
    categories: [
      { name: "Face Only", price: "kshs 15000" },
      { name: "Face and Neck", price: "kshs 25000" },
      { name: "Full Back, Shoulder, and Neck (Depending on Extent)", price: "kshs 50000" },
    ],
  },
};

export default function ServiceDetails() {
  const { serviceName } = useParams();
  const navigate = useNavigate();
  const service = serviceDetails[serviceName];

  if (!service) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold text-red-500">Service not found</h1>
        <button
          onClick={() => navigate("/services")}
          className="mt-6 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Back to Services
        </button>
      </div>
    );
  }

  return (
    <div className="p-10">
      <button
        onClick={() => navigate("/services")}
        className="mb-4 bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300"
      >
        &larr; Back to Services
      </button>
      <h1 className="text-3xl font-bold text-center capitalize">
        {serviceName.replace(/-/g, " ")}
      </h1>
      <div className="mt-6">
        {service.categories.map((category, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-md mb-4"
          >
            <div className="flex justify-between items-center">
              <div>
                <span className="font-semibold">{category.name}</span>
                {category.description && (
                  <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                )}
              </div>
              <span className="font-bold text-blue-600">{category.price}</span>
            </div>
            <button
              onClick={() =>
                navigate("/booking", {
                  state: {
                    serviceName: serviceName.replace(/-/g, " "),
                    categoryName: category.name,
                    price: category.price,
                  },
                })
              }
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

