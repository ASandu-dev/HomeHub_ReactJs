import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home, Movies, Pictures, Settings, Smart } from "./container";
import { Navbar } from "./components";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/movies" element={<Movies />} />

          <Route path="/pictures" element={<Pictures />} />

          <Route path="/settings" element={<Settings />} />

          <Route path="/smart" element={<Smart />} />
        </Routes>
      
    </div>
  );
};

export default App;
