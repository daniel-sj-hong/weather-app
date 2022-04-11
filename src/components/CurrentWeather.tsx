import { WeatherEntry } from "../api/client";

export default function CurrentWeather({ main, name, weather, wind }: WeatherEntry) {
  return (

        <div className="col-half weather-box transition">
          <h2 className="local">Weather</h2>
          <p className="today">Today's weather for that zip code:</p>
          <table>
            <tbody>
              <tr>
                <td>City:</td>
                <td>{name}</td>
              </tr>
              <tr>
                <td>description:</td>
                <td>{weather[0].description}</td>
              </tr>
              <tr>
                {/*Put other applicable "main" stuff in here*/}
                <td>Temperature:</td>
                <td>{Math.round(main.temp)}&deg;F</td>
              </tr>
              <tr>
                <td>Wind:</td>
                <td>{wind.speed} mph</td>
              </tr>
            </tbody>
          </table>
        </div>
  );
}
