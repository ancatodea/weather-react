import React from "react";
import "./Overview.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function Overview(props) {
  return (
    <div className="Overview">
      <h1>{props.info.name}</h1>
      <ul>
        <li>
         <FormattedDate date={props.info.date} / >
        </li>
        <li>{props.info.description}</li>
      </ul>
      <div className="row">
         <div className="col-6">
         <div className="Temperature "> 
      
        <WeatherIcon code= {props.info.icon} />
       
        <WeatherTemperature celsius={props.info.temperature} />
    
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
