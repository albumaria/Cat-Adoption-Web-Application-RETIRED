import "./CatCard.css"
import React from "react";

const CatCard = ({ cat }) => {
    return (
        <div className="cat-card">
            <img src={cat.image} alt={cat.name} className="cat-image" />
            <p className="cat-name">{cat.name}</p>
        </div>
    );
};

export default CatCard;