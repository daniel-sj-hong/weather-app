import { useState } from "react";
import Header from "./Header";
import Layout from "./Layout";
import CurrentWeather from "./CurrentWeather";
import Client, { WeatherEntry, ForecastEntry } from "../api/client";
import CountDown from "./CountDown";
import Forecast from "./Forecast";


export default function HomePage() {
  const [zipCode, setZipCode] = useState<number>(0)
  const [weather, setWeather] = useState<any>({})
  const [forecast, setForecast] = useState<any>({})
  const [error, setError] = useState({ isFailed: false, message: "" })
  const [city, setCity] = useState<string>('');
  const [cityButton, setCityButton] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent) => {
    if (Object.keys(e).length > 0) {
      e.preventDefault()
    }
    setError({ isFailed: false, message: '' });
    if (cityButton) {
      Client.getWeatherByCity(city)
        .then(result => {
          setWeather(result as WeatherEntry);
          if (result.coord !== undefined && result.coord.lon !== undefined && result.coord.lat !== undefined) {
            Client.getForecast(result.coord.lat, result.coord.lon).then(forecastResult => {
              setForecast(forecastResult as ForecastEntry)
            })
          }
        })
    }
    if (zipCode) {
      Client.getWeatherByZipCode(zipCode)
        .then(result => {
          setWeather(result as WeatherEntry);
          if (result.coord !== undefined && result.coord.lon !== undefined && result.coord.lat !== undefined) {
            Client.getForecast(result.coord.lat, result.coord.lon).then(forecastResult => {
              setForecast(forecastResult as ForecastEntry)
            })
          }
        })
        .catch(err => {
          console.log(err);
          if (err === undefined || err.response === undefined) {
            setError({ isFailed: true, message: 'Server error.' });
          } else if (err.response.status === 404) {
            setError({ isFailed: true, message: 'Invalid zip code' });
          } else if (err.response.status === 401 || err.response.status === 429 || err.response.status > 500) {
            setError({ isFailed: true, message: 'Server error.' })
          }
        })
    }
  }

  return (
    <Layout>
      <Header zipCode={zipCode} updateZip={setZipCode} handleSubmit={handleSubmit} city={city} updateCity={setCity} cityButton={cityButton} updateCityButton={setCityButton} />
      {error.isFailed && <p>{error.message}</p>}
      {Object.keys(weather).length === 0 ?
        <>
          <p className="text-positioning">Waiting for a valid zip code...</p>
          <div className="lds-dual-ring"></div>
        </>
        :
        <div className="section card">
          <img src={`./images/${(Math.round(weather.main.temp) >= 80) ? 'hot' : (Math.round(weather.main.temp) >= 60) ? 'perfect' : 'ice'}.jpg`} alt="weather" className="background" />
          <div className="row">
            <CurrentWeather {...weather as WeatherEntry} />
            {forecast.daily && <Forecast daily={forecast.daily} />}
          </div>
          <CountDown handleSubmit={handleSubmit} />
        </div>
      }
    </Layout>
  )
}
