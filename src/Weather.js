import React, { useState } from "react";
import "./Weather.css";
import Axios from "axios";
import Loader from "react-loader-spinner";
import WeatherData from "./WeatherData";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState({});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherInfo({
      city: response.data.name,
      temperature: response.data.main.temp,
      feels_like: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
    setReady(true);
  }

  function search() {
    const apiKey = "d20ee31d1c5fc8d0a74be4a2ab93bf1f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    Axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form className="row" onSubmit={handleSubmit}>
          <div className="col-10">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              onChange={handleCityChange}
            />
          </div>
          <div className="col-2">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </form>
        <WeatherData data={weatherInfo} />
      </div>
    );
  } else {
    search();
    return <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />;
  }
}
