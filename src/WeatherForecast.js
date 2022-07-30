import React, {useState, useEffect} from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast(props) {
  const[loaded,setLoaded]= useState(false);
  const[forecast,setForecast] = useState("");

  useEffect (() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    
  }

  function load() {

  let apiKey = "c8dfba9473e483757034c96569ec14f9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  }

 if (loaded) {
   return(
     <div className="WeatherForecast row">
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
    );
   } else {
     load();

  return null;
   
 }
}