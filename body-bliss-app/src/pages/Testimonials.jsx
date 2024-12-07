import React from 'react';

const testimonials = [
  {
    name: "Jane Doe",
    message: "The hydrafacial was amazing! My skin feels so smooth and refreshed.",
    image: "/images/testimonial1.jpg",
  },
  {
    name: "John Smith",
    message: "Highly recommend the laser treatments. Professional staff and great results.",
    image: "/images/testimonial2.jpg",
  },
];

export default function Testimonials() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center">What Our Clients Say</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-md">
            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full" />
            <h2 className="mt-4 font-semibold">{testimonial.name}</h2>
            <p className="text-gray-600">{testimonial.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
