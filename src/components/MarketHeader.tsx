

const MarketHeader = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold">RealEstate</h1>
      
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Search properties..."
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="space-x-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Login</button>
        <button className="px-4 py-2 bg-gray-300 rounded-md">Register</button>
      </div>
    </header>
  );
};
 
export default MarketHeader