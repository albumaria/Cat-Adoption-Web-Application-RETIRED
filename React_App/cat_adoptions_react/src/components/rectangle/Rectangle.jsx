import React from "react";
import "./Rectangle.css";

const Rectangle = ({
                       children,
                       type = "default",
                       width = "100%",
                       height = "100%",
                       minHeight = "200px",
                       backgroundColor = "var(--bubblegum)",
                       borderRadius = "2.5vh",
                       imageSrc,
                   }) => {
    return (
        <div className={`rectangle ${type}-rectangle`} style={{ width, height, minHeight, backgroundColor, borderRadius }}>
            {imageSrc && type === "right" ? (
                <img src={imageSrc} alt="Rectangle" className="rectangle-image" />
            ) : (
                children
            )}
        </div>
    );
};

export default Rectangle;
