import "./App.css";
import React from "react";
import Form from "./Form";
import Overview from "./Overview";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Form />
            <Overview />
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
