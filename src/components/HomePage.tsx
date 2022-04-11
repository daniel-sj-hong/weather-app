import { useState } from "react";
import Header from "./Header";
import Layout from "./Layout";
import Weather from "./Weather";
import Client, { WeatherEntry, Forecast } from "../api/client";
// import Forecast from "./Forecast";
// import Client, { WeatherEntry } from "../api/client";

export default function HomePage() {
  const [zipCode, setZipCode] = useState(0)
  const [weather, setWeather] = useState({})
  const [forecast, setForecast] = useState({})

  const handleSubmit = (e: React.SyntheticEvent) => {
    if (Object.keys(e).length > 0) {
      e.preventDefault()
    }
    if (zipCode) {
      Client.getWeatherByZipCode(zipCode)
      .then(result => {
        console.log('result: ', result);
        let data = result as WeatherEntry;
        if (result.coord !== undefined && result.coord.lon !== undefined && result.coord.lat !== undefined) {
          Client.getForecast(result.coord.lat, result.coord.lon).then(forecastResult => {
            setForecast(forecastResult as Forecast)
            setWeather(data as WeatherEntry);
          })
        }
      })
      .catch(err => {
        console.log(err.message);
      })
    }
  }

  console.log('weather: ', weather);
  console.log('forecast: ', forecast);

  if (Object.keys(weather).length === 0) {
    return (
      <Layout>
        <Header zipCode={zipCode} updateZip={setZipCode} handleSubmit={handleSubmit} />
        <p className="text-center">Waiting for a valid zip code...</p>
        <div className="lds-dual-ring"></div>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <Header zipCode={zipCode} updateZip={setZipCode} handleSubmit={handleSubmit} />
        <Weather {...weather as WeatherEntry} handleSubmit={handleSubmit} />

        {/* <Forecast /> */}

      </Layout>
    );
  }
}
