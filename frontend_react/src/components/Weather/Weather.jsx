import React, { useState, useEffect } from "react";
import CardHeaders from "../CardHeaders/CardHeaders";

import "./Weather.scss";

const Weather = () => {
  let city = "Bloxwich";

  const API = process.env.REACT_APP_WEATHER_API;
  const url = `http://api.weatherapi.com/v1/current.json?key=${API}&q=${city}`;

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url).then((res) => res.json());

    setData(response);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  if (data.length === 0) {
    return <h1> loading </h1>;
  }
  console.log(data, "asa");

  
  return (
    <div className="app__Weather">
      <div className="header">
        <CardHeaders title="Weather" />
      </div>
      <div className="content">
        <p>Weather in {city}</p>
        <div className="wrapper">
          <div className="icon">
            <img src={data.current.condition.icon} alt="icon" />
          </div>
          <div className="weather_data">
            <h1>{data.current.temp_c}°C</h1>
            <p>{data.current.condition.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
