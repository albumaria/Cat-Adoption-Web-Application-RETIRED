import React from "react";
import UpperBorder from "../../components/upper_border/UpperBorder";
import Button from "../../components/button/Button";
import "./Home.css";
import {Link} from 'react-router-dom';
import Rectangle from "../../components/rectangle/Rectangle";
import CatBanner from "../../assets/catbanner.png"

const Home = () => {
    return (
        <div className='column-container'>
            <UpperBorder content={"Adopt a Cat! - Home"} />
            <div className='row-container'>
                <Rectangle type="left" width="50%" backgroundColor="var(--bubblegum)">
                    <Link to="/cats">
                        <Button content={"Show Cat List"} />
                    </Link>
                    <Link to="/statistics">
                        <Button content={"Show Cat Statistics"} />
                    </Link>
                </Rectangle>
                <Rectangle type="right" width="50%" backgroundColor="var(--eggplant)" imageSrc={CatBanner} />
            </div>
        </div>
    )
};



export default Home;
