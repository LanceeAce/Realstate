import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import logo from "..//components/assets/logo.png";

interface Product {
  title: string;
  price: number;
  location: string;
  category: string;
  available: boolean;
  image: string;
}

const products: Product[] = [
  { title: "Luxury Villa", price: 500000, location: "Siargao", category: "Villas", available: true, image: "/assets/11.png" },
  { title: "Modern Apartment", price: 250000, location: "Bataan", category: "Apartments", available: false, image: "/assets/12.png" },
  { title: "Beach House", price: 750000, location: "Boracay", category: "Houses", available: true, image: "/assets/13.png" },
  { title: "Luxury Villa", price: 500000, location: "Nueva Ecija", category: "Villas", available: true, image: "/assets/14.png" },
  { title: "Modern Apartment", price: 250000, location: "Tagaytay", category: "Apartments", available: false, image: "/assets/15.jpeg" },
  { title: "Beach House", price: 750000, location: "Baguio", category: "Houses", available: true, image: "/assets/16.jpg" },
];

const MarketPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(1000000);
  const [availability, setAvailability] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.price <= priceRange &&
      (!availability || product.available)
    );
  });

  return (
    <>
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-center p-4 bg-gradient-to-r  shadow-md text-white">
        <img src={logo} className="h-12" />
        <div className="relative w-full md:w-96 mt-3 md:mt-0">
          <input
            type="text"
            placeholder="Search properties..."
            className="w-full p-2 pr-10 border rounded-md text-gray-800 focus:outline-blue-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">
            <FiSearch size={20} />
          </button>
        </div>
        <div className="mt-3 md:mt-0 space-x-4">
          <button className="px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-blue-100">Login</button>
          <button className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-700">Register</button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 p-4 border-r flex flex-col justify-between min-h-screen bg-blue-50">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-blue-700">Filters</h2>
            <div className="mb-4">
              <label className="block font-medium text-blue-700">Price Range</label>
              <input type="range" min="0" max="1000000" className="w-full" value={priceRange} onChange={(e) => setPriceRange(Number(e.target.value))} />
            </div>
            <div className="mb-4">
              <label className="block font-medium text-blue-700">Category</label>
              <select className="w-full p-2 border rounded-md" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                <option>All</option>
                <option>Apartments</option>
                <option>Houses</option>
                <option>Villas</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block font-medium text-blue-700">Availability</label>
              <input type="checkbox" checked={availability} onChange={() => setAvailability(!availability)} /> Available now
            </div>
          </div>

          {/* Home Button */}
          <a 
            href="/" 
            className="mt-4 w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 text-center rounded-lg font-semibold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Go to Home
          </a>
        </aside>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 flex-1 bg-blue-100">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div key={index} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
                <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-blue-700">{product.title}</h3>
                  <p className="text-gray-600">{product.location}</p>
                  <p className="text-blue-500 font-bold">₱{product.price.toLocaleString()}</p>
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md w-full hover:bg-blue-800 transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-600">No properties found.</p>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <button 
              onClick={() => setSelectedProduct(null)} 
              className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
            >
              ✖
            </button>
            <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-2xl font-bold mt-4 text-blue-700">{selectedProduct.title}</h2>
            <p className="text-gray-600">{selectedProduct.location}</p>
            <p className="text-blue-500 font-bold">${selectedProduct.price.toLocaleString()}</p>
            <p className="mt-2 text-gray-700">This is a beautiful property located in {selectedProduct.location}. Perfect for your dream home!</p>
            <button 
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-800 transition"
            >
              Contact Seller
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MarketPage;
