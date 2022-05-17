import React from "react";

import "./Weather.scss";

const Weather = () => {
  return <div class="app__Weather app__flex">
      <p>Weather in **city**</p>
      <h1>temp C</h1>
      <p>description</p>      
  </div>;
};

export default Weather;
