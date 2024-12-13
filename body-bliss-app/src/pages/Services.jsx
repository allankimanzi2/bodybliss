import React from 'react';
import ServiceCard from '../components/ServiceCard';

import hairLaserImg from '../assets/images/hairlaser.png';
import hydrafacialImg from '../assets/images/hydrafacial.png';
import hydrojellyImg from '../assets/images/hydrojelly.png';
import peelImg from '../assets/images/peeling.png';

const services = [
  {
    title: "Body Bliss Laser Treatments",
    description: "Effective and safe treatments for smooth, hair-free skin.",
    image: hairLaserImg,
  },
  {
    title: "Body Bliss Facial",
    description: "Deeply cleanse and rejuvenate your skin for a radiant glow.",
    image: hydrafacialImg,
  },
  {
    title: "Body Bliss Massage",
    description: "Nourish your skin with this soothing and refreshing treatment.",
    image: hydrojellyImg,
  },
  {
    title: "Body Bliss Skin Tag Removal",
    description: "Gentle exfoliation to reveal brighter, healthier skin.",
    image: peelImg,
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

