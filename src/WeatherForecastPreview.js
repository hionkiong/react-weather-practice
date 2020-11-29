import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastPreview.css";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    return <div>{hours}:00</div>;
  }
  return (
    <div className="WeatherForecastPreview col">
      {hours()}
      <WeatherIcon code={props.data.weather[0].icon} />
      {Math.round(props.data.main.temp)}°C
    </div>
  );
}
