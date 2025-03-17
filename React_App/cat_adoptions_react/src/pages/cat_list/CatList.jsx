import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UpperBorder from "../../components/upper_border/UpperBorder";
import "./CatList.css";
import Rectangle from "../../components/rectangle/Rectangle";
import Button from "../../components/button/Button";
import CatContainer from "../../components/cat_container/CatContainer";
import FilterBar from "../../components/filter_bar/FilterBar";
import Pagination from "../../components/pagination/Pagination";
import SortButton from "../../components/sort_button/SortButton";


const CatList = ({ catEntities, setCatEntities }) => {
    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState("");
    const filteredCats = catEntities.filter(cat =>
        cat.name?.toLowerCase().includes(searchQuery.trim().toLowerCase())
    );

    const [currentPage, setCurrentPage] = useState(1);
    const catsPerPage = 10;
    const startIndex = (currentPage - 1) * catsPerPage;
    const totalPages = Math.ceil(filteredCats.length / catsPerPage);
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const [selectedCat, setSelectedCat] = useState(null);
    const handleCatSelection = (cat) => {
        if (selectedCat === cat) {
            navigate(`/${cat.name.toLowerCase()}`);
        } else {
            setSelectedCat(cat);
        }
    };

    const handleDelete = () => {
        if (!selectedCat) return;
        setCatEntities(catEntities.filter(cat => cat !== selectedCat));
        setSelectedCat(null);
        setSearchQuery("");
    };

    const handleAdd = () => {
        navigate("/add");
    };

    const handleUpdate = () => {
        if (selectedCat) {
            navigate(`/update/${selectedCat.name.toLowerCase()}`);
        }
    };

    const [originalOrder] = useState([...catEntities]);
    const [sortText, setSortText] = useState("Sort ⬆");
    const [currentSort, setCurrentSort] = useState("");
    const handleSort = () => {
        if(currentSort === "") {
            setCurrentSort("asc");
            const sortedCats = [...catEntities].sort((a, b) => a.name.localeCompare(b.name));
            setCatEntities(sortedCats);
            setSortText("Sort ⬇")
            setSelectedCat(null);
        }

        if(currentSort === "asc") {
            setCurrentSort("desc");
            const sortedCats = [...catEntities].sort((a, b) => -(a.name.localeCompare(b.name)));
            setCatEntities(sortedCats);
            setSortText("Undo Sort")
            setSelectedCat(null);
        }

        if(currentSort === "desc") {
            setCurrentSort("");
            const sortedCats = [...originalOrder];
            setCatEntities(sortedCats);
            setSortText("Sort ⬆")
            setSelectedCat(null);
        }
    };


    return (
        <div>
            <div className='column-container-list'>
                <UpperBorder content="Adopt a Cat!"/>

                <Rectangle type="list">
                    <div className="row-container-list">
                        <FilterBar onSearch={setSearchQuery}></FilterBar>
                        <SortButton className="sort-button" content={sortText} onClick={handleSort}></SortButton>
                    </div>
                    <CatContainer catList={filteredCats} startIndex={startIndex} selectedCat={selectedCat} onCatSelect={handleCatSelection}></CatContainer>
                    <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange}></Pagination>
                </Rectangle>


            </div>
            <div className='button-container'>
                <Button content="Add" onClick={handleAdd}></Button>
                <Button content="Delete" onClick={handleDelete}></Button>
                <Button content="Update" onClick={handleUpdate}></Button>
            </div>
        </div>
    )
};


export default CatList;
