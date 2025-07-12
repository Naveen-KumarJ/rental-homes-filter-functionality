import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

const Favourite = () => {
  const { searchText } = useOutletContext();
  const [favourites, setFavourites] = useState([]);
  const [filteredFavs, setFilteredFavs] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(favs);
  }, []);

  useEffect(() => {
    if (!searchText) {
      setFilteredFavs(favourites);
    } else {
      setFilteredFavs(
        favourites.filter((fav) =>
          fav.name.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }
  }, [searchText, favourites]);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredFavs.length > 0 ? (
        filteredFavs.map((fav, index) => (
          <div key={index} className="bg-white shadow-md p-4 rounded-lg">
            <img
              src={fav.image}
              alt={fav.name}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <h3 className="text-lg font-semibold text-gray-800">{fav.name}</h3>
            <p className="text-sm text-gray-600">{fav.address}</p>
            <p className="text-sm text-indigo-600 font-medium">
              ₹{fav.price}/month
            </p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 col-span-full">
          No favourites found.
        </p>
      )}
    </div>
  );
};

export default Favourite;
