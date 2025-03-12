import React from "react";
import UpperBorder from "../../components/upper_border/UpperBorder";
import "./List.css";
import Rectangle from "../../components/rectangle/Rectangle";
import Button from "../../components/button/Button";
import ListItem from "../../components/list_item/ListItem";


const Home = () => {
    return (
        <div>
            <div className='column-container-list'>
                <UpperBorder content="Adopt a Cat!"/>

                <div className='list-wrapper'>
                    <Rectangle type="list">
                        <ListItem></ListItem>
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
