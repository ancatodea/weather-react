import React from "react";
import "./WeatherData.css";

export default function WeatherData() {
  return (
    <div className="WeatherData">
      <ul>
        <li>
          Humidity: 20 <span id="humidity"></span>%
        </li>
        <li>
          Wind: 10 <span id="wind"></span> m/s
        </li>
      </ul>
    </div>
  );
}
