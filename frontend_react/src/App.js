import React from "react";
import { Routes, Route } from "react-router-dom";


import { Home, Movies, Pictures, Settings, Smart } from "./container";
import { Navbar } from "./components";

import "./App.scss";
import AccountInfo from "./components/AccountInfo/AccountInfo";
import HddInfo from "./components/HddInfo/HddInfo";

const App = () => {
  
  return (
    <div className="app">
      <div className="app__nav">
        <Navbar />
      </div>
      <div className="app__side-wrapper">
        <div className="app__header">
          <div className="hddWrapper">            
             <HddInfo />
            </div>          
        
        <div className="notifications">
          <AccountInfo />
        </div>
        </div>
      
      <div className="app__containers">
        <Routes>
            <Route exact path="/" element={<Home />} />

            <Route path="/movies" element={<Movies />} />

            <Route path="/pictures" element={<Pictures />} />

            <Route path="/settings" element={<Settings />} />

            <Route path="/smart" element={<Smart />} />
          </Routes>
      </div>
    </div>
    </div>
  );
};

export default App;
