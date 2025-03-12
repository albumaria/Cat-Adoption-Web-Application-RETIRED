import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/home/Home";
import CatList from "./pages/cats/Cats";
import "./index.css";

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/cats" element={<CatList/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}


export default App;
