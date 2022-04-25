import './App.css';
import React, { useState } from "react";
import axios from "axios";

export default function Search() {
   let [city, setCity] = useState("");
   let [weather, setWeather] = useState({});
 
   function displayWeather(response) {
     setWeather({
       temperature: response.data.main.temp,
       wind: response.data.wind.speed,
       humidity: response.data.main.humidity,
       icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
       description: response.data.weather[0].description
     });
   }
 
   function handleSubmit(event) {
     event.preventDefault();
     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=540d7044742ae29f4d3c2d9968a739fd&units=metric`;
     axios.get(url).then(displayWeather);
   }
   function updateCity(event) {
     setCity(event.target.value);
   }
 
   let form = (
     <form onSubmit={handleSubmit} className="citySearchForm">
       <input type="search" className="searchInput" autoComplete="false" placeholder="Enter a city" onChange={updateCity} />
       <input type="submit" className ="locationButton" value="🔍"/>
     </form>
   );
 
   return (
      <div>
      {form}
        <div className="description">{weather.description}</div>
        <div className="weatherDetails">Humidity: {weather.humidity}%</div>
        <div className="weatherDetails">Wind speed: {weather.wind}km/h</div>
      <div className="todaysTemp">{Math.round(weather.temperature)}<span className="units">°c</span></div>
      <img src={weather.icon} alt={weather.description} />
      </div>
   );
 }