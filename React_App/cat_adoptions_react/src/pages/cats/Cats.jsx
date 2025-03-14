import React from "react";
import UpperBorder from "../../components/upper_border/UpperBorder";
import "./Cats.css";
import Rectangle from "../../components/rectangle/Rectangle";
import Button from "../../components/button/Button";
import CatList from "../../components/cat_list/CatList";
import FilterBar from "../../components/filter_bar/FilterBar";
import Pagination from "../../components/pagination/Pagination";

const Home = () => {
    return (
        <div>
            <div className='column-container-list'>
                <UpperBorder content="Adopt a Cat!"/>

                <Rectangle type="list">
                    <FilterBar></FilterBar>
                    <CatList></CatList>
                    <Pagination totalPages={3} currentPage={2}></Pagination>
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



export default Home;
