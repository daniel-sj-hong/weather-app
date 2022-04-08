import { useState } from "react";
import Header from "./Header";
import Layout from "./Layout";
import Weather from "./Weather";
// import Client, { WeatherEntry, FormattedCurrentWeatherEntry } from "../api/client";
import Client, { WeatherEntry } from "../api/client";

export default function HomePage() {
  const [zipCode, setZipCode] = useState(0)
  const [currentWeather, setCurrentWeather] = useState({})
  // const [forecastWeather, setForecastWeather] = useState({})

  const handleSubmit = (e: React.SyntheticEvent) => {
    if (Object.keys(e).length > 0) {
      e.preventDefault()
    }
    if (zipCode) {
      Client.getWeatherByZipCode(zipCode).then(result => {
        setCurrentWeather(result as WeatherEntry)
        // if (result.coord !== undefined && result.coord.lon !== undefined && result.coord.lat !== undefined) {
        //   Client.getForecast(result.coord.lat, result.coord.lon).then(result => {
        //     setForecastWeather(result as FormattedCurrentWeatherEntry)
        //   })
        // }
      })
    }
  }

  console.log('weather: ', currentWeather);
  // console.log('forecast weather: ', forecastWeather);

  if (Object.keys(currentWeather).length === 0) {
    return (
      <Layout>
        <Header zipCode={zipCode} updateZip={setZipCode} handleSubmit={handleSubmit} /> <span></span>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <Header zipCode={zipCode} updateZip={setZipCode} handleSubmit={handleSubmit} />
        <Weather {...currentWeather as WeatherEntry} handleSubmit={handleSubmit} />
      </Layout>
    );
  }
}
