import React from "react";
import { Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHardDrive,
  faCircleQuestion,
  faEnvelope,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import ProgressBar from 'react-bootstrap/ProgressBar';

import { Home, Movies, Pictures, Settings, Smart } from "./container";
import { Navbar } from "./components";

import "./App.scss";

const App = () => {
  const now = 45;
  return (
    <div className="app">
      <div className="app__nav">
        <Navbar />
      </div>
      <div className="app__side-wrapper">
        <div className="app__header">
          <div className="hddWrapper">            
              <FontAwesomeIcon icon={faHardDrive} className="icons" />
              <ProgressBar animated now={now} label={`${now}%`} className="progress-bar" />
            </div>          
        
        <div className="notifications">
          <div className="icons-wrap">
            <FontAwesomeIcon icon={faCircleQuestion} className="icons" />
            <FontAwesomeIcon icon={faEnvelope} className="icons" />
            <FontAwesomeIcon icon={faBell} className="icons" />
          </div>
          <div className="userMenu">
            <h1>Username</h1>
          </div>
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
