import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UpperBorder from "../../components/upper_border/UpperBorder";
import "./CatList.css";
import Rectangle from "../../components/rectangle/Rectangle";
import Button from "../../components/button/Button";
import CatContainer from "../../components/cat_container/CatContainer";
import FilterBar from "../../components/filter_bar/FilterBar";
import Pagination from "../../components/pagination/Pagination";
import CatEntities from "../../assets/CatEntities";


const CatList = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const filteredCats = CatEntities.filter(cat =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const [currentPage, setCurrentPage] = useState(1);
    const catsPerPage = 10;
    const startIndex = (currentPage - 1) * catsPerPage;
    const totalPages = Math.ceil(filteredCats.length / catsPerPage);
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const navigate = useNavigate();
    const [selectedCat, setSelectedCat] = useState(null);
    const handleCatSelection = (cat) => {
        if (selectedCat === cat) {
            navigate(`/${cat.name.toLowerCase()}`); // Navigate to cat detail page
        } else {
            setSelectedCat(cat);
        }
    };

    return (
        <div>
            <div className='column-container-list'>
                <UpperBorder content="Adopt a Cat!"/>

                <Rectangle type="list">
                    <FilterBar onSearch={setSearchQuery}></FilterBar>
                    <CatContainer catList={filteredCats} startIndex={startIndex} selectedCat={selectedCat} onCatSelect={handleCatSelection}></CatContainer>
                    <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange}></Pagination>
                </Rectangle>


            </div>
            <div className='row-container-list'>
                <Button content="Add"></Button>
                <Button content="Delete"></Button>
                <Button content="Update"></Button>
            </div>
        </div>
    )
};



export default CatList;
