import React from "react";
import { format } from "date-fns";

const WeatherCard = ({ weather, error }) => {
  // If there's an error, show the "City Not Found" section
  if (error) {
    return (
      <div className="weather-card">
        <section className="cityy cityyy" style={{ display: "block" }}>
          <img src={"/asset/6_1.png"} className="msgimg" alt="City Not Found" />
          <div>
            <h1>City Not Found</h1>
            <h3 style={{ fontWeight: "400" }}>
              Could not find the weather condition for the city
            </h3>
          </div>
        </section>
      </div>
    );
  }

  // If no weather data, don't display anything
  if (!weather) {
    return null;
  }

  const { name, weather: weatherInfo, dt } = weather;
  const date = new Date(dt * 1000);
  const { wind, main, visibility } = weather;
  const highestPressure = main.pressure;
  const visibilityInKm = (visibility / 1000).toFixed(1);

  return (
    <div className="weather-card">
      <div className="upper" >
        <div className="location">
          <span className="material-symbols-outlined">location_on</span>
          <h2>{name}</h2>
        </div>
        <div className="date" style={{ fontWeight: "500", fontSize: "20px" }}>
          {format(date, "EEE, dd MMM")}
        </div>
      </div>

      <div className="sum">
        <img src={"/asset/200_1.png"} className="imgg" alt="Weather Icon" />
        <div className="suminfo">
          <h1 className="temp" style={{ marginBottom: "-10px" }}>
            {Math.round(main.temp)}°C
          </h1>
          <h3 className="con" style={{ fontWeight: "500" }}>
            {weatherInfo[0].description}
          </h3>
        </div>
      </div>

      <div className="consum" >
        <div>
          <div className="item">
            <span className="material-symbols-outlined">water_drop</span>
            <div className="itemi">
              <h3 className="humtext">Humidity</h3>
              <h5 className="humtext"> {main.humidity}%</h5>
            </div>
          </div>

          <div className="item">
            <span className="material-symbols-outlined">arrow_upward</span>
            <div className="itemi" style={{ marginLeft: "-30px" }}>
              <h3 className="humtext">Highest Pressure</h3>
              <h5 className="humtext"> {highestPressure} hPa</h5>
            </div>
          </div>
        </div>

        <div>
          <div className="item">
            <span className="material-symbols-outlined">air</span>
            <div className="itemi">
              <h3 className="humtext">Wind speed</h3>
              <h5 className="humtext"> {wind.speed} Km/hr</h5>
            </div>
          </div>

          <div className="item">
            <span className="material-symbols-outlined">visibility</span>
            <div className="itemi" style={{ marginLeft: "10px" }}>
              <h3 className="humtext">Visibility</h3>
              <h5 className="humtext"> {visibilityInKm} Km</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
