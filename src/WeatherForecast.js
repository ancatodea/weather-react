import React, {useState} from "react";
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

 if (loaded) {
   return(
     <div className="WeatherForecast">
        <div className="row">
           <div className="col">
             <WeatherForecastDay data={forecast[0]} />      
           </div>
        </div>
     </div>
    );
   } else {

  const apiKey = "c8dfba9473e483757034c96569ec14f9";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return null;
   
 }
}