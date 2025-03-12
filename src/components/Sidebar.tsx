

const Sidebar = () => {
  return (
    <aside className="w-64 p-4 border-r">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      {/* Price Range */}
      <div className="mb-4">
        <label className="block font-medium">Price Range</label>
        <input type="range" min="0" max="1000000" className="w-full" />
      </div>

      {/* Categories */}
      <div className="mb-4">
        <label className="block font-medium">Category</label>
        <select className="w-full p-2 border rounded-md">
          <option>All</option>
          <option>Apartments</option>
          <option>Houses</option>
          <option>Villas</option>
        </select>
      </div>

      {/* Ratings */}
      <div className="mb-4">
        <label className="block font-medium">Ratings</label>
        <input type="range" min="1" max="5" className="w-full" />
      </div>

      {/* Availability */}
      <div className="mb-4">
        <label className="block font-medium">Availability</label>
        <input type="checkbox" /> Available now
      </div>
    </aside>
  );
};

export default Sidebar;
