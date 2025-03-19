import { useParams } from "react-router-dom";
import "./CatDetails.css";
import Rectangle from "../../components/rectangle/Rectangle";
import React from "react";
import CatDetailText from "../../components/cat_detail_text/CatDetailText";  // Import the same cat list
import "./CatDetails.css"

const CatDetails = ( { catEntities }) => {
    const { catName } = useParams();

    const cat = catEntities.find(c => c.name.toLowerCase() === catName.toLowerCase());

    if (!cat) {
        return <div>Cat not found.</div>;
    }

    return (
        <div className="cat-detail">
            <Rectangle className="cat-detail-rectangle" type="left" width="50%" backgroundColor="var(--bubblegum)">
                <CatDetailText data-testid="cat-detail-text" cat={cat}></CatDetailText>
            </Rectangle>
            <Rectangle type="right" width="50%" backgroundColor="#FFDD4D" imageSrc={cat.image} />
        </div>
    );
};

export default CatDetails;