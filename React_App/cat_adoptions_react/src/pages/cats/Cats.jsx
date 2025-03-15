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
    { name: "Mimir", image: "https://media.discordapp.net/attachments/1168244480126754848/1350511457770410005/image.png?ex=67d7014e&is=67d5afce&hm=d49ce0176568a41d0f56c952004b79e3ff97833b2521b5291d4feade167cb49f&=&format=webp&quality=lossless&width=1407&height=1381" },
    { name: "Domingo", image: "https://i.pinimg.com/736x/fe/0c/23/fe0c235ba2a88a0b07f9cd5156347d0b.jpg"},
    { name: "Plug", image: "https://i.pinimg.com/736x/7e/bd/8b/7ebd8bd7610cbf760c1e9630e2d1f643.jpg" },
    { name: "Luna", image: "https://media.discordapp.net/attachments/935568202992324698/1302612921259659347/20241103_143747.jpg?ex=67d6c651&is=67d574d1&hm=191d4695ac2e2a5f7496d80cba13d173c1060538c209f04c66a882c4c8fbe4ad&=&format=webp&width=628&height=838" },
    { name: "Pufoasa", image: "https://media.discordapp.net/attachments/647096625394745374/1350452897443217459/Screenshot_20230615_151642_com.png?ex=67d6cac4&is=67d57944&hm=34df0ab884ca57958a5abeb0c3c2a33094b76288ef02c9121d52f921ff847054&=&format=webp&quality=lossless&width=442&height=577" },
    { name: "Estus", image: "https://media.discordapp.net/attachments/1168244480126754848/1350511868535377970/image.png?ex=67d701b0&is=67d5b030&hm=db40cc643eb8844c7ebe9b6a967a2618b940ba2ff3433aa9592703ebaab7db05&=&format=webp&quality=lossless&width=1338&height=1409" },
    { name: "Boris", image: "https://media.discordapp.net/attachments/909114093540089906/1350452226694578187/20250204_113524.jpg?ex=67d6ca25&is=67d578a5&hm=c5322370a8116273aed6719d49688b0f0666d7326c98c6badf2cfab1d4e87286&=&format=webp&width=927&height=1237" },
    { name: "Kiwi", image: "https://media.discordapp.net/attachments/909114093540089906/1350456079695482956/20230108_170903.jpg?ex=67d6cdbb&is=67d57c3b&hm=d6d63e89cdd39efacbbc7b41b76b4373ee51c58111eb233aba2d75e23eefe10f&=&format=webp&width=953&height=953" },
    { name: "Mimi", image: "https://i.imgur.com/mfeGQyI.jpeg" },
    { name: "Coots", image: "https://pbs.twimg.com/media/FVcjsz-WAAA7vkK.jpg" },
    { name: "Prosciutto", image: "https://i.pinimg.com/736x/16/d8/41/16d8419a648df72d55ade0109cd1fb57.jpg" },
    { name: "Sisi", image: "https://i.pinimg.com/736x/55/1d/2e/551d2ed72f147ab03771ea7847adf1a0.jpg"},
    { name: "Cindy", image: "https://i.pinimg.com/736x/f3/33/bb/f333bb3168cea81b276512f242247d44.jpg"},
    { name: "Gosig", image: "https://media.discordapp.net/attachments/909114093540089906/1350518580432867401/2016e02c26f78bb9d7256850fa6a756e.jpg?ex=67d707f0&is=67d5b670&hm=47ede6c1d9d92ce363eb05b87105d40ca3a4cb4fb6c5331fd32bcdfb47af7946&=&format=webp&width=1237&height=1237"},
    { name: "Diesel", image: "https://media.discordapp.net/attachments/909114093540089906/1350518580952698972/20230917_114151.jpg?ex=67d707f1&is=67d5b671&hm=52ef068b0c94ddb7ff149ce3442d21c7cbb71b5c81dfe547a841faca6f217d0d&=&format=webp&width=927&height=1237"},
    { name: "Pisa", image: "https://media.discordapp.net/attachments/909114093540089906/1350518581527576596/20230917_120307.jpg?ex=67d707f1&is=67d5b671&hm=cf7f7f67c7f855c8c0f811394dd976f3f798ed76653b3911cdf1a1939a6f790f&=&format=webp&width=927&height=1237"},
    { name: "Mangalia", image: "https://media.discordapp.net/attachments/909114093540089906/1350518582261583922/20230811_122533.jpg?ex=67d707f1&is=67d5b671&hm=886a9c287c21406887bfe1d26b926b9a05e88ef82f2a8f54f1b6aa45c6baf914&=&format=webp&width=927&height=1237"},
    { name: "Suceava", image: "https://media.discordapp.net/attachments/909114093540089906/1350518582856912967/20230727_151550.jpg?ex=67d707f1&is=67d5b671&hm=ff349e8287699e33d46bfecd3b3a34456d7504bd534a05a3953069253a8ed255&=&format=webp&width=927&height=1237"},
    { name: "Micuta", image: "https://media.discordapp.net/attachments/647096625394745374/1350464521734459465/20250315_144230.jpg?ex=67d6d598&is=67d58418&hm=6d6a277c082515e06517a23ee2836f351ad577ab536df6f355cad37a1b789e71&=&format=webp&width=639&height=1237" },
    { name: "Piti", image: "https://media.discordapp.net/attachments/647096625394745374/1350464522296754306/20250315_144326.jpg?ex=67d6d598&is=67d58418&hm=237671aa1acbed0c2be04ba7bb555c192dd8e6aa27caa9520f008373944a2af0&=&format=webp&width=1581&height=1237" },
    { name: "Bubico", image: "https://media.discordapp.net/attachments/909114093540089906/1350559719722451116/image.png?ex=67d72e41&is=67d5dcc1&hm=b3df7928740284140dd8821876f6cbf25508964279d0632aa2726fb4d1f61aaa&=&format=webp&quality=lossless&width=1211&height=1183"},
    { name: "Fernando", image: "https://media.discordapp.net/attachments/1168244480126754848/1350559905530249316/image.png?ex=67d72e6d&is=67d5dced&hm=b5592a2ae203cd7748a243068859c1c2131d455c541cf45b995349582f9124c9&=&format=webp&quality=lossless&width=747&height=711" },
    { name: "Piticlic", image: "https://media.discordapp.net/attachments/1168244480126754848/1350550282190323835/IMG_2580.jpg?ex=67d72577&is=67d5d3f7&hm=204815bf32f2cb39d5c365606d9485c1b322a262ed551918993a3b9aadf38c16&=&format=webp&width=769&height=769" },
];

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const filteredCats = cats.filter(cat =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase())
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
        setSelectedCat(prevSelectedCat => (prevSelectedCat === cat ? null : cat));  // if the now selected cat is equal to previous, deselect
    };

    return (
        <div>
            <div className='column-container-list'>
                <UpperBorder content="Adopt a Cat!"/>

                <Rectangle type="list">
                    <FilterBar onSearch={setSearchQuery}></FilterBar>
                    <CatList catList={filteredCats} startIndex={startIndex} selectedCat={selectedCat} onCatSelect={handleCatSelection}></CatList>
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
