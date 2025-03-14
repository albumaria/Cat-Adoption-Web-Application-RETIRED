import React from "react";
import CatCard from "../cat_card/CatCard";
import "../../assets/tole.jpg"
import "./CatList.css"

const CatList = () => {
    const cats = [
        { name: "lolec", image: "" },
        { name: "bolec", image: "" },
        { name: "bibi", image: "" },
        { name: "tina", image: "" },
        { name: "amadeus", image: "" },
        { name: "sabrina", image: "" },
        { name: "carpenter", image: "" },
        { name: "frou frou", image: "" },
        { name: "argentina", image: "" },
        { name: "eugenia", image: "" },
    ];


    return (
        <div className="cat-list">
            {cats.map((cat, index) => (
                <CatCard key={index} cat={cat} />
            ))}
        </div>
    );
};


export default CatList;
