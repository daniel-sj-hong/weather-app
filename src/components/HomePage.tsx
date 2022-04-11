import { useState } from "react";
import Header from "./Header";
import Layout from "./Layout";
import Weather from "./Weather";
import Client, { WeatherEntry, Forecast } from "../api/client";

// import Forecast from "./Forecast";

export default function HomePage() {
  const [zipCode, setZipCode] = useState(0)
  const [weather, setWeather] = useState({})
  const [forecast, setForecast] = useState({})
  const [error, setError] = useState({isFailed: false, message:""})

  const handleSubmit = (e: React.SyntheticEvent) => {
    if (Object.keys(e).length > 0) {
      e.preventDefault()
    }
    setError({ isFailed: false, message: ''});
    if (zipCode) {
      Client.getWeatherByZipCode(zipCode)
      .then(result => {
        setWeather(result as WeatherEntry);
        if (result.coord !== undefined && result.coord.lon !== undefined && result.coord.lat !== undefined) {
          Client.getForecast(result.coord.lat, result.coord.lon).then(forecastResult => {
            setForecast(forecastResult as Forecast)
          })
        }
      })
      .catch(err => {
        console.log(err);
        if(err === undefined || err.response === undefined) {
          setError({ isFailed: true, message: 'Server error.' });
        } else if (err.response.status === 404) {
          setError({isFailed: true, message: 'Invalid zip code'});
        } else if (err.response.status === 401 || err.response.status === 429 || err.response.status > 500) {
          setError({isFailed: true, message: 'Server error.'})
        }
      })
    }
  }

  console.log('weather: ', weather);
  console.log('forecast: ', forecast);

  if (error.isFailed) {
    return (
      <Layout>
        <Header zipCode={zipCode} updateZip={setZipCode} handleSubmit={handleSubmit} />
        <p>{error.message}</p>
      </Layout>
    )
  } else if (Object.keys(weather).length === 0) {
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
