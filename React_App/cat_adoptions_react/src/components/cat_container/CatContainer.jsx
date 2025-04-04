import React from "react";
import CatCard from "../cat_card/CatCard";
import "./CatContainer.css"

const CatContainer = ({ catList, startIndex, selectedCat, onCatSelect }) => {
    const catsToShow = catList.slice(startIndex, startIndex + 10);
    const placeholders = Array(Math.max(0, 10 - catsToShow.length)).fill(null);

    return (
        <div className="cat-list">
            {catsToShow.map((cat, index) => (
                <CatCard key={startIndex + index}
                         cat={cat}
                         isSelected={selectedCat === cat}
                         onSelect={() => onCatSelect(cat)}  // chain update
                />
            ))}
            {placeholders.map((_, index) => (
                <div key={`placeholder-${index}`} className="cat-placeholder" data-testid="cat-placeholder"/>
            ))}
        </div>
    );
};


export default CatContainer;
