import { useEffect, useState } from "react";
import Header from "./Header";
import Layout from "./Layout";
import Weather from "./Weather";
import Client, { FormattedCurrentWeatherEntry } from "../api/client";
import { WeatherEntry } from "../api/client";
// import WeatherForecast from "./WeatherForecast";

export default function HomePage() {
  const [zipCode, setZipCode] = useState(0)
  const [currentWeather, setCurrentWeather] = useState({})
  const [formattedCurrentWeather, setFormattedCurrentWeather] = useState({} as FormattedCurrentWeatherEntry)
  const [forecastWeather, setForecastWeather] = useState({})

  function reformatResult(response: WeatherEntry) {
    setFormattedCurrentWeather({
      coordinates: response.coord,
      temperature: Math.round(response.main.temp),
      wind: response.wind.speed,
      date: response.dt,
      city: response.name,
      humidity: response.main.humidity,
      description: response.weather[0].description
    });
  }

  useEffect(() => {
    Client.getForecast(formattedCurrentWeather.coordinates.lat, formattedCurrentWeather.coordinates.lon)
    .then(result => {
      console.log(result)
      // setForecastWeather(result);
    })
  }, [])

  useEffect(() => {
    if (zipCode) {
      Client.getWeatherByZipCode(zipCode)
      .then(result => {
        setCurrentWeather(result);
        reformatResult(result);
      })
    }
  }, [zipCode])

  const updateZip = (zip: number) => {
    setZipCode(zip);
  }

  console.log('weather: ', currentWeather);

  if (Object.keys(currentWeather).length === 0) {
    return (
      <Layout>
        <Header updateParentZip={updateZip} /> <span></span>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <Header updateParentZip={updateZip} />
        <Weather {...currentWeather as WeatherEntry} />
        {/* <WeatherForecast {...forecastWeather} /> */}
      </Layout>
    );
  }
}


// const EXAMPLE_ZIP_CODE = 37203;
/* const EXAMPLE_WEATHER_RESPONSE =
{
  "base": "stations",
  "clouds": {
      "all": 90
  },
  "cod": 200,
  "coord": {
      "lat": 36.1504,
      "lon": -86.7916
  },
  "dt": 1610367250,
  "id": 0,
  "main": {
      "feels_like": 21.09,
      "humidity": 74,
      "pressure": 1026,
      "temp": 29.73,
      "temp_max": 30.2,
      "temp_min": 28.99
  },
  "name": "Nashville",
  "sys": {
      "country": "US",
      "id": 4609,
      "sunrise": 1610369886,
      "sunset": 1610405514,
      "type": 1
  },
  "timezone": -21600,
  "visibility": 10000,
  "weather": [
      {
          "description": "overcast clouds",
          "icon": "04n",
          "id": 804,
          "main": "Clouds"
      }
  ],
  "wind": {
      "deg": 10,
      "speed": 6.91
  }
} */
