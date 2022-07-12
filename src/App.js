import "./App.css";
import React from "react";
import Form from "./Form";
import Overview from "./Overview";
import Temperature from "./Temperature";
import WeatherData from "./WeatherData";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Form />
            <Overview />
            <div className="row">
              <div className="col-6">
                <Temperature />
              </div>
              <div className="col-6">
                <WeatherData />
              </div>
            </div>
          </div>
          <small>
            <a
              href="https://github.com/ancatodea/weather-react"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code { }
            </a>
            by Anca Todea
          </small>
        </div>
      </div>
    </div>
  );
}
