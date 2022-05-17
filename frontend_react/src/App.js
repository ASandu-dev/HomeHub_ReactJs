import React from "react";

import { Home, Movies, Pictures, Settings, Smart } from "./container";
import {Navbar} from './components';

import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Home />
      <Movies />
      <Pictures />
      <Settings />
      <Smart />
    </div>
  );
};

export default App;
