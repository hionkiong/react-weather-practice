import React, { useState } from "react";
import "./Weather.css";
import Axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherInfo({
      temperature: response.data.main.temp,
      feels_like: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form className="row">
          <div className="col-10">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-2">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </form>
        <h1>London</h1>
        <ul>
          <li>Sunday 15:00</li>
          <li>Sunny</li>
        </ul>
        <div className="row weatherDetails">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="sunny"
                className="float-left"
              ></img>
              <span className="temperature float-left">
                {Math.round(weatherInfo.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6 mt-2">
            <ul>
              <li>Feels like: {Math.round(weatherInfo.feels_like)} </li>
              <li>Humidity: {weatherInfo.humdity}%</li>
              <li>Wind: {weatherInfo.wind}mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "d20ee31d1c5fc8d0a74be4a2ab93bf1f";
    let cityName = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    Axios.get(apiUrl).then(handleResponse);
    return <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />;
  }
}
