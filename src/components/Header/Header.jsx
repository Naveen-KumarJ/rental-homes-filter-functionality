import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({ onSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    onSearch(searchInput.trim());
  };

  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4 bg-white border-b">
      <h2
        className="text-xl md:text-2xl font-bold text-gray-800 cursor-pointer"
        onClick={() => navigate("/")}
      >
        Rentak Homes
      </h2>

      <h3 className="text-lg md:text-xl font-medium text-gray-700">
        {location.pathname === "/favourites"
          ? "Search your favourites"
          : "Search properties to rent"}
      </h3>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
        <div className="flex w-full sm:w-auto">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search property"
            className="w-full sm:w-60 px-3 py-2 border border-gray-300 rounded-l-md outline-none"
          />
          <button
            onClick={handleSearch}
            className="cursor-pointer px-4 py-2 border border-gray-300 bg-gray-100 text-sm font-medium rounded-r-md hover:bg-black hover:text-white transition-all duration-200"
          >
            Search
          </button>
        </div>

        <button
          onClick={() => navigate("/favourites")}
          className="cursor-pointer px-4 py-2 border border-gray-300 bg-gray-100 text-sm font-medium rounded-md hover:bg-black hover:text-white transition-all duration-200"
        >
          Favourites
        </button>
      </div>
    </header>
  );
};

export default Header;
