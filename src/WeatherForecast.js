import React, { useState } from "react";
import Axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastPreview from "./WeatherForecastPreview";
import Loader from "react-loader-spinner";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <WeatherForecastPreview data={forecast.list[0]} />
        <WeatherForecastPreview data={forecast.list[1]} />
        <WeatherForecastPreview data={forecast.list[2]} />
        <WeatherForecastPreview data={forecast.list[3]} />
        <WeatherForecastPreview data={forecast.list[4]} />
        <WeatherForecastPreview data={forecast.list[5]} />
      </div>
    );
  } else {
    const apiKey = "d20ee31d1c5fc8d0a74be4a2ab93bf1f";
    const units = "metric";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${units}`;
    Axios.get(url).then(handleForecastResponse);
    return <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />;
  }
}
