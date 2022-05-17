import React from "react";

import { useEffect, useState } from "react";


import "./Weather.scss";

const Weather = () => {
  return <div className="app__Weather app__flex">
      <p>Weather in **city**</p>
      <h1>temp C</h1>
      <p>description</p>      
  </div>;
};


const API = process.env.REACT_APP_OPENWEATHER_API
const URL = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={{API}}'



export default Weather;
