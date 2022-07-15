import React from "react";
import "./Overview.css";
import Cloud from "./images/cloud.png";

export default function Overview() {
  return (
    <div className="Overview">
      <h1>New York</h1>
      <ul>
        <li>
          Last updated: Tuesday 10:00 
        </li>
        <li>Scattered clouds</li>
      </ul>
      <div className="row">
         <div className="col-6">
                <div className="Temperature">
        <img src={Cloud} alt="cloud" id="icon" />
        <strong>15</strong>
        <span className="units">°C</span>
      </div>
    </div>
    <div className="col-6">
       <div className="WeatherData">
      <ul>
        <li>
          Humidity: 20 %
        </li>
        <li>
          Wind: 10 m/s
        </li>
      </ul>
    </div>
    </div>
  </div>
  </div>
  );
}
