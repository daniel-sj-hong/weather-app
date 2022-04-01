import Client from "../api/client"

import React, { useEffect, useState } from "react";

export default function Header() {
  const [zipCode, setZipCode] = useState('')
  const [weather, setWeather] = useState({})
  const [isLoaded, setisLoaded] = useState(false)

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    Client.getWeatherByZipCode(parseInt(zipCode))
    .then(result => {
      setWeather(result);
    })
    setZipCode('')
  }

  useEffect(() => {
    console.log(weather);
    if (Object.keys(weather).length > 0 ) {
      setisLoaded(true);
    }
  }, [weather])

  return (
    <div className="header">
      <h1>Weather App</h1>
      {isLoaded ? <h1>is true</h1>
      : <form typeof="submit" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="ZIP Code"
          name="zip"
          onChange={(e) => setZipCode(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      }
    </div>
  );
}
