import { useParams } from "react-router-dom";
import "./CatDetails.css";
import CatEntities from "../../assets/CatEntities";
import Rectangle from "../../components/rectangle/Rectangle";
import React from "react";
import CatDetailText from "../../components/cat_detail_text/CatDetailText";  // Import the same cat list
import "./CatDetails.css"

const CatDetail = () => {
    const { catName } = useParams(); // Get cat name from URL
    const cat = CatEntities.find(c => c.name.toLowerCase() === catName.toLowerCase()); // Find the cat


    return (
        <div className="cat-detail">
            <Rectangle className="cat-detail-rectangle" type="left" width="50%" backgroundColor="var(--bubblegum)">
                <CatDetailText cat={cat}></CatDetailText>
            </Rectangle>
            <Rectangle type="right" width="50%" backgroundColor="#FFDD4D" imageSrc={cat.image} />
        </div>
    );
};

export default CatDetail;
