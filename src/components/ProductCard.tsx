import React from "react";

interface ProductProps {
  title: string;
  price: number;
  location: string;
  image: string;
}

const ProductCard: React.FC<ProductProps> = ({ title, price, location, image }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{location}</p>
        <p className="text-blue-500 font-bold">${price}</p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md w-full">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
