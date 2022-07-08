import React from "react";
import "./Temperature.css";
import Cloud from "./images/cloud.png";

export default function Temperature() {
  return (
    <div className="Temperature">
      <div className="clearfix weather-temperature">
        <img src={Cloud} alt="cloud" id="icon" />
        <strong id="temperature">15</strong>
        <span className="units">°C</span>
      </div>
    </div>
  );
}
