import React from "react";
import UpperBorder from "../../components/upper_border/UpperBorder";
import Button from "../../components/button/Button";
import "./Home.css";
import {Link} from 'react-router-dom';
import Rectangle from "../../components/rectangle/Rectangle";

const Home = () => {
    return (
        <div className='column-container'>
            <UpperBorder content={"Adopt a Cat! - Home"} />
            <div className='row-container'>
                <Rectangle type="left" width="50%" backgroundColor="var(--bubblegum)">
                    <Link to="/cats">
                        <Button content={"Show Cat List"} />
                    </Link>
                    <Link to="">
                        <Button content={"To Add Later"} />
                    </Link>
                </Rectangle>
                <Rectangle type="right" width="50%" backgroundColor="#FFDD4D" imageSrc="https://i.pinimg.com/736x/db/28/b2/db28b29fc597f6fd9261fb616999776f.jpg" />
            </div>
        </div>
    )
};



export default Home;
