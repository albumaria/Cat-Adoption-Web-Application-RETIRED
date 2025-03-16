import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React, { useState } from "react";
import Home from "./pages/home/Home";
import CatList from "./pages/cat_list/CatList";
import "./index.css";
import CatDetails from "./pages/cat_details/CatDetails";
import AddCat from "./pages/add_cat/AddCat";
import UpdateCat from "./pages/update_cat/UpdateCat"
import CatEntities from "./assets/CatEntities";

function App() {
    const [catEntities, setCatEntities] = useState([...CatEntities]);

    const addCat = (newCat) => {
        setCatEntities(prevCats => [...prevCats, newCat]);
    };

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
            </Routes>
        </BrowserRouter>
    </div>
  );
}


export default App;
