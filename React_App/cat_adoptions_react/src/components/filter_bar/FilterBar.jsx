import "./FilterBar.css"
import React, { useState } from "react";

const FilterBar = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = (event) => {
        const newSearchValue = event.target.value;
        setSearchValue(newSearchValue);
        onSearch(newSearchValue); // Immediately update the search query in the parent
    };

    return (
        <input className="filter-bar"
               type="text"
               placeholder="Search..."
               value={searchValue}
               onChange={handleInputChange}
        >
        </input>
    );
};

export default FilterBar;

