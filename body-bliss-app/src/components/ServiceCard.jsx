export default function ServiceCard({ title, description, image }) {
    return (
      <div className="border rounded-lg shadow-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
    );
  }
  