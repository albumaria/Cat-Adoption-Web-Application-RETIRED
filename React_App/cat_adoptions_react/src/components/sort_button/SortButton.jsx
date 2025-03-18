import React from "react";
import "./SortButton.css";

const SortButton = ( {content, onClick, width } ) => {
    return (
        <div onClick={onClick} className="sort-button" style={{ width }}>
            <text
                x="50%"
                y="55%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="sort-button-text"
            >
                {content}
            </text>
        </div>
    )
}

export default SortButton