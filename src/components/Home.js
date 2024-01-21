import React from "react";
import { NavLink } from "react-router-dom";


const Home = ()=>{

    return <div>
    <h1>Item list</h1>
    <ul>
       <li><NavLink to="/items/1">Item1</NavLink></li>
       <li><NavLink to="/items/2">Item2</NavLink></li>
       <li><NavLink to="/items/3">Item3</NavLink></li>
    </ul>
    </div>
}

export default Home;