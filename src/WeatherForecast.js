import React, {useState, useEffect} from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast(props) {
  const[loaded,setLoaded]= useState(false);
  const[forecast,setForecast] = useState("");

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    
  }

  useEffect (() => {
    setLoaded(false);
  }, [props.coordinates]);

  function load() {

  const apiKey = "8c73d9e40f2c61892a0a28af2038e049";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  }

 if (loaded) {
   return(
     <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function(dailyForecast, index){
            if (index < 5) {
              return (
                 <div className="col" key={index}>
                   <WeatherForecastDay data={dailyForecast} />      
                 </div>
              );
            } else {
              return null;
            }
          })}
        </div>
     </div>
    );
   } else {
     load();

  return null;
   
 }
}