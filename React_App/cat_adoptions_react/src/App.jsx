import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/home/Home";
import CatList from "./pages/cat_list/CatList";
import "./index.css";
import CatDetails from "./pages/cat_details/CatDetails";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>} />
                <Route path="/home" element={<Home/>}/>
                <Route path="/cats" element={<CatList/>}/>
                <Route path="/:catName" element={<CatDetails />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}


export default App;
