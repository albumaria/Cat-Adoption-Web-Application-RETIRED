import React, { useState } from "react";
import UpperBorder from "../../components/upper_border/UpperBorder";
import "./Cats.css";
import Rectangle from "../../components/rectangle/Rectangle";
import Button from "../../components/button/Button";
import CatList from "../../components/cat_list/CatList";
import FilterBar from "../../components/filter_bar/FilterBar";
import Pagination from "../../components/pagination/Pagination";

const cats = [
    { name: "Kiryu", image: "https://i.pinimg.com/736x/b3/dd/92/b3dd92d6db84a0d98a86d797f27c1eea.jpg" },
    { name: "Cola", image: "https://media.discordapp.net/attachments/647096625394745374/1350453285785702471/20220531_105320.jpg?ex=67d6cb21&is=67d579a1&hm=9ef19417e95b2fe515354b94ebb27ff3013d7025f63c64c91ac196b8f7589718&=&format=webp&width=927&height=1237" },
    { name: "Bibi", image: "https://i.pinimg.com/736x/db/28/b2/db28b29fc597f6fd9261fb616999776f.jpg" },
    { name: "Tina", image: "https://i.pinimg.com/736x/c9/d0/60/c9d060491410396f59d47e387112eafc.jpg"},
    { name: "Amadeus", image: "https://i.pinimg.com/736x/68/3f/75/683f75c3de8b9f7dbc72bfa37d15d353.jpg" },
    { name: "Luna", image: "https://media.discordapp.net/attachments/935568202992324698/1302612921259659347/20241103_143747.jpg?ex=67d6c651&is=67d574d1&hm=191d4695ac2e2a5f7496d80cba13d173c1060538c209f04c66a882c4c8fbe4ad&=&format=webp&width=628&height=838" },
    { name: "Pufoasa", image: "https://media.discordapp.net/attachments/647096625394745374/1350452897443217459/Screenshot_20230615_151642_com.png?ex=67d6cac4&is=67d57944&hm=34df0ab884ca57958a5abeb0c3c2a33094b76288ef02c9121d52f921ff847054&=&format=webp&quality=lossless&width=442&height=577" },
    { name: "Estus", image: "https://media.discordapp.net/attachments/935568202992324698/1206653567788781620/IMG-20240212-WA0000.jpg?ex=67d661f5&is=67d51075&hm=ecc78e402015eae6ee343f4f39bae9a772c14875de3f2b8dcd313d70975be63d&=&format=webp&width=1489&height=838" },
    { name: "Boris", image: "https://media.discordapp.net/attachments/909114093540089906/1350452226694578187/20250204_113524.jpg?ex=67d6ca25&is=67d578a5&hm=c5322370a8116273aed6719d49688b0f0666d7326c98c6badf2cfab1d4e87286&=&format=webp&width=927&height=1237" },
    { name: "Kiwi", image: "https://media.discordapp.net/attachments/909114093540089906/1350456079695482956/20230108_170903.jpg?ex=67d6cdbb&is=67d57c3b&hm=d6d63e89cdd39efacbbc7b41b76b4373ee51c58111eb233aba2d75e23eefe10f&=&format=webp&width=953&height=953" },
    { name: "Kiwi", image: "https://media.discordapp.net/attachments/909114093540089906/1350456079695482956/20230108_170903.jpg?ex=67d6cdbb&is=67d57c3b&hm=d6d63e89cdd39efacbbc7b41b76b4373ee51c58111eb233aba2d75e23eefe10f&=&format=webp&width=953&height=953" },
    { name: "Kiwi", image: "https://media.discordapp.net/attachments/909114093540089906/1350456079695482956/20230108_170903.jpg?ex=67d6cdbb&is=67d57c3b&hm=d6d63e89cdd39efacbbc7b41b76b4373ee51c58111eb233aba2d75e23eefe10f&=&format=webp&width=953&height=953" },
    { name: "Kiwi", image: "https://media.discordapp.net/attachments/909114093540089906/1350456079695482956/20230108_170903.jpg?ex=67d6cdbb&is=67d57c3b&hm=d6d63e89cdd39efacbbc7b41b76b4373ee51c58111eb233aba2d75e23eefe10f&=&format=webp&width=953&height=953" },
];

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const catsPerPage = 10;
    const totalPages = Math.ceil(cats.length / catsPerPage);

    // Calculate the index of the first cat to display
    const startIndex = (currentPage - 1) * catsPerPage;

    // Function to handle page change
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            <div className='column-container-list'>
                <UpperBorder content="Adopt a Cat!"/>

                <Rectangle type="list">
                    <FilterBar></FilterBar>
                    <CatList catList={cats} startIndex={startIndex}></CatList>
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



export default Home;
