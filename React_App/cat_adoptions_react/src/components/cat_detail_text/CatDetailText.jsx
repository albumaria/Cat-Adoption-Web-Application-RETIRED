import "./CatDetailText.css"

const CatDetailText = ( { cat } ) => {
    return (
        <div className="cat-detail-text">
            <div className="cat-detail-name">{cat.name}</div>
            <div className="cat-details">Gender: {cat.gender}</div>
            <div className="cat-details">Age: {cat.age}</div>
            <div className="cat-details">Weight: {cat.weight}</div>
            <div className="cat-description">{cat.description}</div>
        </div>
    )
}

export default CatDetailText;