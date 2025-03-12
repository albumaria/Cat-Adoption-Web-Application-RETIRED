import React from "react";
import CatCard from "../cat_card/CatCard";
import "../../assets/tole.jpg"

const ListItem = () => {
    const cats = [
        { name: "lolec", image: "../../assets/tole.jpg" },
        { name: "bolec", image: "../../assets/tole.jpg" },
        { name: "bibi", image: "../../assets/tole.jpg" },
        { name: "tina", image: "../../assets/tole.jpg" },
        { name: "amadeus", image: "../../assets/tole.jpg" },
        { name: "sabrina", image: "../../assets/tole.jpg" },
        { name: "carpenter", image: "../../assets/tole.jpg" },
        { name: "frou frou", image: "../../assets/tole.jpg" },
        { name: "argentina", image: "../../assets/tole.jpg" },
        { name: "eugenia", image: "../../assets/tole.jpg" },
    ];

    return (
        <div className="cat-list">
            {cats.map((cat, index) => (
                <CatCard key={index} cat={cat} />
            ))}
        </div>
    );
};

export default ListItem;
