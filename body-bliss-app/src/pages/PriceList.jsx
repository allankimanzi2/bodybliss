import React from 'react';

const priceList = [
  {
    category: "Skin Treatments",
    services: [
      { name: "Hair Laser Treatment", price: "$150 per session" },
      { name: "Hand/Leg Skin Treatment", price: "$120 per session" },
    ],
  },
  {
    category: "Facials",
    services: [
      { name: "Hydrafacial", price: "$100 per session" },
      { name: "Hydrojelly Facial", price: "$80 per session" },
      { name: "Peel Perfection", price: "$90 per session" },
    ],
  },
  {
    category: "Injectables",
    services: [
      { name: "Glutathione Injection", price: "$200 per session" },
    ],
  },
  {
    category: "Pills",
    services: [
      { name: "Snow Bleach Pills", price: "$50 per bottle" },
    ],
  },
];

export default function PriceList() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center">Price List</h1>
      <div className="mt-8">
        {priceList.map((category, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-semibold text-pink-500">{category.category}</h2>
            <ul className="mt-4">
              {category.services.map((service, idx) => (
                <li key={idx} className="flex justify-between text-gray-700 mt-2">
                  <span>{service.name}</span>
                  <span>{service.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
