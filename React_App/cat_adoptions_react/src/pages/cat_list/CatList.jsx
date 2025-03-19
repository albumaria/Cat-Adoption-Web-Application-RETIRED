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
            setCurrentSort("");
            setSortText("Sort ⬆");
            setAgeGroup("Show Kittens");

            setCatEntities(prevCats => {
                const updatedCats = [...prevCats];
                navigate(`/${cat.name.toLowerCase()}`); // Navigate after updating
                return updatedCats;
            });
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

    const originalOrderRef = React.useRef([...catEntities]);
    const [sortText, setSortText] = useState("Sort ⬆");
    const [currentSort, setCurrentSort] = useState("");
    const [preSortCats, setPreSortCats] = useState([]);
    const handleSort = () => {
        if (currentSort === "") {
            setCurrentSort("asc");
            setPreSortCats([...catEntities]); // Save the current filtered list
            const sortedCats = [...catEntities].sort((a, b) => a.name.localeCompare(b.name));
            setCatEntities(sortedCats);
            setSortText("Sort ⬇");
        } else if (currentSort === "asc") {
            setCurrentSort("desc");
            const sortedCats = [...catEntities].sort((a, b) => b.name.localeCompare(a.name));
            setCatEntities(sortedCats);
            setSortText("Undo Sort");
        } else {
            setCurrentSort("");
            setCatEntities([...preSortCats]); // Restore the last filtered list, not all cats
            setSortText("Sort ⬆");
        }

        setSelectedCat(null);
    };

    const [ageGroup, setAgeGroup] = useState("Show Kittens");
    const handleAgeGroups = () => {
        const allCats = [...originalOrderRef.current];

        const kittens = allCats.filter(cat => cat.age >= 0 && cat.age <= 2);
        const adultCats = allCats.filter(cat => cat.age >= 3 && cat.age <= 10);
        const seniorCats = allCats.filter(cat => cat.age >= 11);

        let newCatList;

        if (ageGroup === "Show Kittens") {
            setAgeGroup("Show Adult Cats");
            newCatList = kittens;
        } else if (ageGroup === "Show Adult Cats") {
            setAgeGroup("Show Senior Cats");
            newCatList = adultCats;
        } else if (ageGroup === "Show Senior Cats") {
            setAgeGroup("Show All");
            newCatList = seniorCats;
        } else {
            setAgeGroup("Show Kittens");
            newCatList = allCats;
        }

        setCatEntities(newCatList);
        setPreSortCats(newCatList);
        setCurrentSort("");
        setSortText("Sort ⬆");
        setSelectedCat(null);
    };


    return (
        <div>
            <div className='column-container-list'>
                <UpperBorder content="Adopt a Cat!"/>

                <Rectangle type="list">
                    <div className="row-container-list">
                        <FilterBar onSearch={setSearchQuery}></FilterBar>
                        <SortButton className="age-group-button-list" width="20vw" content={ageGroup} onClick={handleAgeGroups}></SortButton>
                        <SortButton className="sort-button-list" width="20vh" content={sortText} onClick={handleSort}></SortButton>
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