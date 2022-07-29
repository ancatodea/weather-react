import React, {useState} from "react";
import axios from "axios";
import Overview from "./Overview";
import "./Form.css";

export default function Form(props) {
  const [weatherData, setWeatherData] = useState({ready : false});
  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description : response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      name: response.data.name
    });
  }
  
  function search () {
    const apiKey = "8c73d9e40f2c61892a0a28af2038e049";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
   
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    search();
    
  }
  function changeCity(event) {
    setCity(event.target.value);

  }
  

  if (weatherData.ready){
    return (
    <div className="Form">
      <form 
      className="mb-3"
      onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              autoFocus="on"
              onChange={changeCity}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100 "
            />
          </div>
        </div>
      </form>
      <Overview  info={weatherData} />
    </div>
  );
  }else {
    search();
    return "Loading...";
  }
  
}
