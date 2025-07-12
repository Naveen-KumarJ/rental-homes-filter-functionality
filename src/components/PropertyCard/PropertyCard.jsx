import React, { useState, useEffect } from "react";
import { BsTextareaResize } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaBed } from "react-icons/fa";
import { MdBathroom } from "react-icons/md";
import housePlaceholder from "../../assets/house_placeholder.png";

const PropertyCard = ({ property }) => {
  const { name, price, address, bedrooms, bathrooms, size, image } = property;

  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const exists = favourites.some((fav) => fav.name === property.name);
    setIsFavourite(exists);
  }, [property.name]);

  const toggleFavourite = () => {
    let favourites = JSON.parse(localStorage.getItem("favourites")) || [];

    if (isFavourite) {
      favourites = favourites.filter((fav) => fav.name !== property.name);
    } else {
      favourites.push(property);
    }

    localStorage.setItem("favourites", JSON.stringify(favourites));
    setIsFavourite(!isFavourite);
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={image || housePlaceholder}
        alt={name}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-indigo-700">
            ₹{price}{" "}
            <span className="text-sm font-normal text-gray-500">/month</span>
          </h3>
          <button
            onClick={toggleFavourite}
            className="cursor-pointer text-xl transition-colors text-gray-500 hover:text-red-500"
          >
            <CiHeart
              className={`p-1 text-3xl rounded-full ${
                isFavourite ? "bg-red-500 text-white" : ""
              }`}
            />
          </button>
        </div>
        <h2 className="text-lg font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600 mb-4">{address}</p>
        <div className="flex justify-between text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <FaBed /> {bedrooms} Beds
          </span>
          <span className="flex items-center gap-1">
            <MdBathroom /> {bathrooms} Baths
          </span>
          <span className="flex items-center gap-1">
            <BsTextareaResize /> {size}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
