import React from "react";
import "./SortButton.css";

const SortButton = ( {content, onClick} ) => {
    return (
        <div onClick={onClick}>
            <svg width="100%" height="100%" viewBox="0 0 156 47" fill="none" xmlns="http://www.w3.org/2000/svg" className="sort-button">
                <rect width="156" height="47" rx="20" fill="#FFD5D2"/>
                <text
                    x="50%"
                    y="55%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="sort-button-text"
                >
                    {content}
                </text>
            </svg>

        </div>
    )
}

export default SortButton