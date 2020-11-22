import "./Weather.css";

export default function Weather() {
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
            <span className="temperature float-left">11</span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6 mt-2">
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
