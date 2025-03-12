import React from "react";
import UpperBorder from "../../components/upper_border/UpperBorder";
import "./Cats.css";
import Rectangle from "../../components/rectangle/Rectangle";
import Button from "../../components/button/Button";
import CatCard from "../../components/cat_card/CatCard";


const Home = () => {
    let catEntity = {image: "https://i.pinimg.com/736x/ff/f0/df/fff0dfb34aca08f19f9463a428230149.jpg", name: "amadeus"};

    return (
        <div>
            <div className='column-container-list'>
                <UpperBorder content="Adopt a Cat!"/>

                <div className='list-wrapper'>
                    <Rectangle type="list">
                        <CatCard cat={catEntity}></CatCard>
                    </Rectangle>
                </div>


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
