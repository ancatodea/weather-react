import React from "react";
import "./Overview.css";
import Cloud from "./images/cloud.png";

export default function Overview(props) {
  return (
    <div className="Overview">
      <h1>{props.defaultCity}</h1>
      <ul>
        <li>
          Last updated: Tuesday 10:00 
        </li>
        <li>{props.info.description}</li>
      </ul>
      <div className="row">
         <div className="col-6">
                <div className="Temperature">
        <img src={Cloud} alt="cloud" id="icon" />
        <strong>{Math.round(props.info.temperature)}</strong>
        <span className="units">°C</span>
      </div>
    </div>
    <div className="col-6">
       <div className="WeatherData">
      <ul>
        <li>
          Humidity: {props.info.humidity}%
        </li>
        <li>
          Wind: {props.info.wind}m/s
        </li>
      </ul>
    </div>
    </div>
  </div>
  </div>
  );
}
