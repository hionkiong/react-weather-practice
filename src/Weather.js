import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
          />
        </div>
        <div className="col-3">
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
      </form>
      <h1>London</h1>
      <ul>
        <li>Sunday 15:00</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny"
          ></img>
          <span className="temperature">11°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 2%</li>
            <li>Humidity: 66%</li>
            <li>Wind: 6 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
