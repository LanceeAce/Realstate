
import Sidebar from "./Sidebar";
import ProductCard from "./ProductCard";
import MarketHeader from "./MarketHeader";

const properties = [
  { title: "Luxury Villa", price: 500000, location: "California, USA", image: "/house1.jpg" },
  { title: "Modern Apartment", price: 300000, location: "New York, USA", image: "/house2.jpg" },
  { title: "Beachfront House", price: 700000, location: "Miami, USA", image: "/house3.jpg" },
];

const Market = () => {
  return (
    <div className="h-screen flex flex-col">
      <MarketHeader />

      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 grid grid-cols-3 gap-4">
          {properties.map((property, index) => (
            <ProductCard key={index} {...property} />
          ))}
        </main>
      </div>
    </div>
  );
};

export default Market;
