import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Home from "./pages/home/Home";
import CatList from "./pages/cat_list/CatList";
import "./index.css";
import CatDetails from "./pages/cat_details/CatDetails";
import AddCat from "./pages/add_cat/AddCat";
import UpdateCat from "./pages/update_cat/UpdateCat"
import Statistics from "./pages/statistics/Statistics";
import CatEntities from "./assets/CatEntities";
import ThreadCats from "./assets/ThreadCats"

function App() {
    const [catEntities, setCatEntities] = useState([...CatEntities]);

    const addCat = (newCat) => {
        setCatEntities(prevCats => [...prevCats, newCat]);
    };

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < ThreadCats.length) {
                addCat(ThreadCats[index]);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 3000); // Adds a new cat every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>} />
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/cats" element={<CatList catEntities={catEntities} setCatEntities={setCatEntities}/>}/>
                    <Route path="/:catName" element={<CatDetails catEntities={catEntities}/>} />
                    <Route path="/add" element={<AddCat addCat={addCat}/>} />
                    <Route path="/update/:catName" element={<UpdateCat catEntities={catEntities} setCatEntities={setCatEntities}/>} />
                    <Route path="/nothing"/>
                    <Route path="/statistics" element={<Statistics catEntities={catEntities}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}


export default App;