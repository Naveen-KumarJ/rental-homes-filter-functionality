import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import properties from "../../data";
import FilterBar from "../../components/FilterBar/FilterBar";

const Home = () => {
  const { searchText } = useOutletContext();
  const [filteredProps, setFilteredProps] = useState(properties);

  const [filters, setFilters] = useState({
    location: "",
    type: "",
    priceRange: "",
    date: null,
  });

  const applyAllFilters = () => {
    let result = properties;

    if (searchText) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (filters.location) {
      result = result.filter((p) => p.location === filters.location);
    }

    if (filters.type) {
      result = result.filter((p) => p.type.toLowerCase() === filters.type);
    }

    if (filters.priceRange) {
      result = result.filter((p) => {
        if (filters.priceRange === "low") return p.price <= 1500;
        if (filters.priceRange === "mid")
          return p.price > 1500 && p.price <= 2500;
        if (filters.priceRange === "high") return p.price > 2500;
        return true;
      });
    }

    setFilteredProps(result);
  };

  useEffect(() => {
    applyAllFilters();
  }, [searchText, filters]);

  return (
    <div className="py-6">
      <FilterBar
        filters={filters}
        setFilters={setFilters}
        onSearch={applyAllFilters}
      />
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProps.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Home;
