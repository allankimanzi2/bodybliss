import React from 'react';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    title: "Hair Laser Treatments",
    description: "Effective and safe treatments for smooth, hair-free skin.",
    image: "/images/laser.jpg",
  },
  {
    title: "Hydrafacial",
    description: "Deeply cleanse and rejuvenate your skin for a radiant glow.",
    image: "/images/hydrafacial.jpg",
  },
  {
    title: "Hydrojelly Facial",
    description: "Nourish your skin with this soothing and refreshing treatment.",
    image: "/images/hydrojelly.jpg",
  },
  {
    title: "Peel Perfection",
    description: "Gentle exfoliation to reveal brighter, healthier skin.",
    image: "/images/peel.jpg",
  },
];

export default function Services() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
}
