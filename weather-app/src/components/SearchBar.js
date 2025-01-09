import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ fetchWeather }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city) {
      fetchWeather(city); // Trigger the fetchWeather function passed as prop
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(); // Trigger search on Enter key press
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        className="inp"
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress} // Handle Enter key press
      />
      <button onClick={handleSearch} className="sb">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
