import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";
import 'bootstrap/scss/bootstrap.scss';
import "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"



const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render( 
<React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>)