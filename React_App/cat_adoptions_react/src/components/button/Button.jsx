import React from "react";
import "./Button.css";

const Button = ( {content} ) => {
    return (
        <div>
            <svg width="100%" height="100%" viewBox="0 0 355 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="button">
                <rect width="355" height="47.1582" rx="20" fill="#51294B"/>
                <text
                    x="50%"
                    y="55%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="button-text"
                >
                    {content}
                </text>

            </svg>
        </div>
    )
}

export default Button