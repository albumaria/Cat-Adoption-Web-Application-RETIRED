import "./FilterBar.css"
import React, { useState } from "react";

const FilterBar = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = (event) => {
        setSearchValue(event.target.value); // Only updates the local state
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter" && onSearch) {
            onSearch(searchValue); // Only updates parent when Enter is pressed
        }
    };

    return (
        <input className="filter-bar"
               type="text"
               placeholder="Search..."
               value={searchValue}
               onChange={handleInputChange}
               onKeyDown={handleKeyDown}>

        </input>
    );
};

export default FilterBar;

