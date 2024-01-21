
import React from "react";
import './../styles/App.css';
import { Route , Routes } from "react-router-dom";
import Home from "./Home";
import ItemA from "./ItemA.js";
import ItemB from "./ItemB.js";
import ItemC from "./ItemC.js";
const App = () => {
  return (
    <div>
  
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/items/1" element={<ItemA/>}/>
          <Route path="/items/2" element={<ItemB/>}/>
          <Route path="/items/3" element={<ItemC/>}/>
        </Routes>
    </div>
  )
}

export default App
