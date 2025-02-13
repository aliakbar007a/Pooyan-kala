import React, {  useEffect, useState } from "react";
import "./App.css"
import { BrowserRouter as Router , Routes , Route, NavLink } from "react-router-dom";
// import {Create} from './page/openfood/Create/Create'
// import {Home} from './page/openfood/Home/Home'
// import {Recipe} from './page/openfood/Recipe/Recipe'
// import {Search} from './page/openfood/Search/Search'
// import { Navbar } from "./page/openfood/Components/Navbar/Navbar";
// import { Title } from "./page/tri/Title";
// import { Modal } from "./page/tri/Modal";
// import { NewMovie } from "./page/tri/NewMovie/NewMovie";
// import { Trip } from "./page/tri/safar/Trip";
// import {Home} from './page/tri/Home'
// import { Contact } from './page/tri/Contact'
// import {About} from './page/tri/About'
// import {Articles} from './page/tri/Articles'
// import {Nav} from './page/tri/Nav'
// import { BuyContext } from "./poyanKala/Components/Ps5Page/Components/BuyPs5Page/BuyPs5Page";
import {Header} from './poyanKala/Header/Header'
import { Navmenu } from "./poyanKala/Components/NavMenu/Navmenu";
import { Body } from "./poyanKala/Body/Body";
import { Login } from "./poyanKala/Components/Login/Login";
import { LapTopPage } from "./poyanKala/Components/LapTopPage/LapTopPage";
import { SingUp } from "./poyanKala/Components/SingUp/SingUp";
import { Ps5Page } from "./poyanKala/Components/Tamrin/Ps5Page";
import { ShopingCard } from "./poyanKala/Components/ShopingCard/ShopingCard";
import {Tamrin} from "./poyanKala/Components/Tamrin/Ps5Page"
function App() {
  
  

  return (
    <div className="App">
      
      <Router>
      
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path="/" element={<Body/>}/>
          <Route path="/laptop" element={<LapTopPage/>}/>
          <Route path="/ps5" element={<Ps5Page/>}/>
          <Route path="/singup" element={<SingUp/>}/>
          <Route path="/shopingcard" element={<ShopingCard/>}/>
          
        </Routes>
       
      </Router>
      
    </div>
  );
}
export default App;
